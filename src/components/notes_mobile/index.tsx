import { memo, useCallback, useEffect, useMemo, useRef, useState, type ChangeEvent } from "react"
import { Button } from "@/components/ui/button"
import { TiptapEditor } from "@/components/tiptapEditor"
import worker from "@/lib/worker"
import useSDKConfig from "@/hooks/useSDKConfig"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import {
    Loader,
    Loader2,
    Notebook,
    Paperclip,
    Plus,
    Link2,
    Check,
    ArrowLeft,
    MoreVertical,
    X,
    Download,
    Trash2
} from "lucide-react"
import useErrorToast from "@/hooks/useErrorToast"
import useLoadingToast from "@/hooks/useLoadingToast"
import useWindowSize from "@/hooks/useWindowSize"
import type { DriveCloudItem } from "@/components/drive"
import { cn } from "@/lib/utils"
import { useTheme } from "@/providers/themeProvider"
import { THUMBNAIL_MAX_FETCH_SIZE } from "@/constants"
import { fileNameToSVGIcon } from "@/assets/fileExtensionIcons"
import { fileNameToThumbnailType } from "@/components/dialogs/previewDialog/utils"
import { generateThumbnail } from "@/lib/worker/proxy"
import { showConfirmDialog } from "@/components/dialogs/confirm"


const NOTE_FILE_NAME = "note.md"
const NOTES_ROOT_NAME = "Notes"
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

