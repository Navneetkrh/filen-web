import { memo, useCallback, useEffect, useMemo, useRef, useState, type ChangeEvent } from "react"
import type { Editor } from "@tiptap/react"
import { Button } from "@/components/ui/button"
import { TiptapEditor } from "@/components/tiptapEditor"
import worker from "@/lib/worker"
import useSDKConfig from "@/hooks/useSDKConfig"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { Loader, Loader2, Notebook, Paperclip, Plus, Trash2, Link2, Download, Check } from "lucide-react"
import { showInputDialog } from "@/components/dialogs/input"
import useErrorToast from "@/hooks/useErrorToast"
import useLoadingToast from "@/hooks/useLoadingToast"
import { showConfirmDialog } from "@/components/dialogs/confirm"
import useWindowSize from "@/hooks/useWindowSize"
import { DESKTOP_TOPBAR_HEIGHT, THUMBNAIL_MAX_FETCH_SIZE } from "@/constants"
import type { DriveCloudItem } from "@/components/drive"
import { cn } from "@/lib/utils"
import { useTheme } from "@/providers/themeProvider"
import { fileNameToSVGIcon } from "@/assets/fileExtensionIcons"
import { fileNameToThumbnailType } from "@/components/dialogs/previewDialog/utils"
import { generateThumbnail } from "@/lib/worker/proxy"
import eventEmitter from "@/lib/eventEmitter"

const NOTE_FILE_NAME = "note.md"
const NOTES_ROOT_NAME = "Notes"
const ATTACHMENT_KEY_REGEX = /data-attachment-key="([^"]+)"/g
const ATTACHMENT_SRC_REGEX = /attachment:([A-Za-z0-9%-]+\/[A-Za-z0-9%-]+)/g
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

function getAttachmentKey(item: NoteAttachment): string {
	return `${item.uuid}/${encodeURIComponent(item.name)}`
}

function generateNoteName(): string {
	const now = new Date()
	const datePart = now.toISOString().slice(0, 10)
	const randomPart = Math.random().toString(36).slice(2, 6).toUpperCase()

	return `Note ${datePart}-${randomPart}`
}

function escapeHtml(value: string): string {
	return value
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#039;")
}

function buildAttachmentSnippet(item: NoteAttachment): string {
	const attachmentKey = getAttachmentKey(item)
	const size = formatBytes(item.size)
	const rawLabel = size ? `${item.name} (${size})` : item.name
	const sanitizedLabel = escapeHtml(rawLabel)
	const sanitizedName = escapeHtml(item.name)
	const sanitizedMime = escapeHtml(item.mime ?? "")

	return `<span data-attachment-key="${attachmentKey}" data-attachment-src="attachment:${attachmentKey}" data-attachment-name="${sanitizedName}" data-attachment-size="${item.size ?? ""
		}" data-attachment-mime="${sanitizedMime}" data-attachment-label="${sanitizedLabel}">&#128206; ${sanitizedLabel}</span>`
}

