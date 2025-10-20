import { memo, useCallback, useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useTheme } from "@/providers/themeProvider"
import { Loader2, Check, X } from "lucide-react"
import worker from "@/lib/worker"

type ExcalidrawLib = any

export type ExcalidrawInitialData = {
  elements?: any[]
  appState?: any
  files?: Record<string, any>
}

export type SaveResult = {
  jsonItem: any
  imageItem: any
}

export const ExcalidrawModal = memo(({
  open,
  onOpenChange,
  parentUUID,
  initialData,
  initialName,
  jsonItem,
  onSaved
}: {
  open: boolean
  onOpenChange: (next: boolean) => void
  parentUUID: string
  initialData?: ExcalidrawInitialData | null
  initialName?: string | null
  jsonItem?: any | null
  onSaved?: (result: SaveResult) => void
}) => {
  const { dark } = useTheme()
  const [loadingLib, setLoadingLib] = useState<boolean>(false)
  const [lib, setLib] = useState<ExcalidrawLib | null>(null)
  const apiRef = useRef<any>(null)
  const [saving, setSaving] = useState<boolean>(false)
  const [saved, setSaved] = useState<boolean>(false)
  const [sceneData, setSceneData] = useState<ExcalidrawInitialData | null>(initialData ?? null)
  const [sceneLoading, setSceneLoading] = useState<boolean>(false)

  useEffect(() => {
    if (!open || lib) return
    let mounted = true
    setLoadingLib(true)
    ;(async () => {
      try {
        const m = await import("@excalidraw/excalidraw")
        await import("@excalidraw/excalidraw/index.css")
        if (mounted) setLib(m)
      } finally {
        if (mounted) setLoadingLib(false)
      }
    })()
    return () => {
      mounted = false
    }
  }, [open, lib])

  // Helpers
  const normalizeAppState = (input: any) => {
    const app = { ...(input ?? {}) }
    const col = app.collaborators
    if (col instanceof Map) {
      app.collaborators = col
    } else if (Array.isArray(col)) {
      app.collaborators = new Map(col.map((c: any, i: number) => [String(i), c]))
    } else if (col && typeof col === 'object') {
      app.collaborators = new Map(Object.entries(col))
    } else {
      app.collaborators = new Map()
    }
    return app
  }

  // Load existing scene JSON if provided
  useEffect(() => {
    let mounted = true
    ;(async () => {
      if (!open || !jsonItem) return
      setSceneLoading(true)
      try {
        const buffer = (await worker.readFile({ item: jsonItem, emitEvents: false })) as Uint8Array
        const text = new TextDecoder().decode(buffer)
        const parsed = JSON.parse(text)
        const elements = parsed?.elements ?? []
        const appState = normalizeAppState(parsed?.appState)
        const files = parsed?.files ?? {}
        if (mounted) setSceneData({ elements, appState, files })
      } catch (e) {
        console.error(e)
      } finally {
        if (mounted) setSceneLoading(false)
      }
    })()
    return () => {
      mounted = false
    }
  }, [open, jsonItem])

  const onCancel = useCallback(() => {
    onOpenChange(false)
  }, [onOpenChange])

  const onSave = useCallback(async () => {
    if (!lib || !apiRef.current) return

    setSaving(true)
    setSaved(false)
    try {
      const elements = apiRef.current.getSceneElements?.() ?? []
      const appState = apiRef.current.getAppState?.() ?? {}
      const collaborators = appState?.collaborators instanceof Map
        ? Object.fromEntries(appState.collaborators)
        : (appState?.collaborators ?? {})
      const appStateForSave = { ...appState, collaborators }
      const files = apiRef.current.getFiles?.() ?? {}

      const json = JSON.stringify({ type: "excalidraw", version: 2, source: "filen-notes", elements, appState: appStateForSave, files })

      const blob = await lib.exportToBlob({ elements, appState, files, mimeType: "image/png", quality: 1 })

      const baseName = (initialName && initialName.trim().length > 0 ? initialName.trim() : `Sketch ${new Date().toISOString().slice(0,10)}-${Math.random().toString(36).slice(2,6).toUpperCase()}`)
      const jsonFile = new File([json], `${baseName}.excalidraw`, { type: "application/json" })
      const pngFile = new File([blob], `${baseName}.png`, { type: "image/png" })

      const jsonItem = await worker.uploadFile({ file: jsonFile, parent: parentUUID, emitEvents: false })
      const imageItem = await worker.uploadFile({ file: pngFile, parent: parentUUID, emitEvents: false })

      setSaving(false)
      setSaved(true)
      setTimeout(() => setSaved(false), 1500)

      onSaved?.({ jsonItem, imageItem })
      onOpenChange(false)
    } catch (e) {
      console.error(e)
      setSaving(false)
      setSaved(false)
    }
  }, [lib, initialName, onOpenChange, parentUUID, onSaved])

  if (!open) return null

  return (
    <div className={cn(
      "fixed inset-0 z-[60] flex flex-col",
      dark ? "bg-black/95" : "bg-white"
    )}>
      <div className={cn(
        "flex items-center justify-between px-4 py-2 border-b",
        dark ? "border-white/10" : "border-black/10"
      )}>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={onCancel} className={cn(
            "h-9 px-3",
            dark ? "text-[#007AFF] hover:bg-[#007AFF]/10" : "text-[#007AFF] hover:bg-[#007AFF]/10"
          )}>
            <X size={16} />
          </Button>
        </div>
        <div className="flex items-center gap-3">
          {saving ? (
            <div className="flex items-center gap-2 text-[#007AFF]">
              <Loader2 className="animate-spin" size={16} />
              <span className="text-xs font-medium">Saving</span>
            </div>
          ) : saved ? (
            <div className="flex items-center gap-2 text-[#34C759]">
              <Check size={16} />
              <span className="text-xs font-medium">Saved</span>
            </div>
          ) : null}
          <Button onClick={onSave} className="h-9 px-4 bg-[#007AFF] hover:bg-[#0056CC] text-white">Save</Button>
        </div>
      </div>

      <div className="flex-1 min-h-0">
        {loadingLib || !lib || sceneLoading ? (
          <div className="w-full h-full flex items-center justify-center">
            <Loader2 className="animate-spin" />
          </div>
        ) : (
          <lib.Excalidraw
            theme={dark ? "dark" : "light"}
            initialData={sceneData ?? initialData ?? undefined}
            excalidrawAPI={(api: any) => (apiRef.current = api)}
          />
        )}
      </div>
    </div>
  )
})

ExcalidrawModal.displayName = "ExcalidrawModal"

export default ExcalidrawModal
