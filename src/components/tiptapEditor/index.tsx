import { memo, useEffect } from "react"
import { useEditor, EditorContent, type Editor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Placeholder from "@tiptap/extension-placeholder"
import Typography from "@tiptap/extension-typography"
import Link from "@tiptap/extension-link"
import Image from "@tiptap/extension-image"
import { Table } from "@tiptap/extension-table"
import { TableRow } from "@tiptap/extension-table-row"
import { TableHeader } from "@tiptap/extension-table-header"
import { TableCell } from "@tiptap/extension-table-cell"
import FileHandler from "@tiptap/extension-file-handler"
import { cn } from "@/lib/utils"
import { useTheme } from "@/providers/themeProvider"
import useIsMobile from "@/hooks/useIsMobile"
import { Attachment } from "./extensions/attachment"
import type { AttachmentMeta } from "./extensions/attachment"
import Toolbar from "./toolbar"
import MobileToolbar from "./mobileToolbar"
import "./styles.css"

type AttachmentDisplayMap = Record<string, AttachmentMeta>

export const TiptapEditor = memo(({
    value,
    onChange,
    placeholder = "Start writing...",
    height,
    className,
    editable = true,
    showToolbar = true,
    attachmentMap = {},
    onAttachmentClick,
    onFilesDropped,
    onFilesPasted
}: {
    value: string
    onChange: (value: string) => void
    placeholder?: string
    height?: number
    className?: string
    editable?: boolean
    showToolbar?: boolean
    attachmentMap?: AttachmentDisplayMap
    onAttachmentClick?: (attachmentKey: string, event: MouseEvent) => void
    onFilesDropped?: (files: File[], editor: Editor, dropPosition: number | null) => void
    onFilesPasted?: (files: File[], editor: Editor) => void
}) => {
    const { dark } = useTheme()
    const isMobile = useIsMobile()

    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                bulletList: {
                    keepMarks: true,
                    keepAttributes: false,
                },
                orderedList: {
                    keepMarks: true,
                    keepAttributes: false,
                },
            }),
            Placeholder.configure({
                placeholder,
            }),
            Typography,
            Link.configure({
                openOnClick: false,
                HTMLAttributes: {
                    class: 'text-blue-500 hover:text-blue-700 underline',
                },
            }),
            Image.configure({
                HTMLAttributes: {
                    class: 'max-w-full h-auto rounded-lg',
                },
            }),
            Attachment.configure({
                HTMLAttributes: {
                    class: 'max-w-full h-auto rounded-lg',
                },
                attachments: attachmentMap,
            }),
            FileHandler.configure({
                onDrop: (editor, files, pos) => {
                    const fileList = Array.from(files ?? [])

                    if (fileList.length > 0) {
                        onFilesDropped?.(fileList, editor, pos ?? null)
                    }

                    return true
                },
                onPaste: (editor, files) => {
                    const fileList = Array.from(files ?? [])

                    if (fileList.length > 0) {
                        onFilesPasted?.(fileList, editor)
                    }

                    return true
                }
            }),
            Table.configure({
                resizable: true,
            }),
            TableRow,
            TableHeader,
            TableCell,
        ],
        content: value,
        editable,
        onUpdate: ({ editor }) => {
            const html = editor.getHTML()
            onChange(html)
        },
    })

    // Update editor content when value prop changes
    useEffect(() => {
        if (editor && editor.getHTML() !== value) {
            editor.commands.setContent(value)
        }
    }, [editor, value])

    // Update editable state
    useEffect(() => {
        if (editor) {
            editor.setEditable(editable)
        }
    }, [editor, editable])

    // Update attachment metadata for inline previews
    useEffect(() => {
        if (!editor) {
            return
        }

        const attachmentExtension = editor.extensionManager.extensions.find(ext => ext.name === "attachment")

        if (attachmentExtension && attachmentExtension.options.attachments !== attachmentMap) {
            attachmentExtension.options.attachments = attachmentMap
            editor.view.dispatch(editor.state.tr)
        }
    }, [editor, attachmentMap])

    // Handle attachment click interactions
    useEffect(() => {
        if (!editor || !onAttachmentClick) {
            return
        }

        const { dom } = editor.view
        const handler = (event: Event) => {
            const target = event.target as HTMLElement | null
            if (!target) {
                return
            }

            const attachmentElement = target.closest("[data-attachment-key]") as HTMLElement | null
            if (!attachmentElement) {
                return
            }

            const key = attachmentElement.getAttribute("data-attachment-key")

            if (!key) {
                return
            }

            onAttachmentClick(key, event as MouseEvent)
        }

        dom.addEventListener("click", handler)

        return () => {
            dom.removeEventListener("click", handler)
        }
    }, [editor, onAttachmentClick])

    return (
        <div
            className={cn(
                "tiptap-editor-container w-full border border-border rounded-md flex flex-col",
                dark ? "dark" : "",
                className
            )}
            style={{ height: height ? `${height}px` : 'auto' }}
        >
            {showToolbar && (isMobile ? <MobileToolbar editor={editor} /> : <Toolbar editor={editor} />)}
            <div className="relative flex-1">
                <EditorContent
                    editor={editor}
                    className={cn(
                        "tiptap-editor w-full h-full prose prose-sm max-w-none",
                        dark ? "prose-invert" : "",
                        "focus-within:outline-none"
                    )}
                />
            </div>
        </div>
    )
})

TiptapEditor.displayName = "TiptapEditor"

export default TiptapEditor
