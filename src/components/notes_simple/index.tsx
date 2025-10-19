import { memo, useCallback, useEffect, useMemo, useRef, useState, type ChangeEvent } from "react"
import { Button } from "@/components/ui/button"
import { TextEditor } from "@/components/textEditor"
import worker from "@/lib/worker"
import useSDKConfig from "@/hooks/useSDKConfig"
import { useQuery } from "@tanstack/react-query"
import { Loader, Notebook, Paperclip, Plus, Trash2, Link2, Image as ImageIcon, FileText } from "lucide-react"
import { showInputDialog } from "@/components/dialogs/input"
import useErrorToast from "@/hooks/useErrorToast"
import useLoadingToast from "@/hooks/useLoadingToast"
import { showConfirmDialog } from "@/components/dialogs/confirm"
import useWindowSize from "@/hooks/useWindowSize"
import { DESKTOP_TOPBAR_HEIGHT } from "@/constants"
import type { DriveCloudItem } from "@/components/drive"
import { cn } from "@/lib/utils"
import { useTheme } from "@/providers/themeProvider"

const NOTE_FILE_NAME = "note.md"
const NOTES_ROOT_NAME = "Notes"
const ATTACHMENT_REGEX = /attachment:([a-f0-9-]+)\/([^\s)]+)/gi

type NotesQueryData = {
	root: DriveCloudItem
	notes: DriveCloudItem[]
}

type NoteAttachment = DriveCloudItem & { type: "file"; mime?: string }

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

function getAttachmentKey(item: NoteAttachment): string {
	return `${item.uuid}/${encodeURIComponent(item.name)}`
}

function parseAttachmentHref(href?: string | null): { key: string; name: string } | null {
	if (!href || !href.startsWith("attachment:")) {
		return null
	}

	const rest = href.slice("attachment:".length)
	const [uuid, ...nameParts] = rest.split("/")

	if (!uuid || nameParts.length === 0) {
		return null
	}

	const encodedName = nameParts.join("/")
	try {
		const decodedName = decodeURIComponent(encodedName)
		return {
			key: `${uuid}/${encodedName}`,
			name: decodedName
		}
	} catch {
		return {
			key: `${uuid}/${encodedName}`,
			name: encodedName
		}
	}
}

function formatBytes(bytes?: number | null): string {
	if (bytes === undefined || bytes === null) {
		return ""
	}

	if (bytes === 0) {
		return "0 B"
	}

	const units = ["B", "KB", "MB", "GB", "TB"]
	const exponent = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1)
	const value = bytes / Math.pow(1024, exponent)

	return `${value.toFixed(value >= 10 || exponent === 0 ? 0 : 1)} ${units[exponent]}`
}

function isNoteAttachment(item: DriveCloudItem): item is NoteAttachment {
	return item.type === "file"
}

