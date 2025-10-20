import { memo, useCallback, useEffect, useRef, useState, forwardRef, useImperativeHandle } from "react"
import { cn } from "@/lib/utils"
import { useTheme } from "@/providers/themeProvider"
import { Loader2 } from "lucide-react"
import worker from "@/lib/worker"

export type ExcalidrawInitialData = {
  elements?: any[]
  appState?: any
  files?: Record<string, any>
}

type NoteAttachment = any

const DEFAULT_NAME = "Sketch"

const toSerializableScene = (scene: ExcalidrawInitialData) => {
  const collaborators = scene.appState?.collaborators instanceof Map
    ? Object.fromEntries(scene.appState.collaborators)
    : (scene.appState?.collaborators ?? {})

  const appState = {
    ...scene.appState,
    collaborators
  }

  return {
    elements: scene.elements ?? [],
    appState,
    files: scene.files ?? {}
  }
}

const serializeScene = (scene: ExcalidrawInitialData) => {
  return JSON.stringify(toSerializableScene(scene))
}

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

export interface ExcalidrawInlineHandle { save: () => Promise<void> }

type Props = {
  parentUUID: string
  file: NoteAttachment | null
  height?: number
  className?: string
  autoSaveMs?: number
  onSaved?: (file: NoteAttachment) => void
  onSavingChange?: (saving: boolean) => void
}

export const ExcalidrawInline = memo(forwardRef<ExcalidrawInlineHandle, Props>(({ 
  parentUUID,
  file,
  height,
  className,
  autoSaveMs = 5000,
  onSaved,
  onSavingChange,
}, ref) => {
  const { dark } = useTheme()
  const [lib, setLib] = useState<any | null>(null)
  const [loadingLib, setLoadingLib] = useState<boolean>(false)
  const [scene, setScene] = useState<ExcalidrawInitialData | null>(null)
  const [sceneLoading, setSceneLoading] = useState<boolean>(false)
  const apiRef = useRef<any>(null)
  const pendingSceneRef = useRef<ExcalidrawInitialData | null>(null)
  const pendingHashRef = useRef<string | null>(null)
  const lastSavedHashRef = useRef<string | null>(null)
  const autoSaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const isAutoSavingRef = useRef(false)
  const saveRef = useRef<() => void | Promise<void>>()

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

  const clearAutoSaveTimer = useCallback(() => {
    if (autoSaveTimerRef.current) {
      clearTimeout(autoSaveTimerRef.current)
      autoSaveTimerRef.current = null
    }
  }, [])

  const scheduleAutoSave = useCallback(() => {
    if (!autoSaveMs || autoSaveMs <= 0) {
      return
    }
    if (!pendingSceneRef.current || !pendingHashRef.current) {
      return
    }
    clearAutoSaveTimer()
    autoSaveTimerRef.current = setTimeout(() => {
      autoSaveTimerRef.current = null
      isAutoSavingRef.current = true
      const fn = saveRef.current
      if (fn) {
        void fn()
      } else {
        isAutoSavingRef.current = false
      }
    }, autoSaveMs)
  }, [autoSaveMs, clearAutoSaveTimer])

  const gatherScene = useCallback(() => {
    if (pendingSceneRef.current) {
      return pendingSceneRef.current
    }
    if (!apiRef.current) {
      return null
    }
    const elements = apiRef.current.getSceneElements?.() ?? []
    const appState = normalizeAppState(apiRef.current.getAppState?.())
    const files = apiRef.current.getFiles?.() ?? {}
    return { elements, appState, files }
  }, [])

  // load scene from file
  useEffect(() => {
    let mounted = true
    setSceneLoading(true)
    ;(async () => {
      try {
        const data = await readScene(file)
        if (mounted) setScene(data)
        if (data) {
          lastSavedHashRef.current = serializeScene(data)
        } else {
          lastSavedHashRef.current = null
        }
        pendingSceneRef.current = null
        pendingHashRef.current = null
      } finally {
        if (mounted) setSceneLoading(false)
      }
    })()
    clearAutoSaveTimer()
    isAutoSavingRef.current = false
    return () => {
      mounted = false
    }
  }, [file?.uuid, clearAutoSaveTimer])

  const save = useCallback(async () => {
    if (!lib) return

    const pendingBefore = pendingSceneRef.current
    const sceneToSave = pendingBefore ?? gatherScene()
    if (!sceneToSave) {
      onSavingChange?.(false)
      return
    }

    const serializable = toSerializableScene(sceneToSave)
    const hash = JSON.stringify(serializable)
    if (!pendingBefore && hash === lastSavedHashRef.current) {
      onSavingChange?.(false)
      return
    }

    onSavingChange?.(true)

    try {
      const json = JSON.stringify({ type: "excalidraw", version: 2, source: "filen-notes", ...serializable })

      const baseName = (file?.name && file.name.endsWith('.excalidraw')) ? file.name.replace(/\.excalidraw$/i, '') : DEFAULT_NAME
      const jsonFile = new File([json], `${baseName}.excalidraw`, { type: "application/json" })

      if (file) {
        try { await worker.deleteItemsPermanently({ items: [file] }) } catch {}
      }

      const uploaded = await worker.uploadFile({ file: jsonFile, parent: parentUUID, emitEvents: false })

      pendingSceneRef.current = null
      pendingHashRef.current = null
      lastSavedHashRef.current = hash
      isAutoSavingRef.current = false
      clearAutoSaveTimer()
      onSavingChange?.(false)
      onSaved?.(uploaded as any)
    } catch (e) {
      console.error(e)
      isAutoSavingRef.current = false
      onSavingChange?.(false)
      if (pendingSceneRef.current && !autoSaveTimerRef.current) {
        scheduleAutoSave()
      }
    }
  }, [lib, gatherScene, file, parentUUID, onSaved, scheduleAutoSave])

  useEffect(() => {
    saveRef.current = save
  }, [save])

  useEffect(() => {
    return () => {
      clearAutoSaveTimer()
    }
  }, [clearAutoSaveTimer])

  const containerStyle = height ? { height: `${height}px` } : undefined

  useImperativeHandle(ref, () => ({
    save: async () => { await save() }
  }), [save])

  return (
    <div className={cn("w-full", className)} style={containerStyle}>
      <div className="h-full w-full relative">
        {(loadingLib || sceneLoading || !lib) ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="animate-spin" />
          </div>
        ) : (
          <>
            <lib.Excalidraw
              theme={dark ? "dark" : "light"}
              initialData={scene ?? undefined}
              excalidrawAPI={(api: any) => (apiRef.current = api)}
              onChange={(elements: any[], appState: any, files: Record<string, any>) => {
                const normalized: ExcalidrawInitialData = {
                  elements,
                  appState: normalizeAppState(appState),
                  files
                }
                const hash = serializeScene(normalized)

                if (hash === pendingHashRef.current) {
                  return
                }

                if (hash === lastSavedHashRef.current) {
                  pendingSceneRef.current = null
                  pendingHashRef.current = null
                  clearAutoSaveTimer()
                  return
                }

                pendingSceneRef.current = normalized
                pendingHashRef.current = hash
                clearAutoSaveTimer()
                if (!isAutoSavingRef.current) {
                  scheduleAutoSave()
                }
              }}
            />
          </>
        )}
      </div>
    </div>
  )
}))

ExcalidrawInline.displayName = "ExcalidrawInline"

export default ExcalidrawInline
