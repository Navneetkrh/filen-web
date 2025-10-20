import { memo } from "react"
import { Editor } from "@tiptap/react"
import { Button } from "../ui/button"
import {
    Bold,
    Italic,
    Strikethrough,
    Code,
    List,
    ListOrdered,
    Quote,
    Undo,
    Redo,
    Heading1,
    Heading2,
    Heading3,
    Link,
    Image,
    Table,
    Save,
    Check,
    Loader2
} from "lucide-react"
import { cn } from "@/lib/utils"

interface ToolbarProps {
    editor: Editor | null
    className?: string
    onManualSave?: () => void
    saving?: boolean
    saved?: boolean
}

export const Toolbar = memo(({ editor, className, onManualSave, saving = false, saved = false }: ToolbarProps) => {
    if (!editor) {
        return null
    }

    const addImage = () => {
        const url = window.prompt('Enter image URL:')
        if (url) {
            editor.chain().focus().setImage({ src: url }).run()
        }
    }

    const setLink = () => {
        const previousUrl = editor.getAttributes('link').href
        const url = window.prompt('Enter URL:', previousUrl)

        if (url === null) {
            return
        }

        if (url === '') {
            editor.chain().focus().extendMarkRange('link').unsetLink().run()
            return
        }

        editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
    }

    const addTable = () => {
        editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()
    }

    return (
        <div className={cn("flex flex-wrap items-center gap-1 p-2", className)}>
            <Button
                variant={editor.isActive('bold') ? 'default' : 'ghost'}
                size="sm"
                onClick={() => editor.chain().focus().toggleBold().run()}
                className="h-8 w-8 p-0"
            >
                <Bold size={16} />
            </Button>

            <Button
                variant={editor.isActive('italic') ? 'default' : 'ghost'}
                size="sm"
                onClick={() => editor.chain().focus().toggleItalic().run()}
                className="h-8 w-8 p-0"
            >
                <Italic size={16} />
            </Button>

            <Button
                variant={editor.isActive('strike') ? 'default' : 'ghost'}
                size="sm"
                onClick={() => editor.chain().focus().toggleStrike().run()}
                className="h-8 w-8 p-0"
            >
                <Strikethrough size={16} />
            </Button>

            <Button
                variant={editor.isActive('code') ? 'default' : 'ghost'}
                size="sm"
                onClick={() => editor.chain().focus().toggleCode().run()}
                className="h-8 w-8 p-0"
            >
                <Code size={16} />
            </Button>

            <div className="w-px h-6 bg-border mx-1" />

            <Button
                variant={editor.isActive('heading', { level: 1 }) ? 'default' : 'ghost'}
                size="sm"
                onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                className="h-8 w-8 p-0"
            >
                <Heading1 size={16} />
            </Button>

            <Button
                variant={editor.isActive('heading', { level: 2 }) ? 'default' : 'ghost'}
                size="sm"
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                className="h-8 w-8 p-0"
            >
                <Heading2 size={16} />
            </Button>

            <Button
                variant={editor.isActive('heading', { level: 3 }) ? 'default' : 'ghost'}
                size="sm"
                onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                className="h-8 w-8 p-0"
            >
                <Heading3 size={16} />
            </Button>

            <div className="w-px h-6 bg-border mx-1" />

            <Button
                variant={editor.isActive('bulletList') ? 'default' : 'ghost'}
                size="sm"
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className="h-8 w-8 p-0"
            >
                <List size={16} />
            </Button>

            <Button
                variant={editor.isActive('orderedList') ? 'default' : 'ghost'}
                size="sm"
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className="h-8 w-8 p-0"
            >
                <ListOrdered size={16} />
            </Button>

            <Button
                variant={editor.isActive('blockquote') ? 'default' : 'ghost'}
                size="sm"
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                className="h-8 w-8 p-0"
            >
                <Quote size={16} />
            </Button>

            <div className="w-px h-6 bg-border mx-1" />

            <Button
                variant="ghost"
                size="sm"
                onClick={setLink}
                className="h-8 w-8 p-0"
            >
                <Link size={16} />
            </Button>

            <Button
                variant="ghost"
                size="sm"
                onClick={addImage}
                className="h-8 w-8 p-0"
            >
                <Image size={16} />
            </Button>

            <Button
                variant="ghost"
                size="sm"
                onClick={addTable}
                className="h-8 w-8 p-0"
            >
                <Table size={16} />
            </Button>

            <div className="w-px h-6 bg-border mx-1" />

            <Button
                variant="ghost"
                size="sm"
                onClick={() => editor.chain().focus().undo().run()}
                disabled={!editor.can().chain().focus().undo().run()}
                className="h-8 w-8 p-0"
            >
                <Undo size={16} />
            </Button>

            <Button
                variant="ghost"
                size="sm"
                onClick={() => editor.chain().focus().redo().run()}
                disabled={!editor.can().chain().focus().redo().run()}
                className="h-8 w-8 p-0"
            >
                <Redo size={16} />
            </Button>

            {onManualSave && (
                <>
                    <div className="w-px h-6 bg-border mx-1" />
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={onManualSave}
                        disabled={saving}
                        className="h-8 px-3 flex items-center gap-2"
                        title={saved ? "Saved" : saving ? "Saving..." : "Save manually"}
                    >
                        {saving ? (
                            <Loader2 size={16} className="animate-spin" />
                        ) : saved ? (
                            <Check size={16} className="text-green-500" />
                        ) : (
                            <Save size={16} />
                        )}
                        <span className="text-xs">
                            {saving ? "Saving..." : saved ? "Saved" : "Save"}
                        </span>
                    </Button>
                </>
            )}
        </div>
    )
})

Toolbar.displayName = "Toolbar"

export default Toolbar