export const NotesSimple = memo(() => {
	const { baseFolderUUID } = useSDKConfig()
	const errorToast = useErrorToast()
	const loadingToast = useLoadingToast()
	const windowSize = useWindowSize()
	const { dark } = useTheme()
	const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
	const loadingNoteRef = useRef<string | null>(null)
	const attachmentUrlsRef = useRef<Record<string, { url: string; mime: string }>>({})
	const fetchingAttachmentsRef = useRef<Set<string>>(new Set())

	const [selectedNote, setSelectedNote] = useState<DriveCloudItem | null>(null)
	const [noteFile, setNoteFile] = useState<NoteAttachment | null>(null)
	const [content, setContent] = useState<string>("")
	const [attachments, setAttachments] = useState<NoteAttachment[]>([])
	const [saving, setSaving] = useState<boolean>(false)
	const [attachmentUrls, setAttachmentUrls] = useState<Record<string, { url: string; mime: string }>>({})

	const ensureNotesRoot = useCallback(async () => {
		return await findOrCreateChildDirectory(baseFolderUUID, NOTES_ROOT_NAME)
	}, [baseFolderUUID])

	const resetAttachmentUrls = useCallback(() => {
		for (const key of Object.keys(attachmentUrlsRef.current)) {
			const current = attachmentUrlsRef.current[key]
			if (current) {
				URL.revokeObjectURL(current.url)
			}
		}

		attachmentUrlsRef.current = {}
		setAttachmentUrls({})
	}, [])

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
				const fileItems = items.filter(isNoteAttachment)
				const currentNoteFile = fileItems.find(item => item.name.toLowerCase() === NOTE_FILE_NAME)
				const otherFiles = fileItems.filter(item => item.uuid !== currentNoteFile?.uuid)

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

			resetAttachmentUrls()

			setSelectedNote(note)
			setNoteFile(null)
			setAttachments([])
			setContent("")
			void loadNote(note)
		},
		[selectedNote, loadNote, resetAttachmentUrls]
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

	useEffect(() => {
		return () => {
			resetAttachmentUrls()
		}
	}, [resetAttachmentUrls])

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
			resetAttachmentUrls()

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
				const uploaded = (await worker.uploadFile({
					file,
					parent: selectedNote.uuid,
					name: NOTE_FILE_NAME,
					emitEvents: false
				})) as NoteAttachment

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

	const fetchAttachmentPreview = useCallback(
		async (item: NoteAttachment, key: string) => {
			try {
				const buffer = (await worker.readFile({ item, emitEvents: false })) as Uint8Array
				const blob = new Blob([buffer], { type: item.mime ?? "application/octet-stream" })
				const url = URL.createObjectURL(blob)

				attachmentUrlsRef.current[key] = {
					url,
					mime: item.mime ?? "application/octet-stream"
				}
				setAttachmentUrls({ ...attachmentUrlsRef.current })
			} catch (e) {
				console.error(e)
			} finally {
				fetchingAttachmentsRef.current.delete(key)
			}
		},
		[]
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
		async (item: NoteAttachment) => {
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

	useEffect(() => {
		const neededKeys = new Set<string>()
		let match: RegExpExecArray | null
		ATTACHMENT_REGEX.lastIndex = 0
		while ((match = ATTACHMENT_REGEX.exec(content)) !== null) {
			const key = `${match[1]}/${match[2]}`
			neededKeys.add(key)
		}
		ATTACHMENT_REGEX.lastIndex = 0

		attachments.forEach(item => {
			const key = getAttachmentKey(item)

			if (neededKeys.has(key) && !attachmentUrlsRef.current[key] && !fetchingAttachmentsRef.current.has(key)) {
				fetchingAttachmentsRef.current.add(key)
				void fetchAttachmentPreview(item, key)
			}
		})

		for (const key of Object.keys(attachmentUrlsRef.current)) {
			if (!neededKeys.has(key)) {
				const current = attachmentUrlsRef.current[key]
				if (current) {
					URL.revokeObjectURL(current.url)
				}
				delete attachmentUrlsRef.current[key]
			}
		}


		setAttachmentUrls({ ...attachmentUrlsRef.current })
	}, [attachments, content, fetchAttachmentPreview])

	const attachmentMarkdownComponents = useMemo(() => {
		return {
			img(props: any) {
				const { src, alt, className, ...rest } = props ?? {}
				const parsed = parseAttachmentHref(typeof src === "string" ? src : undefined)

				if (parsed) {
					const data = attachmentUrls[parsed.key]

					if (data) {
						return (
							<img
								{...rest}
								src={data.url}
								alt={typeof alt === "string" ? alt : parsed.name}
								className={cn(
									"my-4 rounded-2xl border border-black/10 dark:border-white/10 shadow-sm",
									typeof className === "string" ? className : undefined
								)}
							/>
						)
					}

					return (
						<div className="my-4 text-xs text-muted-foreground italic">
							{parsed.name} attachment unavailable
						</div>
					)
				}

				return (
					<img
						{...rest}
						src={typeof src === "string" ? src : ""}
						alt={typeof alt === "string" ? alt : ""}
						className={typeof className === "string" ? className : undefined}
					/>
				)
			},
			a(props: any) {
				const { href, children, className, ...rest } = props ?? {}
				const parsed = parseAttachmentHref(typeof href === "string" ? href : undefined)

				if (parsed) {
					const data = attachmentUrls[parsed.key]

					if (data) {
						return (
							<a
								{...rest}
								href={data.url}
								download={parsed.name}
								target="_blank"
								rel="noreferrer"
								className={cn(
									"inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm text-primary transition hover:bg-primary/20 dark:bg-primary/15 dark:hover:bg-primary/25",
									typeof className === "string" ? className : undefined
								)}
							>
								<Link2 size={14} />
								<span>{children ?? parsed.name}</span>
							</a>
						)
					}

					return <span className="text-muted-foreground text-sm">{parsed.name}</span>
				}

				return (
					<a {...rest} href={typeof href === "string" ? href : undefined} className={className}>
						{children}
					</a>
				)
			}
		}
	}, [attachmentUrls]) as Record<string, unknown>

	const insertAttachment = useCallback(
		(item: NoteAttachment) => {
			const encodedName = encodeURIComponent(item.name)
			const snippet = item.mime?.startsWith("image/")
				? `![${item.name}](attachment:${item.uuid}/${encodedName})`
				: `[${item.name}](attachment:${item.uuid}/${encodedName})`
			const base = content.trimEnd()
			const separator = base.length === 0 ? "" : "\n\n"
			const nextValue = `${base}${separator}${snippet}\n`

			onValueChange(nextValue)
		},
		[content, onValueChange]
	)

	const noteContentHeight = windowSize.height - 48 - DESKTOP_TOPBAR_HEIGHT

	return (
		<div
			className={cn(
				"flex w-full gap-6 px-6 py-6 transition-colors",
				dark ? "bg-[#111315]" : "bg-[#f5f3ef]"
			)}
			style={{ height: `calc(100dvh - ${DESKTOP_TOPBAR_HEIGHT + 48}px)` }}
		>
			<div
				className={cn(
					"flex h-full w-[320px] flex-col rounded-3xl border backdrop-blur-xl",
					dark
						? "border-white/5 bg-[#18181b]/80 shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
						: "border-white/60 bg-[#fbf9f4]/90 shadow-[0_20px_45px_rgba(0,0,0,0.08)]"
				)}
			>
				<div className="flex items-center justify-between px-6 py-5">
					<div>
						<p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Notes</p>
						<h2 className="mt-1 text-lg font-semibold">All Notes</h2>
					</div>
					<Button
						variant="ghost"
						className="gap-2 rounded-full bg-primary/10 px-4 text-primary hover:bg-primary/20"
						onClick={createNote}
					>
						<Plus size={16} />
						New
					</Button>
				</div>
				<div className="flex-1 overflow-auto px-2 pb-4">
					{notesQuery.isLoading ? (
						<div className="flex h-full items-center justify-center">
							<Loader className="animate-spin-medium" />
						</div>
					) : sortedNotes.length === 0 ? (
						<div className="flex h-full flex-col items-center justify-center gap-3 text-center text-muted-foreground">
							<Notebook width={64} height={64} />
							<p className="text-sm">Create your first note to get started.</p>
						</div>
					) : (
						<ul className="flex flex-col gap-2">
							{sortedNotes.map(note => (
								<li key={note.uuid}>
									<button
										className={cn(
											"w-full rounded-2xl px-5 py-4 text-left transition",
											selectedNote?.uuid === note.uuid
												? dark
													? "bg-gradient-to-r from-primary/20 to-primary/10 text-white shadow-inner"
													: "bg-gradient-to-r from-primary/10 to-primary/5 text-primary"
												: dark
													? "hover:bg-white/5"
													: "hover:bg-white"
										)}
										onClick={() => handleSelect(note)}
									>
										<p className="font-semibold leading-snug line-clamp-2 break-all">{note.name || "Untitled"}</p>
										<p className="mt-1 text-xs text-muted-foreground">
											Last edited {note.lastModified ? new Date(note.lastModified).toLocaleString() : "just now"}
										</p>
									</button>
								</li>
							))}
						</ul>
					)}
				</div>
			</div>
			<div className="flex flex-1 gap-6">
				<div
					className={cn(
						"flex flex-1 flex-col rounded-3xl border overflow-hidden",
						dark ? "border-white/5 bg-[#1c1c1e]/90 shadow-[0_30px_60px_rgba(0,0,0,0.4)]" : "border-white/70 bg-white shadow-[0_30px_70px_rgba(15,23,42,0.15)]"
					)}
				>
					<div className="flex items-center justify-between border-b border-white/10 px-8 py-6">
						<div className="flex items-center gap-3">
							{saving ? <Loader className="animate-spin-medium" size={18} /> : null}
							<div>
								<p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Title</p>
								<h1 className="text-2xl font-semibold leading-tight">
									{selectedNote ? selectedNote.name : "Select a note"}
								</h1>
							</div>
						</div>
						<div className="flex items-center gap-3">
							<Button
								variant="ghost"
								className="rounded-full border border-white/20 px-4 text-sm"
								onClick={renameNote}
								disabled={!selectedNote}
							>
								Rename
							</Button>
							<Button
								variant="ghost"
								className="rounded-full border border-destructive/30 px-4 text-sm text-destructive hover:bg-destructive/10"
								onClick={deleteNote}
								disabled={!selectedNote}
							>
								<Trash2 size={16} className="mr-2" />
								Delete
							</Button>
						</div>
					</div>
					<div className="flex-1 overflow-hidden">
						{selectedNote ? (
							<div className="h-full">
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
								customMarkdownComponents={attachmentMarkdownComponents as any}
								/>
							</div>
						) : (
							<div className="flex h-full items-center justify-center text-muted-foreground">
								Select a note from the list to begin.
							</div>
						)}
					</div>
				</div>
				<div
					className={cn(
						"flex w-[300px] flex-col rounded-3xl border",
						dark ? "border-white/5 bg-[#151517]/90 shadow-[0_25px_60px_rgba(0,0,0,0.45)]" : "border-white/70 bg-[#fffdf8] shadow-[0_25px_70px_rgba(15,23,42,0.12)]"
					)}
				>
					<div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
						<div className="flex items-center gap-3">
							<Paperclip size={16} />
							<div>
								<p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Attachments</p>
								<h3 className="text-lg font-semibold">Resources</h3>
							</div>
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
								variant="ghost"
								className="rounded-full border border-white/20 px-4 text-sm"
								onClick={() => document.getElementById("mdnote-attachments-input")?.click()}
								disabled={!selectedNote}
							>
								Add
							</Button>
						</div>
					</div>
					<div className="flex-1 overflow-auto px-4 pb-6">
						{selectedNote ? (
							attachments.length === 0 ? (
								<div className="mt-6 rounded-2xl bg-muted/30 px-4 py-6 text-center text-sm text-muted-foreground">
									Drop files here or use the Add button to attach documents.
								</div>
							) : (
								<ul className="flex flex-col gap-4">
									{attachments.map((item: NoteAttachment) => {
										const key = getAttachmentKey(item)
										const preview = attachmentUrls[key]
										const isImage = item.mime?.startsWith("image/")

										return (
											<li
												key={item.uuid}
												className={cn(
													"rounded-2xl border px-4 py-4 transition",
													dark ? "border-white/10 bg-white/5" : "border-black/10 bg-white"
												)}
											>
												<div className="overflow-hidden rounded-xl">
													{isImage && preview ? (
														<img
															src={preview.url}
															alt={item.name}
															className="h-32 w-full rounded-xl object-cover"
														/>
													) : (
														<div className="flex h-32 flex-col items-center justify-center gap-2 rounded-xl bg-muted/40 text-muted-foreground">
															{isImage ? <ImageIcon size={24} /> : <FileText size={24} />}
															<span className="text-xs uppercase tracking-[0.2em]">{item.mime ?? "File"}</span>
														</div>
													)}
												</div>
												<div className="mt-4 flex items-start justify-between gap-3">
													<div>
														<p className="font-medium leading-tight">{item.name}</p>
														<p className="text-xs text-muted-foreground">
															{formatBytes(item.size)} • {item.lastModified ? new Date(item.lastModified).toLocaleDateString() : ""}
														</p>
													</div>
													<div className="flex items-center gap-2">
														<Button
															variant="ghost"
															size="sm"
															className="gap-2 rounded-full border border-primary/30 px-3 text-primary"
															onClick={() => insertAttachment(item)}
														>
															<Link2 size={14} />
															Embed
														</Button>
														<Button
															variant="ghost"
															size="sm"
															className="rounded-full border border-destructive/30 text-destructive"
															onClick={() => onDeleteAttachment(item)}
														>
															<Trash2 size={14} />
														</Button>
													</div>
												</div>
											</li>
										)
									})}
								</ul>
							)
						) : (
							<div className="mt-6 rounded-2xl bg-muted/30 px-4 py-6 text-center text-sm text-muted-foreground">
								Select a note to manage attachments.
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	)
})

export default NotesSimple
