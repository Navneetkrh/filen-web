import { memo, useCallback, useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useTheme } from "@/providers/themeProvider"
import { Loader2, Check } from "lucide-react"
import worker from "@/lib/worker"

export type ExcalidrawInitialData = {
  elements?: any[]
  appState?: any
  files?: Record<string, any>
}

type NoteAttachment = any

const DEFAULT_NAME = "Sketch"

function normalizeAppState(input: any): any {
  const app = { ...(input ?? {}) }
  const col = app.collaborators

  // Always provide a Map for collaborators
  if (col instanceof Map) {
    app.collaborators = col
  } else if (Array.isArray(col)) {
    app.collaborators = new Map(col.map((c, i) => [String(i), c]))
  } else if (col && typeof col === 'object') {
    app.collaborators = new Map(Object.entries(col))
  } else {
    app.collaborators = new Map()
  }

  return app
}

const readScene = async (file: NoteAttachment | null): Promise<ExcalidrawInitialData | null> => {
  if (!file) return null
  const buffer = (await worker.readFile({ item: file, emitEvents: false })) as Uint8Array
  const text = new TextDecoder().decode(buffer)
  try {
    const parsed = JSON.parse(text)
    return {
      elements: parsed?.elements ?? [],
      appState: normalizeAppState(parsed?.appState),
      files: parsed?.files ?? {},
    }
  } catch {
    return null
  }
}

export const ExcalidrawInline = memo(({
  parentUUID,
  file,
  height,
  className,
  onSaved,
}: {
  parentUUID: string
  file: NoteAttachment | null
  height?: number
  className?: string
  onSaved?: (file: NoteAttachment) => void
}) => {
  const { dark } = useTheme()
  const [lib, setLib] = useState<any | null>(null)
  const [loadingLib, setLoadingLib] = useState<boolean>(false)
  const [scene, setScene] = useState<ExcalidrawInitialData | null>(null)
  const [sceneLoading, setSceneLoading] = useState<boolean>(false)
  const apiRef = useRef<any>(null)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  // load excalidraw lib lazily
  useEffect(() => {
    let mounted = true
    if (lib) return
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
  }, [lib])

  // load scene from file
  useEffect(() => {
    let mounted = true
    setSceneLoading(true)
    ;(async () => {
      try {
        const data = await readScene(file)
        if (mounted) setScene(data)
      } finally {
        if (mounted) setSceneLoading(false)
      }
    })()
    return () => {
      mounted = false
    }
  }, [file?.uuid])

  const save = useCallback(async () => {
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

      const baseName = (file?.name && file.name.endsWith('.excalidraw')) ? file.name.replace(/\.excalidraw$/i, '') : DEFAULT_NAME
      const jsonFile = new File([json], `${baseName}.excalidraw`, { type: "application/json" })

      if (file) {
        try { await worker.deleteItemsPermanently({ items: [file] }) } catch {}
      }

      const uploaded = await worker.uploadFile({ file: jsonFile, parent: parentUUID, emitEvents: false })
      setSaving(false)
      setSaved(true)
      setTimeout(() => setSaved(false), 1500)
      onSaved?.(uploaded as any)
    } catch (e) {
      console.error(e)
      setSaving(false)
      setSaved(false)
    }
  }, [lib, apiRef.current, parentUUID, file])

  const containerStyle = height ? { height: `${height}px` } : undefined

  return (
    <div className={cn("w-full", className)} style={containerStyle}>
      <div className="h-full w-full relative">
        {(loadingLib || sceneLoading || !lib) ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="animate-spin" />
          </div>
        ) : (
          <>
            <div className="absolute top-2 right-2 z-10 flex items-center gap-2">
              {saving ? (
                <div className="text-xs px-2 py-1 rounded bg-[#007AFF]/10 text-[#007AFF] flex items-center gap-1">
                  <Loader2 className="animate-spin" size={12} />
                  Saving
                </div>
              ) : saved ? (
                <div className="text-xs px-2 py-1 rounded bg-[#34C759]/10 text-[#34C759] flex items-center gap-1">
                  <Check size={12} />
                  Saved
                </div>
              ) : null}
              <Button className="h-8 px-3 bg-[#007AFF] hover:bg-[#0056CC] text-white" onClick={save}>Save</Button>
            </div>
            <lib.Excalidraw
              theme={dark ? "dark" : "light"}
              initialData={scene ?? undefined}
              excalidrawAPI={(api: any) => (apiRef.current = api)}
            />
          </>
        )}
      </div>
    </div>
  )
})

ExcalidrawInline.displayName = "ExcalidrawInline"

export default ExcalidrawInline
