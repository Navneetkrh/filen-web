import { memo } from "react"
import TiptapEditor from "../tiptapEditor"
import { cn } from "@/lib/utils"

export const NovelEditor = memo(({
    value,
    onChange,
    placeholder = "Start writing...",
    height,
    className,
    attachmentUrls = {}
}: {
    value: string
    onChange: (value: string) => void
    placeholder?: string
    height?: number
    className?: string
    attachmentUrls?: Record<string, { url: string; mime: string }>
}) => {
    return (
        <div
            className={cn("novel-editor-container w-full", className)}
            style={{ height: height ? `${height}px` : '100%' }}
        >
            <TiptapEditor
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                height={height}
                className="w-full h-full"
                attachmentUrls={attachmentUrls}
            />
        </div>
    )
})

NovelEditor.displayName = "NovelEditor"

export default NovelEditor