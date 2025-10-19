import { memo, useCallback, useEffect, useMemo, useRef, useState, type ChangeEvent } from "react"
import { Button } from "@/components/ui/button"
import { TiptapEditor } from "@/components/tiptapEditor"
import worker from "@/lib/worker"
import useSDKConfig from "@/hooks/useSDKConfig"
import { useQuery } from "@tanstack/react-query"
import {
    Loader,
    Notebook,
    Paperclip,
    Plus,
    Trash2,
    Link2,
    Image as ImageIcon,
    FileText,
    Check,
    ArrowLeft,
    Menu,
    MoreVertical,
    Edit3,
    X
} from "lucide-react"
import { showInputDialog } from "@/components/dialogs/input"
import useErrorToast from "@/hooks/useErrorToast"
import useLoadingToast from "@/hooks/useLoadingToast"
import { showConfirmDialog } from "@/components/dialogs/confirm"
import useWindowSize from "@/hooks/useWindowSize"
import type { DriveCloudItem } from "@/components/drive"
import { cn } from "@/lib/utils"
import { useTheme } from "@/providers/themeProvider"
import useIsMobile from "@/hooks/useIsMobile"

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

export const NotesMobile = memo(() => {
    const { baseFolderUUID } = useSDKConfig()
    const errorToast = useErrorToast()
    const loadingToast = useLoadingToast()
    const windowSize = useWindowSize()
    const { dark } = useTheme()
    const isMobile = useIsMobile()
    const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
    const loadingNoteRef = useRef<string | null>(null)
    const attachmentUrlsRef = useRef<Record<string, { url: string; mime: string }>>({})
    const fetchingAttachmentsRef = useRef<Set<string>>(new Set())

    const [selectedNote, setSelectedNote] = useState<DriveCloudItem | null>(null)
    const [noteFile, setNoteFile] = useState<NoteAttachment | null>(null)
    const [content, setContent] = useState<string>("")
    const [attachments, setAttachments] = useState<NoteAttachment[]>([])
    const [saving, setSaving] = useState<boolean>(false)
    const [saved, setSaved] = useState<boolean>(false)
    const [attachmentUrls, setAttachmentUrls] = useState<Record<string, { url: string; mime: string }>>({})
    const [currentView, setCurrentView] = useState<"list" | "editor" | "attachments">("list")
    const [showAttachments, setShowAttachments] = useState<boolean>(false)

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
            setCurrentView("editor")
            void loadNote(note)
        },
        [selectedNote, loadNote, resetAttachmentUrls]
    )

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

    const fetchAttachmentPreview = useCallback(
        async (item: NoteAttachment, key: string) => {
            try {
                const buffer = (await worker.readFile({ item, emitEvents: false })) as Uint8Array
                const blob = new Blob([new Uint8Array(buffer)], { type: item.mime ?? "application/octet-stream" })
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

    const insertAttachment = useCallback(
        (item: NoteAttachment) => {
            const encodedName = encodeURIComponent(item.name)
            const attachmentKey = `${item.uuid}/${encodedName}`

            // For TiptapEditor, we'll insert HTML directly
            const snippet = item.mime?.startsWith("image/")
                ? `<img src="attachment:${attachmentKey}" alt="${item.name}" />`
                : `<a href="attachment:${attachmentKey}">${item.name}</a>`

            const currentContent = content || ""
            const nextValue = currentContent + (currentContent ? "<br><br>" : "") + snippet

            onValueChange(nextValue)
            setShowAttachments(false)
        },
        [content, onValueChange]
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
            const isImage = item.mime?.startsWith("image/")

            if ((neededKeys.has(key) || isImage) && !attachmentUrlsRef.current[key] && !fetchingAttachmentsRef.current.has(key)) {
                fetchingAttachmentsRef.current.add(key)
                void fetchAttachmentPreview(item, key)
            }
        })

        for (const key of Object.keys(attachmentUrlsRef.current)) {
            const attachment = attachments.find(item => getAttachmentKey(item) === key)
            const isImage = attachment?.mime?.startsWith("image/")

            if (!neededKeys.has(key) && !isImage) {
                const current = attachmentUrlsRef.current[key]
                if (current) {
                    URL.revokeObjectURL(current.url)
                }
                delete attachmentUrlsRef.current[key]
            }
        }

        setAttachmentUrls({ ...attachmentUrlsRef.current })
    }, [attachments, content, fetchAttachmentPreview])

    // Mobile Notes List View
    if (currentView === "list") {
        return (
            <div className={cn(
                "flex flex-col w-full h-full",
                dark ? "bg-[#111315]" : "bg-[#f5f3ef]"
            )}>
                {/* Mobile Header */}
                <div className={cn(
                    "flex items-center justify-between p-4 border-b",
                    dark ? "border-white/10 bg-[#18181b]" : "border-black/10 bg-white"
                )}>
                    <h1 className="text-xl font-bold">Notes</h1>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="h-10 w-10 rounded-full bg-primary/10 p-0 text-primary hover:bg-primary/20"
                        onClick={createNote}
                    >
                        <Plus size={20} />
                    </Button>
                </div>

                {/* Notes List */}
                <div className="flex-1 overflow-auto p-4">
                    {notesQuery.isLoading ? (
                        <div className="flex h-full items-center justify-center">
                            <Loader className="animate-spin" size={32} />
                        </div>
                    ) : sortedNotes.length === 0 ? (
                        <div className="flex h-full flex-col items-center justify-center gap-4 text-center text-muted-foreground">
                            <Notebook size={64} />
                            <div>
                                <p className="text-lg font-medium">No notes yet</p>
                                <p className="text-sm">Tap the + button to create your first note</p>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-3">
                            {sortedNotes.map(note => (
                                <button
                                    key={note.uuid}
                                    className={cn(
                                        "w-full p-4 text-left rounded-xl border transition-all duration-200 active:scale-[0.98]",
                                        dark
                                            ? "border-white/10 bg-[#1c1c1e] hover:bg-[#2c2c2e]"
                                            : "border-black/10 bg-white hover:bg-gray-50 shadow-sm"
                                    )}
                                    onClick={() => handleSelect(note)}
                                >
                                    <p className="font-semibold text-base leading-tight line-clamp-2 break-all mb-2">
                                        {note.name || "Untitled"}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        {note.lastModified ? new Date(note.lastModified).toLocaleDateString() : "Just now"}
                                    </p>
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        )
    }

    // Mobile Editor View
    return (
        <div className={cn(
            "flex flex-col w-full h-full",
            dark ? "bg-[#111315]" : "bg-[#f5f3ef]"
        )}>
            {/* Mobile Editor Header */}
            <div className={cn(
                "flex items-center justify-between p-4 border-b",
                dark ? "border-white/10 bg-[#18181b]" : "border-black/10 bg-white"
            )}>
                <div className="flex items-center gap-3">
                    <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0"
                        onClick={() => setCurrentView("list")}
                    >
                        <ArrowLeft size={18} />
                    </Button>
                    <div className="flex items-center gap-2">
                        {saving && (
                            <div className="flex items-center gap-2 text-blue-500">
                                <Loader className="animate-spin" size={14} />
                                <span className="text-xs font-medium">Saving...</span>
                            </div>
                        )}
                        {!saving && saved && (
                            <div className="flex items-center gap-2 text-green-500">
                                <Check size={14} />
                                <span className="text-xs font-medium">Saved</span>
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0"
                        onClick={() => setShowAttachments(!showAttachments)}
                    >
                        <Paperclip size={16} />
                    </Button>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0"
                    >
                        <MoreVertical size={16} />
                    </Button>
                </div>
            </div>

            {/* Note Title */}
            {selectedNote && (
                <div className={cn(
                    "px-4 py-2 border-b",
                    dark ? "border-white/10" : "border-black/10"
                )}>
                    <h2 className="text-lg font-semibold truncate">{selectedNote.name}</h2>
                </div>
            )}

            {/* Editor */}
            <div className="flex-1 relative">
                {selectedNote ? (
                    <TiptapEditor
                        value={content}
                        onChange={onValueChange}
                        placeholder="Start writing your note..."
                        height={windowSize.height - 140}
                        className="h-full"
                        editable={true}
                        showToolbar={true}
                        attachmentUrls={attachmentUrls}
                    />
                ) : (
                    <div className="flex h-full items-center justify-center text-muted-foreground">
                        Select a note to begin editing
                    </div>
                )}

                {/* Attachments Overlay */}
                {showAttachments && (
                    <div className={cn(
                        "absolute inset-0 z-50",
                        dark ? "bg-[#111315]/95" : "bg-white/95"
                    )}>
                        <div className="flex flex-col h-full">
                            <div className={cn(
                                "flex items-center justify-between p-4 border-b",
                                dark ? "border-white/10" : "border-black/10"
                            )}>
                                <h3 className="text-lg font-semibold">Attachments</h3>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-8 w-8 p-0"
                                    onClick={() => setShowAttachments(false)}
                                >
                                    <X size={18} />
                                </Button>
                            </div>
                            <div className="flex-1 overflow-auto p-4">
                                {attachments.length === 0 ? (
                                    <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground">
                                        <Paperclip size={48} />
                                        <p className="mt-4">No attachments</p>
                                        <input
                                            id="mobile-attachments-input"
                                            type="file"
                                            multiple={true}
                                            className="hidden"
                                            onChange={onAttachmentInput}
                                        />
                                        <Button
                                            variant="outline"
                                            className="mt-4"
                                            onClick={() => document.getElementById("mobile-attachments-input")?.click()}
                                        >
                                            <Plus size={16} className="mr-2" />
                                            Add Files
                                        </Button>
                                    </div>
                                ) : (
                                    <div className="space-y-3">
                                        {attachments.map((item: NoteAttachment) => {
                                            const key = getAttachmentKey(item)
                                            const preview = attachmentUrls[key]
                                            const isImage = item.mime?.startsWith("image/")

                                            return (
                                                <div
                                                    key={item.uuid}
                                                    className={cn(
                                                        "p-3 rounded-lg border",
                                                        dark ? "border-white/10 bg-[#1c1c1e]" : "border-black/10 bg-white"
                                                    )}
                                                >
                                                    {isImage && preview ? (
                                                        <img
                                                            src={preview.url}
                                                            alt={item.name}
                                                            className="w-full h-32 object-cover rounded-lg mb-3"
                                                        />
                                                    ) : (
                                                        <div className="flex items-center justify-center h-20 bg-muted/40 rounded-lg mb-3">
                                                            {isImage ? <ImageIcon size={24} /> : <FileText size={24} />}
                                                        </div>
                                                    )}
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex-1 min-w-0">
                                                            <p className="font-medium truncate">{item.name}</p>
                                                            <p className="text-sm text-muted-foreground">
                                                                {formatBytes(item.size)}
                                                            </p>
                                                        </div>
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                            className="ml-2"
                                                            onClick={() => insertAttachment(item)}
                                                        >
                                                            <Link2 size={16} />
                                                        </Button>
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
                                            className="w-full"
                                            onClick={() => document.getElementById("mobile-attachments-input-2")?.click()}
                                        >
                                            <Plus size={16} className="mr-2" />
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