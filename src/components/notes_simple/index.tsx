import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react"
import type { ChangeEvent } from "react"
import { Button } from "@/components/ui/button"
import { TextEditor } from "@/components/textEditor"
import worker from "@/lib/worker"
import useSDKConfig from "@/hooks/useSDKConfig"
import { useQuery } from "@tanstack/react-query"
import { Loader, Notebook, Paperclip, Plus, Trash2 } from "lucide-react"
import { showInputDialog } from "@/components/dialogs/input"
import useErrorToast from "@/hooks/useErrorToast"
import useLoadingToast from "@/hooks/useLoadingToast"
import { showConfirmDialog } from "@/components/dialogs/confirm"
import useWindowSize from "@/hooks/useWindowSize"
import { DESKTOP_TOPBAR_HEIGHT } from "@/constants"
import type { DriveCloudItem } from "@/components/drive"

const NOTE_FILE_NAME = "note.md"
const NOTES_ROOT_NAME = "Notes"

type NotesQueryData = {
	root: DriveCloudItem
	notes: DriveCloudItem[]
}

async function findOrCreateChildDirectory(parentUUID: string, name: string): Promise<DriveCloudItem> {
	const children = (await worker.listDirectory({ uuid: parentUUID, onlyDirectories: true })) as DriveCloudItem[]
	const existing = children.find(child => child.type === "directory" && child.name === name)

	if (existing) {
		return existing
	}

	return await worker.createDirectory({
		name,
		parent: parentUUID
	})
}

