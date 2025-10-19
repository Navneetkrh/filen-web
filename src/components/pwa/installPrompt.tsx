import { memo, useEffect, useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { X, Download, Smartphone } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "@/providers/themeProvider"

interface BeforeInstallPromptEvent extends Event {
    prompt(): Promise<void>
    userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

export const PWAInstallPrompt = memo(() => {
    const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
    const [showPrompt, setShowPrompt] = useState(false)
    const [isInstalled, setIsInstalled] = useState(false)
    const { dark } = useTheme()

    useEffect(() => {
        // Check if app is already installed
        const isStandalone = window.matchMedia('(display-mode: standalone)').matches
        const isInWebAppiOS = (window.navigator as any).standalone === true

        if (isStandalone || isInWebAppiOS) {
            setIsInstalled(true)
            return
        }

        // Listen for the beforeinstallprompt event
        const handleBeforeInstallPrompt = (e: Event) => {
            e.preventDefault()
            setDeferredPrompt(e as BeforeInstallPromptEvent)

            // Show prompt after a delay to avoid being too aggressive
            setTimeout(() => {
                setShowPrompt(true)
            }, 5000)
        }

        // Listen for app installed event
        const handleAppInstalled = () => {
            setIsInstalled(true)
            setShowPrompt(false)
            setDeferredPrompt(null)
        }

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
        window.addEventListener('appinstalled', handleAppInstalled)

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
            window.removeEventListener('appinstalled', handleAppInstalled)
        }
    }, [])

    const handleInstallClick = useCallback(async () => {
        if (!deferredPrompt) return

        try {
            await deferredPrompt.prompt()
            const { outcome } = await deferredPrompt.userChoice

            if (outcome === 'accepted') {
                console.log('User accepted the install prompt')
            } else {
                console.log('User dismissed the install prompt')
            }
        } catch (error) {
            console.error('Error showing install prompt:', error)
        } finally {
            setDeferredPrompt(null)
            setShowPrompt(false)
        }
    }, [deferredPrompt])

    const handleDismiss = useCallback(() => {
        setShowPrompt(false)
        // Don't show again for this session
        sessionStorage.setItem('pwa-prompt-dismissed', 'true')
    }, [])

    // Don't show if already installed or dismissed this session
    if (isInstalled || !showPrompt || !deferredPrompt || sessionStorage.getItem('pwa-prompt-dismissed')) {
        return null
    }

    return (
        <div className={cn(
            "fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-sm",
            "animate-in slide-in-from-bottom-4 duration-300"
        )}>
            <div className={cn(
                "rounded-xl border p-4 shadow-lg backdrop-blur-xl",
                dark
                    ? "border-white/10 bg-[#1c1c1e]/90"
                    : "border-black/10 bg-white/90"
            )}>
                <div className="flex items-start gap-3">
                    <div className={cn(
                        "rounded-full p-2",
                        dark ? "bg-primary/20" : "bg-primary/10"
                    )}>
                        <Smartphone size={20} className="text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-sm">Install Filen</h3>
                        <p className="text-xs text-muted-foreground mt-1">
                            Add to your home screen for quick access and offline support
                        </p>
                        <div className="flex items-center gap-2 mt-3">
                            <Button
                                size="sm"
                                onClick={handleInstallClick}
                                className="h-8 px-3 text-xs"
                            >
                                <Download size={14} className="mr-1" />
                                Install
                            </Button>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={handleDismiss}
                                className="h-8 px-3 text-xs"
                            >
                                Not now
                            </Button>
                        </div>
                    </div>
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleDismiss}
                        className="h-6 w-6 p-0 shrink-0"
                    >
                        <X size={14} />
                    </Button>
                </div>
            </div>
        </div>
    )
})

export default PWAInstallPrompt