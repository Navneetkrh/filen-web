import { createFileRoute } from "@tanstack/react-router"
import RequireAuth from "@/components/requireAuthed"
import MainContainer from "@/components/mainContainer"
import NotesResponsive from "@/components/notes_responsive"
import useIsMobile from "@/hooks/useIsMobile"

export const Route = createFileRoute("/notes")({
	component: Notes
})

export function Notes() {
	const isMobile = useIsMobile()

	return (
		<RequireAuth>
			{isMobile ? (
				<NotesResponsive />
			) : (
				<MainContainer>
					<NotesResponsive />
				</MainContainer>
			)}
		</RequireAuth>
	)
}
