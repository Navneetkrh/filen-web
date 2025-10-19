import { memo } from "react"
import useIsMobile from "@/hooks/useIsMobile"
import NotesSimple from "@/components/notes_simple"
import NotesMobile from "@/components/notes_mobile"

export const NotesResponsive = memo(() => {
    const isMobile = useIsMobile()

    if (isMobile) {
        return <NotesMobile />
    }

    return <NotesSimple />
})

export default NotesResponsive