export const NotesMobile = memo(() => {
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
    const [currentView, setCurrentView] = useState<"list" | "editor" | "attachments">("list")
    const [showAttachments, setShowAttachments] = useState<boolean>(false)

    const queryClient = useQueryClient()

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
        const activeUUIDs = new Set(attachments.map(item => item.uuid))

        setAttachmentPreviews(prev => {
            let changed = false
            const next = { ...prev }

            for (const key of Object.keys(next)) {
                if (!activeUUIDs.has(key)) {
                    delete next[key]
                    changed = true
                }
            }

            return changed ? next : prev
        })

        attachments.forEach(item => {
            const key = item.uuid
            const thumbnailType = fileNameToThumbnailType(item.name)
            const shouldSkipThumbnail =
                item.size > THUMBNAIL_MAX_FETCH_SIZE || thumbnailType === "none"

            if (shouldSkipThumbnail) {
                setAttachmentPreviews(prev => {
                    if (prev[key] === null) {
                        return prev
                    }

                    return { ...prev, [key]: null }
                })

                return
            }

            if (previewFetchInFlightRef.current.has(key)) {
                return
            }

            if (attachmentPreviews[key]) {
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
                    setAttachmentPreviews(prev => ({ ...prev, [key]: null }))
                })
                .finally(() => {
                    previewFetchInFlightRef.current.delete(key)
                })
        })
    }, [attachments, attachmentPreviews])

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
            setCurrentView("editor")
            void loadNote(note)
        },
        [selectedNote, loadNote, resetAttachmentPreviews]
    )

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

                const existing = prev.notes.filter(item => item.uuid !== directory.uuid)

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
            setCurrentView("editor")
            setShowAttachments(false)

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

    const onValueChange = useCallback(
        (value: string) => {
            setContent(value)

            if (!selectedNote) {
                return
            }

            setSaved(false)

            if (saveTimer.current) {
                clearTimeout(saveTimer.current)
            }

            saveTimer.current = setTimeout(() => {
                void saveContent(value)
            }, 1500)
        },
        [selectedNote, saveContent]
    )



    // Mobile-specific handlers
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

    const insertAttachment = useCallback(
        (item: NoteAttachment) => {
            const encodedName = encodeURIComponent(item.name)
            const attachmentKey = `${item.uuid}/${encodedName}`

            const label = escapeHtml(item.name)
            const size = formatBytes(item.size)
            const chipContent = size ? `${label} (${size})` : label
            const snippet = `<span data-attachment-src="attachment:${attachmentKey}" data-attachment-label="${chipContent}" class="note-attachment-chip">&#128206; ${chipContent}</span>`

            const currentContent = content || ""
            const nextValue = currentContent + (currentContent ? "<br><br>" : "") + snippet

            onValueChange(nextValue)
            setShowAttachments(false)
        },
        [content, onValueChange]
    )

    // Mobile Notes List View
    if (currentView === "list") {
        return (
            <div className={cn(
                "flex flex-col w-full h-full safe-area-top safe-area-bottom",
                dark ? "bg-[#000000]" : "bg-[#f2f2f7]"
            )}>
                {/* iOS-style Header */}
                <div className={cn(
                    "flex items-center justify-center px-6 py-4 border-b backdrop-blur-xl",
                    dark
                        ? "border-white/5 bg-[#1c1c1e]/98"
                        : "border-black/5 bg-white/98"
                )}>
                    <h1 className={cn(
                        "text-xl font-bold tracking-tight",
                        dark ? "text-white" : "text-[#1d1d1f]"
                    )}>Notes</h1>
                </div>

                {/* Notes List */}
                <div className="flex-1 overflow-auto">
                    {notesQuery.isLoading ? (
                        <div className="flex h-full items-center justify-center">
                            <Loader className="animate-spin text-[#007AFF]" size={24} />
                        </div>
                    ) : sortedNotes.length === 0 ? (
                        <div className="flex h-full flex-col items-center justify-center gap-8 text-center px-8">
                            <div className={cn(
                                "w-24 h-24 rounded-3xl flex items-center justify-center shadow-lg",
                                dark
                                    ? "bg-gradient-to-br from-[#1c1c1e] to-[#2c2c2e] shadow-black/30"
                                    : "bg-gradient-to-br from-white to-[#f8f9fa] shadow-black/10"
                            )}>
                                <Notebook size={36} className="text-[#007AFF]" />
                            </div>
                            <div className="space-y-3">
                                <h2 className={cn(
                                    "text-2xl font-bold tracking-tight",
                                    dark ? "text-white" : "text-[#1d1d1f]"
                                )}>
                                    No Notes Yet
                                </h2>
                                <p className={cn(
                                    "text-base leading-relaxed max-w-xs",
                                    dark ? "text-[#8e8e93]" : "text-[#6d6d70]"
                                )}>
                                    Start capturing your thoughts and ideas. Tap the + button to create your first note.
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="px-4 py-3">
                            {sortedNotes.map((note) => (
                                <button
                                    key={note.uuid}
                                    className="w-full text-left transition-all duration-200 active:scale-[0.98] mb-3 last:mb-0"
                                    onClick={() => handleSelect(note)}
                                >
                                    <div className={cn(
                                        "p-5 rounded-2xl border-0 shadow-sm transition-all duration-200",
                                        dark
                                            ? "bg-[#1c1c1e] active:bg-[#2c2c2e] shadow-black/20"
                                            : "bg-white active:bg-[#f8f9fa] shadow-black/5"
                                    )}>
                                        <div className="flex items-start justify-between mb-3">
                                            <h3 className={cn(
                                                "font-semibold text-lg leading-tight line-clamp-2 flex-1 mr-3",
                                                dark ? "text-white" : "text-[#1d1d1f]"
                                            )}>
                                                {note.name || "Untitled Note"}
                                            </h3>
                                            <div className={cn(
                                                "w-2 h-2 rounded-full mt-2 shrink-0",
                                                dark ? "bg-[#48484a]" : "bg-[#c7c7cc]"
                                            )} />
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <p className={cn(
                                                "text-sm font-medium",
                                                dark ? "text-[#8e8e93]" : "text-[#6d6d70]"
                                            )}>
                                                {note.lastModified
                                                    ? new Date(note.lastModified).toLocaleDateString('en-US', {
                                                        month: 'short',
                                                        day: 'numeric',
                                                        year: new Date(note.lastModified).getFullYear() !== new Date().getFullYear() ? 'numeric' : undefined
                                                    })
                                                    : "Just now"
                                                }
                                            </p>
                                            <div className={cn(
                                                "text-xs px-2 py-1 rounded-full font-medium",
                                                dark
                                                    ? "bg-[#007AFF]/20 text-[#007AFF]"
                                                    : "bg-[#007AFF]/10 text-[#007AFF]"
                                            )}>
                                                Note
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Floating Plus Button */}
                <div className="fixed bottom-8 right-6 z-50">
                    <Button
                        onClick={createNote}
                        className={cn(
                            "h-16 w-16 rounded-2xl shadow-2xl transition-all duration-300 active:scale-95",
                            "bg-[#007AFF] hover:bg-[#0056CC]",
                            "hover:shadow-2xl hover:scale-105",
                            "border-0 shadow-[#007AFF]/25"
                        )}
                    >
                        <Plus size={28} strokeWidth={2.5} className="text-white" />
                    </Button>
                </div>
            </div>
        )
    }

    // Mobile Editor View
    return (
        <div className={cn(
            "flex flex-col w-full h-full safe-area-top safe-area-bottom",
            dark ? "bg-[#000000]" : "bg-[#f2f2f7]"
        )}>
            {/* iOS-style Editor Header */}
            <div className={cn(
                "flex items-center justify-between px-6 py-4 border-b backdrop-blur-xl",
                dark
                    ? "border-white/5 bg-[#1c1c1e]/98"
                    : "border-black/5 bg-white/98"
            )}>
                <div className="flex items-center gap-4">
                    <Button
                        variant="ghost"
                        size="sm"
                        className={cn(
                            "h-9 w-9 p-0 rounded-xl transition-all duration-200 active:scale-90",
                            dark
                                ? "text-[#007AFF] hover:bg-[#007AFF]/15"
                                : "text-[#007AFF] hover:bg-[#007AFF]/10"
                        )}
                        onClick={() => setCurrentView("list")}
                    >
                        <ArrowLeft size={18} strokeWidth={2.5} />
                    </Button>
                    <div className="flex items-center gap-2">
                        {saving && (
                            <div className="flex items-center gap-2 text-[#007AFF]">
                                <Loader className="animate-spin" size={14} />
                                <span className="text-xs font-medium">Saving</span>
                            </div>
                        )}
                        {!saving && saved && (
                            <div className="flex items-center gap-2 text-[#34C759]">
                                <Check size={14} strokeWidth={2.5} />
                                <span className="text-xs font-medium">Saved</span>
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <Button
                        variant="ghost"
                        size="sm"
                        className={cn(
                            "h-8 w-8 p-0 transition-all duration-200 active:scale-90",
                            dark
                                ? "text-[#007AFF] hover:bg-[#007AFF]/10"
                                : "text-[#007AFF] hover:bg-[#007AFF]/10"
                        )}
                        onClick={() => setShowAttachments(!showAttachments)}
                    >
                        <Paperclip size={16} strokeWidth={2.5} />
                    </Button>
                    <Button
                        variant="ghost"
                        size="sm"
                        className={cn(
                            "h-8 w-8 p-0 transition-all duration-200 active:scale-90",
                            dark
                                ? "text-[#007AFF] hover:bg-[#007AFF]/10"
                                : "text-[#007AFF] hover:bg-[#007AFF]/10"
                        )}
                    >
                        <MoreVertical size={16} strokeWidth={2.5} />
                    </Button>
                </div>
            </div>

            {/* Note Title Bar */}
            {selectedNote && (
                <div className={cn(
                    "px-6 py-4 border-b",
                    dark ? "border-white/5 bg-[#1c1c1e]" : "border-black/5 bg-white"
                )}>
                    <h2 className={cn(
                        "text-xl font-bold tracking-tight truncate",
                        dark ? "text-white" : "text-[#1d1d1f]"
                    )}>
                        {selectedNote.name}
                    </h2>
                    <p className={cn(
                        "text-sm mt-1 font-medium",
                        dark ? "text-[#8e8e93]" : "text-[#6d6d70]"
                    )}>
                        {selectedNote.lastModified
                            ? `Last edited ${new Date(selectedNote.lastModified).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                hour: 'numeric',
                                minute: '2-digit'
                            })}`
                            : "Just created"
                        }
                    </p>
                </div>
            )}

            {/* Editor */}
            <div className="flex-1 relative">
                {selectedNote ? (
                    <div className="relative h-full">
                        {loadingNoteId === selectedNote.uuid && (
                            <div
                                className={cn(
                                    "absolute inset-0 z-10 flex items-center justify-center backdrop-blur-sm",
                                    dark ? "bg-black/60" : "bg-white/80"
                                )}
                            >
                                <Loader2 className="animate-spin" />
                            </div>
                        )}
                        <TiptapEditor
                            value={content}
                            onChange={onValueChange}
                            placeholder="Start writing your note..."
                            height={windowSize.height - 140}
                            className="h-full"
                            editable={loadingNoteId !== selectedNote.uuid}
                            showToolbar={true}
                        />
                    </div>
                ) : (
                    <div className="flex h-full items-center justify-center text-muted-foreground">
                        Select a note to begin editing
                    </div>
                )}

                {/* iOS-style Attachments Overlay */}
                {showAttachments && (
                    <div className={cn(
                        "absolute inset-0 z-50 backdrop-blur-xl",
                        dark ? "bg-[#000000]/95" : "bg-[#f2f2f7]/95"
                    )}>
                        <div className="flex flex-col h-full">
                            <div className={cn(
                                "flex items-center justify-between px-4 py-3 border-b",
                                dark ? "border-white/10" : "border-black/10"
                            )}>
                                <div className="w-16" />
                                <h3 className="text-lg font-semibold">Attachments</h3>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className={cn(
                                        "h-8 w-8 p-0 transition-all duration-200 active:scale-90",
                                        dark
                                            ? "text-[#007AFF] hover:bg-[#007AFF]/10"
                                            : "text-[#007AFF] hover:bg-[#007AFF]/10"
                                    )}
                                    onClick={() => setShowAttachments(false)}
                                >
                                    <X size={18} strokeWidth={2.5} />
                                </Button>
                            </div>
                            <div className="flex-1 overflow-auto">
                                {attachments.length === 0 ? (
                                    <div className="flex flex-col items-center justify-center h-full text-center px-8">
                                        <div className={cn(
                                            "w-20 h-20 rounded-full flex items-center justify-center mb-6",
                                            dark ? "bg-[#1c1c1e]" : "bg-white"
                                        )}>
                                            <Paperclip size={32} className="text-[#8e8e93]" />
                                        </div>
                                        <div className="mb-8">
                                            <p className={cn(
                                                "text-xl font-semibold mb-2",
                                                dark ? "text-white" : "text-black"
                                            )}>
                                                No Attachments
                                            </p>
                                            <p className="text-[#8e8e93] text-base leading-relaxed">
                                                Add files to include them in your note
                                            </p>
                                        </div>
                                        <input
                                            id="mobile-attachments-input"
                                            type="file"
                                            multiple={true}
                                            className="hidden"
                                            onChange={onAttachmentInput}
                                        />
                                        <Button
                                            className={cn(
                                                "bg-[#007AFF] hover:bg-[#0056CC] text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 active:scale-95",
                                                "shadow-lg"
                                            )}
                                            onClick={() => document.getElementById("mobile-attachments-input")?.click()}
                                        >
                                            <Plus size={18} className="mr-2" strokeWidth={2.5} />
                                            Add Files
                                        </Button>
                                    </div>
                                ) : (
                                    <div className="px-4 py-2">
                                        {attachments.map((item: NoteAttachment) => {
                                            const preview = attachmentPreviews[item.uuid]
                                            const downloading = Boolean(downloadingAttachments[item.uuid])
                                            const icon = fileNameToSVGIcon(item.name)

                                            return (
                                                <div
                                                    key={item.uuid}
                                                    className={cn(
                                                        "mb-3 rounded-xl border overflow-hidden transition-all duration-200 active:scale-[0.98]",
                                                        dark
                                                            ? "border-[#38383a] bg-[#1c1c1e]"
                                                            : "border-[#d1d1d6] bg-white shadow-sm"
                                                    )}
                                                >
                                                    {preview ? (
                                                        <img
                                                            src={preview}
                                                            alt={item.name}
                                                            className="w-full h-40 object-cover"
                                                        />
                                                    ) : (
                                                        <div className={cn(
                                                            "flex flex-col items-center justify-center h-24 gap-2",
                                                            dark ? "bg-[#2c2c2e]" : "bg-[#f2f2f7]"
                                                        )}>
                                                            <img
                                                                src={icon}
                                                                alt=""
                                                                className="h-12 w-12 opacity-80"
                                                            />
                                                            <span className="text-[10px] uppercase tracking-wider text-[#8e8e93]">
                                                                {item.mime ?? "File"}
                                                            </span>
                                                        </div>
                                                    )}
                                                    <div className="p-4">
                                                        <div className="flex items-center justify-between">
                                                            <div className="flex-1 min-w-0">
                                                                <p className={cn(
                                                                    "font-medium truncate mb-1",
                                                                    dark ? "text-white" : "text-black"
                                                                )}>
                                                                    {item.name}
                                                                </p>
                                                                <p className="text-[#8e8e93] text-sm">
                                                                    {formatBytes(item.size)}
                                                                </p>
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                <Button
                                                                    variant="ghost"
                                                                    size="sm"
                                                                    className={cn(
                                                                        "h-8 w-8 p-0 transition-all duration-200 active:scale-90",
                                                                        dark
                                                                            ? "text-[#007AFF] hover:bg-[#007AFF]/10"
                                                                            : "text-[#007AFF] hover:bg-[#007AFF]/10"
                                                                    )}
                                                                    onClick={() => insertAttachment(item)}
                                                                >
                                                                    <Link2 size={16} strokeWidth={2.5} />
                                                                </Button>
                                                                <Button
                                                                    variant="ghost"
                                                                    size="sm"
                                                                    className={cn(
                                                                        "h-8 w-8 p-0 transition-all duration-200 active:scale-90",
                                                                        dark
                                                                            ? "text-[#007AFF] hover:bg-[#007AFF]/10"
                                                                            : "text-[#007AFF] hover:bg-[#007AFF]/10"
                                                                    )}
                                                                    onClick={() => downloadAttachment(item)}
                                                                    disabled={downloading}
                                                                >
                                                                    {downloading ? (
                                                                        <Loader2 size={16} className="animate-spin" />
                                                                    ) : (
                                                                        <Download size={16} />
                                                                    )}
                                                                </Button>
                                                                <Button
                                                                    variant="ghost"
                                                                    size="sm"
                                                                    className={cn(
                                                                        "h-8 w-8 p-0 transition-all duration-200 active:scale-90",
                                                                        dark
                                                                            ? "text-[#ff453a] hover:bg-[#ff453a]/10"
                                                                            : "text-[#ff3b30] hover:bg-[#ff3b30]/10"
                                                                    )}
                                                                    onClick={() => onDeleteAttachment(item)}
                                                                >
                                                                    <Trash2 size={16} />
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                        <input
                                            id="mobile-attachments-input-2"
                                            type="file"
                                            multiple={true}
                                            className="hidden"
                                            onChange={onAttachmentInput}
                                        />
                                        <Button
                                            variant="outline"
                                            className={cn(
                                                "w-full py-3 rounded-xl font-medium transition-all duration-200 active:scale-95 mb-4",
                                                dark
                                                    ? "border-[#38383a] bg-[#1c1c1e] text-[#007AFF] hover:bg-[#007AFF]/10"
                                                    : "border-[#d1d1d6] bg-white text-[#007AFF] hover:bg-[#007AFF]/10"
                                            )}
                                            onClick={() => document.getElementById("mobile-attachments-input-2")?.click()}
                                        >
                                            <Plus size={18} className="mr-2" strokeWidth={2.5} />
                                            Add More Files
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
})

export default NotesMobile
