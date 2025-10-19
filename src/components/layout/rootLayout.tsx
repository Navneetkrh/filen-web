import { memo } from "react"
import { Outlet } from "@tanstack/react-router"
import PWAInstallPrompt from "@/components/pwa/installPrompt"
import useIsMobile from "@/hooks/useIsMobile"

export const RootLayout = memo(() => {
    const isMobile = useIsMobile()

    return (
        <>
            <Outlet />
            {isMobile && <PWAInstallPrompt />}
        </>
    )
})

export default RootLayout