export const NotesSimple = memo(() => {
	const { baseFolderUUID } = useSDKConfig()
	const errorToast = useErrorToast()
	const loadingToast = useLoadingToast()
	const windowSize = useWindowSize()
	const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
	const loadingNoteRef = useRef<string | null>(null)

	const [selectedNote, setSelectedNote] = useState<DriveCloudItem | null>(null)
	const [noteFile, setNoteFile] = useState<DriveCloudItem | null>(null)
	const [content, setContent] = useState<string>("")
	const [attachments, setAttachments] = useState<DriveCloudItem[]>([])
	const [saving, setSaving] = useState<boolean>(false)

	const ensureNotesRoot = useCallback(async () => {
		return await findOrCreateChildDirectory(baseFolderUUID, NOTES_ROOT_NAME)
	}, [baseFolderUUID])

	const notesQuery = useQuery<NotesQueryData>({
		queryKey: ["fileNotes", baseFolderUUID],
		queryFn: async () => {
			const root = await ensureNotesRoot()
			const directories = (await worker.listDirectory({ uuid: root.uuid, onlyDirectories: true })) as DriveCloudItem[]

			return {
				root,
				notes: directories.filter(item => item.type === "directory")
			}
		}
	})

	const sortedNotes = useMemo(() => {
		const list = notesQuery.data?.notes ?? []

		return [...list].sort((a, b) => (b.lastModified ?? 0) - (a.lastModified ?? 0))
	}, [notesQuery.data?.notes])

	const loadNote = useCallback(
		async (note: DriveCloudItem, options?: { skipContent?: boolean }) => {
			loadingNoteRef.current = note.uuid

			try {
				const items = (await worker.listDirectory({ uuid: note.uuid })) as DriveCloudItem[]
				const currentNoteFile = items.find(
					item => item.type === "file" && item.name.toLowerCase() === NOTE_FILE_NAME
				)
				const otherFiles = items.filter(item => item.type === "file" && item.uuid !== currentNoteFile?.uuid)

				let text = ""

				if (currentNoteFile && !options?.skipContent) {
					const buffer = (await worker.readFile({ item: currentNoteFile, emitEvents: false })) as Uint8Array
					text = new TextDecoder().decode(buffer)
				} else if (!currentNoteFile && !options?.skipContent) {
					text = ""
				}

				if (loadingNoteRef.current !== note.uuid) {
					return
				}

				setNoteFile(currentNoteFile ?? null)
				if (!options?.skipContent) {
					setContent(text)
				}
				setAttachments(otherFiles)
			} catch (e) {
				console.error(e)

				if (loadingNoteRef.current === note.uuid) {
					if (!options?.skipContent) {
						setContent("")
					}
					setAttachments([])
					setNoteFile(null)
				}

				errorToast((e as Error).message ?? (e as Error).toString())
			} finally {
				if (loadingNoteRef.current === note.uuid) {
					loadingNoteRef.current = null
				}
			}
		},
		[errorToast]
	)

	const handleSelect = useCallback(
		(note: DriveCloudItem) => {
			if (selectedNote?.uuid === note.uuid) {
				return
			}

			if (saveTimer.current) {
				clearTimeout(saveTimer.current)
				saveTimer.current = null
			}

			setSelectedNote(note)
			setNoteFile(null)
			setAttachments([])
			setContent("")
			void loadNote(note)
		},
		[selectedNote, loadNote]
	)

	useEffect(() => {
		if (!selectedNote && sortedNotes.length > 0) {
			const first = sortedNotes[0]

			if (first) {
				handleSelect(first)
			}
		}
	}, [sortedNotes, selectedNote, handleSelect])

	useEffect(() => {
		return () => {
			if (saveTimer.current) {
				clearTimeout(saveTimer.current)
			}
		}
	}, [])

	const createNote = useCallback(async () => {
		const toast = loadingToast()

		try {
			const root = notesQuery.data?.root ?? (await ensureNotesRoot())
			const timestamp = new Date().toISOString().split("T")[0]
			const defaultName = `New Note ${timestamp}`
			const directory = await worker.createDirectory({ name: defaultName, parent: root.uuid })
			const initialContent = "# New Note\n\n"
			const file = new File([initialContent], NOTE_FILE_NAME, { type: "text/markdown" })

			await worker.uploadFile({ file, parent: directory.uuid, name: NOTE_FILE_NAME, emitEvents: false })

			const result = await notesQuery.refetch()
			const refreshed = result.data?.notes.find(item => item.uuid === directory.uuid) ?? directory

			handleSelect(refreshed)
			setContent(initialContent)
		} catch (e) {
			console.error(e)
			errorToast((e as Error).message ?? (e as Error).toString())
		} finally {
			toast.dismiss()
		}
	}, [ensureNotesRoot, handleSelect, loadingToast, notesQuery, errorToast])

	const renameNote = useCallback(async () => {
		if (!selectedNote) {
			return
		}

		const response = await showInputDialog({
			title: "Rename note",
			continueButtonText: "Save",
			value: selectedNote.name,
			autoFocusInput: true,
			placeholder: "Note title",
			continueButtonVariant: "default",
			minLength: 0,
			maxLength: 255
		})

		if (response.cancelled) {
			return
		}

		const name = response.value.trim()

		if (name.length === 0) {
			return
		}

		const toast = loadingToast()

		try {
			await worker.renameItem({ item: selectedNote, name })
			const result = await notesQuery.refetch()
			const refreshed = result.data?.notes.find(item => item.uuid === selectedNote.uuid)

			if (refreshed) {
				setSelectedNote(refreshed)
			} else {
				setSelectedNote(prev => (prev && prev.uuid === selectedNote.uuid ? { ...prev, name } : prev))
			}
		} catch (e) {
			console.error(e)
			errorToast((e as Error).message ?? (e as Error).toString())
		} finally {
			toast.dismiss()
		}
	}, [selectedNote, loadingToast, notesQuery, errorToast])

	const deleteNote = useCallback(async () => {
		if (!selectedNote) {
			return
		}

		const confirmed = await showConfirmDialog({
			title: "Delete note",
			description: "This will move the note and attachments to trash.",
			continueButtonText: "Delete",
			continueButtonVariant: "destructive"
		})

		if (!confirmed) {
			return
		}

		const toast = loadingToast()

		try {
			await worker.trashItems({ items: [selectedNote] })
			setSelectedNote(null)
			setContent("")
			setAttachments([])
			setNoteFile(null)

			const result = await notesQuery.refetch()
			const next = result.data?.notes[0]

			if (next) {
				handleSelect(next)
			}
		} catch (e) {
			console.error(e)
			errorToast((e as Error).message ?? (e as Error).toString())
		} finally {
			toast.dismiss()
		}
	}, [selectedNote, loadingToast, notesQuery, handleSelect, errorToast])

	const saveContent = useCallback(
		async (value: string) => {
			if (!selectedNote) {
				return
			}

			setSaving(true)

			try {
				if (noteFile) {
					await worker.deleteItemsPermanently({ items: [noteFile] })
				}

				const file = new File([value], NOTE_FILE_NAME, { type: "text/markdown" })
				const uploaded = await worker.uploadFile({ file, parent: selectedNote.uuid, name: NOTE_FILE_NAME, emitEvents: false })

				setNoteFile(uploaded)
				setSaving(false)
				await notesQuery.refetch()
			} catch (e) {
				console.error(e)
				setSaving(false)
				errorToast((e as Error).message ?? (e as Error).toString())
			}
		},
		[selectedNote, noteFile, notesQuery, errorToast]
	)

	const onValueChange = useCallback(
		(value: string) => {
			setContent(value)

			if (!selectedNote) {
				return
			}

			setSaving(true)

			if (saveTimer.current) {
				clearTimeout(saveTimer.current)
			}

			saveTimer.current = setTimeout(() => {
				void saveContent(value)
			}, 1000)
		},
		[selectedNote, saveContent]
	)

	const onAttachmentInput = useCallback(
		async (event: ChangeEvent<HTMLInputElement>) => {
			if (!selectedNote) {
				return
			}

			const files = event.target.files

			if (!files || files.length === 0) {
				return
			}

			const toast = loadingToast()

			try {
				for (const file of Array.from(files)) {
					await worker.uploadFile({ file, parent: selectedNote.uuid, emitEvents: false })
				}

				await loadNote(selectedNote, { skipContent: true })
			} catch (e) {
				console.error(e)
				errorToast((e as Error).message ?? (e as Error).toString())
			} finally {
				event.target.value = ""
				toast.dismiss()
			}
		},
		[selectedNote, loadNote, loadingToast, errorToast]
	)

	const onDeleteAttachment = useCallback(
		async (item: DriveCloudItem) => {
			const confirmed = await showConfirmDialog({
				title: "Remove attachment",
				description: "Remove this attachment from the note?",
				continueButtonText: "Delete",
				continueButtonVariant: "destructive"
			})

			if (!confirmed) {
				return
			}

			try {
				await worker.trashItems({ items: [item] })
				if (selectedNote) {
					await loadNote(selectedNote, { skipContent: true })
				}
			} catch (e) {
				console.error(e)
				errorToast((e as Error).message ?? (e as Error).toString())
			}
		},
		[selectedNote, loadNote, errorToast]
	)

	const noteContentHeight = windowSize.height - 48 - DESKTOP_TOPBAR_HEIGHT

	return (
		<div className="flex flex-row w-full" style={{ height: `calc(100dvh - ${DESKTOP_TOPBAR_HEIGHT + 48}px)` }}>
			<div className="w-[280px] border-r h-full flex flex-col">
				<div className="h-12 border-b flex items-center gap-2 px-3">
					<Button onClick={createNote} className="gap-2">
						<Plus size={16} /> New Note
					</Button>
				</div>
				<div className="flex-1 overflow-auto">
					{notesQuery.isLoading ? (
						<div className="flex h-full items-center justify-center">
							<Loader className="animate-spin-medium" />
						</div>
					) : sortedNotes.length === 0 ? (
						<div className="flex flex-col items-center justify-center h-full p-4 text-center">
							<Notebook width={64} height={64} className="text-muted-foreground" />
							<p className="mt-2 text-muted-foreground">Create your first note</p>
						</div>
					) : (
						<ul>
							{sortedNotes.map(note => (
								<li key={note.uuid}>
									<button
										className={`w-full text-left px-3 py-2 hover:bg-secondary ${selectedNote?.uuid === note.uuid ? "bg-secondary" : ""}`}
										onClick={() => handleSelect(note)}
									>
										<div className="font-medium line-clamp-1 break-all">{note.name || "Untitled"}</div>
									</button>
								</li>
							))}
						</ul>
					)}
				</div>
			</div>
			<div className="flex-1 h-full flex flex-col">
				<div className="h-12 border-b flex items-center justify-between px-3">
					<div className="flex items-center gap-3">
						{saving ? <Loader className="animate-spin-medium" size={18} /> : null}
						<div className="text-sm text-muted-foreground">
							{selectedNote ? selectedNote.name : "Select a note"}
						</div>
					</div>
					<div className="flex items-center gap-2">
						<Button variant="secondary" onClick={renameNote} disabled={!selectedNote}>
							Rename
						</Button>
						<Button variant="destructive" onClick={deleteNote} disabled={!selectedNote} className="gap-2">
							<Trash2 size={16} /> Delete
						</Button>
					</div>
				</div>
				<div className="flex-1 grid grid-cols-3 h-[calc(100%-48px)]">
					<div className="col-span-2 border-r">
						{selectedNote ? (
							<TextEditor
								value={content}
								setValue={setContent}
								fileName={NOTE_FILE_NAME}
								height={noteContentHeight}
								onValueChange={onValueChange}
								type="code"
								readOnly={false}
								placeholder="Write your note..."
								showMarkdownPreview={true}
							/>
						) : (
							<div className="w-full h-full flex items-center justify-center text-muted-foreground">
								Select a note
							</div>
						)}
					</div>
					<div className="col-span-1 flex flex-col">
						<div className="h-12 border-b flex items-center justify-between px-3">
							<div className="flex items-center gap-2">
								<Paperclip size={16} />
								<span className="text-sm">Attachments</span>
							</div>
							<div>
								<input
									id="mdnote-attachments-input"
									type="file"
									multiple={true}
									className="hidden"
									onChange={onAttachmentInput}
								/>
								<Button
									variant="secondary"
									size="sm"
									onClick={() => document.getElementById("mdnote-attachments-input")?.click()}
									disabled={!selectedNote}
								>
									Add
								</Button>
							</div>
						</div>
						<div className="flex-1 overflow-auto">
							{selectedNote ? (
								attachments.length === 0 ? (
									<div className="p-3 text-muted-foreground text-sm">No attachments yet.</div>
								) : (
									<ul className="p-1">
										{attachments.map(item => (
											<li key={item.uuid} className="flex items-center justify-between px-2 py-1 hover:bg-secondary rounded">
												<span className="text-sm truncate" title={item.name}>
													{item.name}
												</span>
												<Button variant="ghost" size="sm" onClick={() => onDeleteAttachment(item)}>
													<Trash2 size={14} />
												</Button>
											</li>
										))}
									</ul>
								)
							) : (
								<div className="p-3 text-muted-foreground text-sm">Select a note to manage attachments.</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
})

export default NotesSimple