export const NotesSimple = memo(() => {
	const { baseFolderUUID } = useSDKConfig()
	const errorToast = useErrorToast()
	const loadingToast = useLoadingToast()
	const windowSize = useWindowSize()
	const { dark } = useTheme()
	const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
	const loadingNoteRef = useRef<string | null>(null)
	const selectedNoteRef = useRef<DriveCloudItem | null>(null)
	const previewFetchInFlightRef = useRef<Set<string>>(new Set())

	const [selectedNote, setSelectedNote] = useState<DriveCloudItem | null>(null)
	const [noteFile, setNoteFile] = useState<NoteAttachment | null>(null)
	const [content, setContent] = useState<string>("")
	const [attachments, setAttachments] = useState<NoteAttachment[]>([])
	const [saving, setSaving] = useState<boolean>(false)
	const [saved, setSaved] = useState<boolean>(false)
	const [loadingNoteId, setLoadingNoteId] = useState<string | null>(null)
	const [attachmentPreviews, setAttachmentPreviews] = useState<Record<string, string | null>>({})
	const [downloadingAttachments, setDownloadingAttachments] = useState<Record<string, boolean>>({})

	const queryClient = useQueryClient()

	const attachmentMetadata = useMemo(() => {
		const map: Record<
			string,
			{
				name: string
				size?: number | null
				mime?: string | null
				isImage: boolean
				url?: string | null
			}
		> = {}

		attachments.forEach(item => {
			const key = getAttachmentKey(item)
			const thumbnailType = fileNameToThumbnailType(item.name)
			const isImage = thumbnailType === "image"

			map[key] = {
				name: item.name,
				size: item.size ?? null,
				mime: item.mime ?? null,
				isImage,
				url: isImage ? attachmentPreviews[key] ?? null : null
			}
		})

		return map
	}, [attachments, attachmentPreviews])

	const extractContentAttachmentKeys = useCallback(
		(value: string): Set<string> => {
			const keys = new Set<string>()
			let match: RegExpExecArray | null

			ATTACHMENT_KEY_REGEX.lastIndex = 0
			while ((match = ATTACHMENT_KEY_REGEX.exec(value)) !== null) {
				const keyMatch = match[1]
				if (keyMatch) {
					keys.add(keyMatch)
				}
			}

			ATTACHMENT_SRC_REGEX.lastIndex = 0
			while ((match = ATTACHMENT_SRC_REGEX.exec(value)) !== null) {
				const keyMatch = match[1]
				if (keyMatch) {
					keys.add(keyMatch)
				}
			}

			return keys
		},
		[]
	)

	const ensureNotesRoot = useCallback(async () => {
		return await findOrCreateChildDirectory(baseFolderUUID, NOTES_ROOT_NAME)
	}, [baseFolderUUID])

	const resetAttachmentPreviews = useCallback(() => {
		previewFetchInFlightRef.current.clear()
		setAttachmentPreviews({})
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

	useEffect(() => {
		selectedNoteRef.current = selectedNote
	}, [selectedNote])

	const loadNote = useCallback(
		async (note: DriveCloudItem, options?: { skipContent?: boolean }) => {
			loadingNoteRef.current = note.uuid
			setLoadingNoteId(note.uuid)

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
					setLoadingNoteId(null)
				}
			}
		},
		[errorToast]
	)

	useEffect(() => {
		const neededKeys = extractContentAttachmentKeys(content)
		const activeKeys = new Set(attachments.map(item => getAttachmentKey(item)))

		setAttachmentPreviews(prev => {
			let changed = false
			const next = { ...prev }

			for (const key of Object.keys(next)) {
				if (!activeKeys.has(key)) {
					delete next[key]
					changed = true
				}
			}

			return changed ? next : prev
		})

		attachments.forEach(item => {
			const key = getAttachmentKey(item)
			const thumbnailType = fileNameToThumbnailType(item.name)
			const isImage = thumbnailType === "image"
			const shouldSkipThumbnail = !isImage || item.size > THUMBNAIL_MAX_FETCH_SIZE
			const shouldLoadPreviewForContent = neededKeys.has(key)
			const shouldLoadPreviewForSidebar = true
			const shouldLoadPreview = !shouldSkipThumbnail && (shouldLoadPreviewForContent || shouldLoadPreviewForSidebar)

			if (!shouldLoadPreview) {
				if (attachmentPreviews[key] !== undefined) {
					setAttachmentPreviews(prev => {
						if (prev[key] === undefined) {
							return prev
						}

						const next = { ...prev }
						delete next[key]
						return next
					})
				}
				return
			}

			if (previewFetchInFlightRef.current.has(key) || attachmentPreviews[key]) {
				return
			}

			previewFetchInFlightRef.current.add(key)
			setAttachmentPreviews(prev => ({ ...prev, [key]: null }))

			void generateThumbnail({ item })
				.then(url => {
					setAttachmentPreviews(prev => ({ ...prev, [key]: url }))
				})
				.catch(e => {
					console.error(e)
					setAttachmentPreviews(prev => {
						const next = { ...prev }
						next[key] = null
						return next
					})
				})
				.finally(() => {
					previewFetchInFlightRef.current.delete(key)
				})
		})
	}, [attachments, attachmentPreviews, content, extractContentAttachmentKeys])

	const handleSelect = useCallback(
		(note: DriveCloudItem) => {
			if (selectedNote?.uuid === note.uuid) {
				return
			}

			if (saveTimer.current) {
				clearTimeout(saveTimer.current)
				saveTimer.current = null
			}

			resetAttachmentPreviews()

			setSelectedNote(note)
			setNoteFile(null)
			setAttachments([])
			setContent("")
			setSaving(false)
			setSaved(false)
			void loadNote(note)
		},
		[selectedNote, loadNote, resetAttachmentPreviews]
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
			resetAttachmentPreviews()
		}
	}, [resetAttachmentPreviews])

	const createNote = useCallback(async () => {
		if (saveTimer.current) {
			clearTimeout(saveTimer.current)
			saveTimer.current = null
		}

		resetAttachmentPreviews()

		try {
			const root = notesQuery.data?.root ?? (await ensureNotesRoot())
			const name = generateNoteName()
			const initialContent = "# New Note\n\n"

			const directory = (await worker.createDirectory({
				name,
				parent: root.uuid
			})) as DriveCloudItem

			queryClient.setQueryData<NotesQueryData>(["fileNotes", baseFolderUUID], prev => {
				if (!prev) {
					return {
						root,
						notes: [directory]
					}
				}

				const existing = prev.notes.filter(note => note.uuid !== directory.uuid)

				return {
					root: prev.root ?? root,
					notes: [directory, ...existing]
				}
			})

			selectedNoteRef.current = directory
			setSelectedNote(directory)
			setNoteFile(null)
			setAttachments([])
			setContent(initialContent)
			setSaving(true)
			setSaved(false)
			setLoadingNoteId(null)

			const noteUUID = directory.uuid

			void (async () => {
				try {
					const file = new File([initialContent], NOTE_FILE_NAME, { type: "text/markdown" })
					const uploaded = (await worker.uploadFile({
						file,
						parent: noteUUID,
						name: NOTE_FILE_NAME,
						emitEvents: false
					})) as NoteAttachment

					if (selectedNoteRef.current?.uuid === noteUUID) {
						setNoteFile(uploaded)
						setSaving(false)
						setSaved(true)
						setTimeout(() => {
							if (selectedNoteRef.current?.uuid === noteUUID) {
								setSaved(false)
							}
						}, 2000)
					}

					await notesQuery.refetch()
				} catch (error) {
					console.error(error)

					if (selectedNoteRef.current?.uuid === noteUUID) {
						setSaving(false)
						setSaved(false)
					}

					errorToast((error as Error).message ?? (error as Error).toString())
				}
			})()
		} catch (e) {
			console.error(e)
			errorToast((e as Error).message ?? (e as Error).toString())
		}
	}, [baseFolderUUID, ensureNotesRoot, errorToast, notesQuery, queryClient, resetAttachmentPreviews])

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
			resetAttachmentPreviews()

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
			setSaved(false)

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
				setSaved(true)

				// Hide the checkmark after 2 seconds
				setTimeout(() => {
					setSaved(false)
				}, 2000)

				await notesQuery.refetch()
			} catch (e) {
				console.error(e)
				setSaving(false)
				setSaved(false)
				errorToast((e as Error).message ?? (e as Error).toString())
			}
		},
		[selectedNote, noteFile, notesQuery, errorToast]
	)

	const uploadAttachments = useCallback(
		async (files: File[], options?: { showToast?: boolean }) => {
			if (!selectedNote || files.length === 0) {
				return [] as NoteAttachment[]
			}

			const shouldShowToast = options?.showToast ?? true
			const toast = shouldShowToast ? loadingToast() : null
			const uploaded: NoteAttachment[] = []

			try {
				for (const file of files) {
					const uploadedItem = (await worker.uploadFile({
						file,
						parent: selectedNote.uuid,
						emitEvents: false
					})) as NoteAttachment

					uploaded.push(uploadedItem)
				}

				await loadNote(selectedNote, { skipContent: true })
			} catch (e) {
				console.error(e)
				errorToast((e as Error).message ?? (e as Error).toString())
			} finally {
				toast?.dismiss()
			}

			return uploaded
		},
		[selectedNote, loadNote, loadingToast, errorToast]
	)

	const handleEditorFiles = useCallback(
		async (files: File[], editorInstance: Editor, dropPosition: number | null = null) => {
			if (!selectedNote || files.length === 0) {
				return
			}

			const uploaded = await uploadAttachments(files, { showToast: true })

			if (uploaded.length === 0) {
				return
			}

			const positioningChain = editorInstance.chain().focus()

			if (dropPosition !== null) {
				positioningChain.setTextSelection(dropPosition)
			}

			positioningChain.run()

			uploaded.forEach(item => {
				const snippet = buildAttachmentSnippet(item)
				editorInstance.chain().focus().insertContent(`${snippet}<p></p>`).run()
			})
		},
		[selectedNote, uploadAttachments]
	)

	const handleAttachmentChipClick = useCallback(
		(key: string) => {
			const [uuid, ...rest] = key.split("/")

			if (!uuid) {
				return
			}

			const encodedName = rest.join("/")
			const attachment =
				attachments.find(item => item.uuid === uuid && encodeURIComponent(item.name) === encodedName) ??
				attachments.find(item => item.uuid === uuid)

			if (!attachment) {
				return
			}

			eventEmitter.emit("openPreviewModal", { item: attachment })
		},
		[attachments]
	)

	const onValueChange = useCallback(
		(value: string) => {
			setContent(value)

			if (!selectedNote) {
				return
			}

			// Clear the saved checkmark when user starts typing
			setSaved(false)

			if (saveTimer.current) {
				clearTimeout(saveTimer.current)
			}

			// Wait 5 seconds after user stops typing before saving
			saveTimer.current = setTimeout(() => {
				void saveContent(value)
			}, 5000)
		},
		[selectedNote, saveContent]
	)

	const onManualSave = useCallback(() => {
		if (!selectedNote) {
			return
		}

		// Clear any pending auto-save
		if (saveTimer.current) {
			clearTimeout(saveTimer.current)
		}

		// Save immediately
		void saveContent(content)
	}, [selectedNote, saveContent, content])

	const onAttachmentInput = useCallback(
		async (event: ChangeEvent<HTMLInputElement>) => {
			if (!selectedNote) {
				return
			}

			const files = event.target.files

			if (!files || files.length === 0) {
				return
			}

			await uploadAttachments(Array.from(files), { showToast: true })
			event.target.value = ""
		},
		[selectedNote, uploadAttachments]
	)

	const downloadAttachment = useCallback(
		async (item: NoteAttachment) => {
			setDownloadingAttachments(prev => ({ ...prev, [item.uuid]: true }))

			try {
				const buffer = (await worker.readFile({ item, emitEvents: false })) as Uint8Array
				const blob = new Blob([buffer], { type: item.mime ?? "application/octet-stream" })
				const url = URL.createObjectURL(blob)
				const anchor = document.createElement("a")

				anchor.href = url
				anchor.download = item.name
				document.body.appendChild(anchor)
				anchor.click()
				document.body.removeChild(anchor)

				setTimeout(() => {
					URL.revokeObjectURL(url)
				}, 10_000)
			} catch (e) {
				console.error(e)
				errorToast((e as Error).message ?? (e as Error).toString())
			} finally {
				setDownloadingAttachments(prev => {
					const next = { ...prev }
					delete next[item.uuid]
					return next
				})
			}
		},
		[errorToast]
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

	// Note: Attachment rendering will be handled by Novel editor's built-in image support

	const insertAttachment = useCallback(
		(item: NoteAttachment) => {
			const snippet = buildAttachmentSnippet(item)
			const currentContent = content || ""
			const nextValue = currentContent + (currentContent ? "<br><br>" : "") + snippet

			onValueChange(nextValue)
		},
		[content, onValueChange]
	)

	const noteContentHeight = windowSize.height - DESKTOP_TOPBAR_HEIGHT - 80



	return (
		<div
			className={cn(
				"flex w-full gap-3 p-3 transition-colors",
				dark ? "bg-[#111315]" : "bg-[#f5f3ef]"
			)}
			style={{ height: `calc(100dvh - ${DESKTOP_TOPBAR_HEIGHT}px)` }}
		>
			<div
				className={cn(
					"flex h-full w-[280px] flex-col rounded-2xl border backdrop-blur-xl",
					dark
						? "border-white/5 bg-[#18181b]/80 shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
						: "border-white/60 bg-[#fbf9f4]/90 shadow-[0_20px_45px_rgba(0,0,0,0.08)]"
				)}
			>
				<div className="flex items-center justify-between px-4 py-3">
					<div>
						<h2 className="text-base font-semibold">All Notes</h2>
					</div>
					<Button
						variant="ghost"
						size="sm"
						className="h-8 w-8 rounded-full bg-primary/10 p-0 text-primary hover:bg-primary/20 transition-all duration-200 hover:scale-105 active:scale-95"
						onClick={createNote}
					>
						<Plus size={16} />
					</Button>
				</div>
				<div className="flex-1 overflow-auto px-2 pb-2">
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
						<ul className="flex flex-col gap-1">
							{sortedNotes.map(note => (
								<li key={note.uuid}>
									<button
										className={cn(
											"w-full rounded-xl px-3 py-2.5 text-left transition-all duration-200",
											selectedNote?.uuid === note.uuid
												? dark
													? "bg-gradient-to-r from-primary/20 to-primary/10 text-white shadow-lg"
													: "bg-gradient-to-r from-primary/10 to-primary/5 text-primary shadow-lg"
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
			<div className="flex flex-1 gap-3">
				<div
					className={cn(
						"flex flex-1 flex-col rounded-2xl border overflow-hidden",
						dark ? "border-white/5 bg-[#1c1c1e]/90 shadow-[0_30px_60px_rgba(0,0,0,0.4)]" : "border-white/70 bg-white shadow-[0_30px_70px_rgba(15,23,42,0.15)]"
					)}
				>
					<div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
						<div className="flex items-center gap-3">
							<div className="flex items-center gap-2">
								{saving && (
									<div className="flex items-center gap-2 text-blue-500">
										<Loader className="animate-spin" size={16} />
										<span className="text-xs font-medium">Saving...</span>
									</div>
								)}
								{!saving && saved && (
									<div className="flex items-center gap-2 text-green-500 animate-in fade-in duration-300">
										<div className="rounded-full bg-green-500/10 p-1">
											<Check size={14} className="stroke-[3]" />
										</div>
										<span className="text-xs font-medium">Saved</span>
									</div>
								)}
							</div>
							<div>
								<h1 className="text-lg font-semibold leading-tight">
									{selectedNote ? selectedNote.name : "Select a note"}
								</h1>
							</div>
						</div>
						<div className="flex items-center gap-2">
							<Button
								variant="ghost"
								size="sm"
								className="h-8 rounded-lg border border-white/20 px-3 text-xs"
								onClick={renameNote}
								disabled={!selectedNote}
							>
								Rename
							</Button>
							<Button
								variant="ghost"
								size="sm"
								className="h-8 rounded-lg border border-destructive/30 px-3 text-xs text-destructive hover:bg-destructive/10"
								onClick={deleteNote}
								disabled={!selectedNote}
							>
								<Trash2 size={14} />
							</Button>
						</div>
					</div>
					<div className="flex-1 overflow-hidden">
						{selectedNote ? (
							<div className="relative h-full">
								{loadingNoteId === selectedNote.uuid && (
									<div
										className={cn(
											"absolute inset-0 z-10 flex items-center justify-center backdrop-blur-sm",
											dark ? "bg-black/60" : "bg-white/70"
										)}
									>
										<Loader2 className="animate-spin" />
									</div>
								)}
								<TiptapEditor
									value={content}
									onChange={onValueChange}
									placeholder="Start writing your beautiful note..."
									height={noteContentHeight}
									className="h-full"
									editable={loadingNoteId !== selectedNote.uuid}
									showToolbar={true}
									attachmentMap={attachmentMetadata}
									onAttachmentClick={handleAttachmentChipClick}
									onFilesDropped={(files, editorInstance, dropPosition) => {
										void handleEditorFiles(files, editorInstance, dropPosition ?? null)
									}}
									onFilesPasted={(files, editorInstance) => {
										void handleEditorFiles(files, editorInstance)
									}}
									onManualSave={onManualSave}
									saving={saving}
									saved={saved}
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
						"flex w-[260px] flex-col rounded-2xl border",
						dark ? "border-white/5 bg-[#151517]/90 shadow-[0_25px_60px_rgba(0,0,0,0.45)]" : "border-white/70 bg-[#fffdf8] shadow-[0_25px_70px_rgba(15,23,42,0.12)]"
					)}
				>
					<div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
						<div className="flex items-center gap-2">
							<Paperclip size={14} />
							<h3 className="text-sm font-semibold">Attachments</h3>
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
								size="sm"
								className="h-7 rounded-lg border border-white/20 px-2 text-xs"
								onClick={() => document.getElementById("mdnote-attachments-input")?.click()}
								disabled={!selectedNote}
							>
								<Plus size={12} />
							</Button>
						</div>
					</div>
					<div className="flex-1 overflow-auto px-3 pb-3">
						{selectedNote ? (
							attachments.length === 0 ? (
								<div className="mt-4 rounded-xl bg-muted/30 px-3 py-4 text-center text-xs text-muted-foreground">
									No attachments
								</div>
							) : (
								<ul className="flex flex-col gap-2 mt-2">
									{attachments.map((item: NoteAttachment) => {
										const key = getAttachmentKey(item)
										const preview = attachmentPreviews[key]
										const downloading = Boolean(downloadingAttachments[item.uuid])
										const icon = fileNameToSVGIcon(item.name)

										return (
											<li
												key={item.uuid}
												className={cn(
													"rounded-xl border px-3 py-2 transition-all duration-200",
													dark ? "border-white/10 bg-white/5 hover:bg-white/10" : "border-black/10 bg-white hover:shadow-md"
												)}
											>
												<div className="overflow-hidden rounded-lg">
													{preview ? (
														<img
															src={preview}
															alt={item.name}
															className="h-24 w-full rounded-lg object-cover"
														/>
													) : (
														<div className="flex h-24 flex-col items-center justify-center gap-2 rounded-lg bg-muted/40 text-muted-foreground">
															<img
																src={icon}
																alt=""
																className="h-10 w-10 opacity-80"
															/>
															<span className="text-[10px] uppercase tracking-wider">{item.mime ?? "File"}</span>
														</div>
													)}
												</div>
												<div className="mt-2 flex items-start justify-between gap-2">
													<div className="flex-1 min-w-0">
														<p className="text-xs font-medium leading-tight truncate">{item.name}</p>
														<p className="text-[10px] text-muted-foreground">
															{formatBytes(item.size)}
														</p>
													</div>
													<div className="flex items-center gap-1">
														<Button
															variant="ghost"
															size="sm"
															className="h-6 w-6 p-0 rounded-md text-primary hover:bg-primary/10 transition-all duration-200"
															onClick={() => insertAttachment(item)}
														>
															<Link2 size={12} />
														</Button>
														<Button
															variant="ghost"
															size="sm"
															className="h-6 w-6 p-0 rounded-md text-muted-foreground hover:bg-muted/40 transition-all duration-200"
															onClick={() => downloadAttachment(item)}
															disabled={downloading}
															title="Download attachment"
														>
															{downloading ? <Loader2 size={12} className="animate-spin" /> : <Download size={12} />}
														</Button>
														<Button
															variant="ghost"
															size="sm"
															className="h-6 w-6 p-0 rounded-md text-destructive hover:bg-destructive/10 transition-all duration-200"
															onClick={() => onDeleteAttachment(item)}
														>
															<Trash2 size={12} />
														</Button>
													</div>
												</div>
											</li>
										)
									})}
								</ul>
							)
						) : (
							<div className="mt-4 rounded-xl bg-muted/30 px-3 py-4 text-center text-xs text-muted-foreground">
								Select a note
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	)
})

export default NotesSimple





