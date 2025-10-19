import { memo, useState } from "react"
import { Editor } from "@tiptap/react"
import { Button } from "../ui/button"
import {
    Bold,
    Italic,
    List,
    ListOrdered,
    Quote,
    Undo,
    Redo,
    Heading2,
    Link,
    Image,
    MoreHorizontal,
    X
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "@/providers/themeProvider"

interface MobileToolbarProps {
    editor: Editor | null
    className?: string
}

export const MobileToolbar = memo(({ editor, className }: MobileToolbarProps) => {
    const { dark } = useTheme()
    const [showMore, setShowMore] = useState(false)

    if (!editor) {
        return null
    }

    const addImage = () => {
        const url = window.prompt('Enter image URL:')
        if (url) {
            editor.chain().focus().setImage({ src: url }).run()
        }
        setShowMore(false)
    }

    const setLink = () => {
        const previousUrl = editor.getAttributes('link').href
        const url = window.prompt('Enter URL:', previousUrl)

        if (url === null) {
            return
        }

        if (url === '') {
            editor.chain().focus().extendMarkRange('link').unsetLink().run()
            setShowMore(false)
            return
        }

        editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
        setShowMore(false)
    }

    const primaryButtons = [
        {
            icon: Bold,
            isActive: () => editor.isActive('bold'),
            onClick: () => editor.chain().focus().toggleBold().run(),
            label: 'Bold'
        },
        {
            icon: Italic,
            isActive: () => editor.isActive('italic'),
            onClick: () => editor.chain().focus().toggleItalic().run(),
            label: 'Italic'
        },
        {
            icon: List,
            isActive: () => editor.isActive('bulletList'),
            onClick: () => editor.chain().focus().toggleBulletList().run(),
            label: 'Bullet List'
        },
        {
            icon: ListOrdered,
            isActive: () => editor.isActive('orderedList'),
            onClick: () => editor.chain().focus().toggleOrderedList().run(),
            label: 'Numbered List'
        }
    ]

    const secondaryButtons = [
        {
            icon: Heading2,
            isActive: () => editor.isActive('heading', { level: 2 }),
            onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
            label: 'Heading'
        },
        {
            icon: Quote,
            isActive: () => editor.isActive('blockquote'),
            onClick: () => editor.chain().focus().toggleBlockquote().run(),
            label: 'Quote'
        },
        {
            icon: Link,
            isActive: () => editor.isActive('link'),
            onClick: setLink,
            label: 'Link'
        },
        {
            icon: Image,
            isActive: () => false,
            onClick: addImage,
            label: 'Image'
        },
        {
            icon: Undo,
            isActive: () => false,
            onClick: () => editor.chain().focus().undo().run(),
            label: 'Undo',
            disabled: !editor.can().undo()
        },
        {
            icon: Redo,
            isActive: () => false,
            onClick: () => editor.chain().focus().redo().run(),
            label: 'Redo',
            disabled: !editor.can().redo()
        }
    ]

    return (
        <>
            <div className={cn(
                "flex items-center gap-1 p-2 border-b overflow-x-auto",
                dark ? "border-white/10 bg-[#1c1c1e]" : "border-black/10 bg-white",
                className
            )}>
                {/* Primary buttons - always visible */}
                {primaryButtons.map((button, index) => {
                    const Icon = button.icon
                    return (
                        <Button
                            key={index}
                            variant="ghost"
                            size="sm"
                            className={cn(
                                "h-8 w-8 p-0 shrink-0",
                                button.isActive() && "bg-primary/20 text-primary"
                            )}
                            onClick={button.onClick}
                        >
                            <Icon size={16} />
                        </Button>
                    )
                })}

                {/* Divider */}
                <div className={cn(
                    "w-px h-6 mx-1 shrink-0",
                    dark ? "bg-white/10" : "bg-black/10"
                )} />

                {/* More button */}
                <Button
                    variant="ghost"
                    size="sm"
                    className={cn(
                        "h-8 w-8 p-0 shrink-0",
                        showMore && "bg-primary/20 text-primary"
                    )}
                    onClick={() => setShowMore(!showMore)}
                >
                    <MoreHorizontal size={16} />
                </Button>
            </div>

            {/* Expanded toolbar */}
            {showMore && (
                <div className={cn(
                    "flex items-center justify-between p-2 border-b",
                    dark ? "border-white/10 bg-[#1c1c1e]" : "border-black/10 bg-white"
                )}>
                    <div className="flex items-center gap-1 overflow-x-auto">
                        {secondaryButtons.map((button, index) => {
                            const Icon = button.icon
                            return (
                                <Button
                                    key={index}
                                    variant="ghost"
                                    size="sm"
                                    className={cn(
                                        "h-8 w-8 p-0 shrink-0",
                                        button.isActive() && "bg-primary/20 text-primary"
                                    )}
                                    onClick={button.onClick}
                                    disabled={button.disabled}
                                >
                                    <Icon size={16} />
                                </Button>
                            )
                        })}
                    </div>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 shrink-0"
                        onClick={() => setShowMore(false)}
                    >
                        <X size={16} />
                    </Button>
                </div>
            )}
        </>
    )
})

export default MobileToolbar