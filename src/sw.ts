/// <reference lib="webworker" />

import { precacheAndRoute, cleanupOutdatedCaches } from 'workbox-precaching'
import { registerRoute } from 'workbox-routing'
import { StaleWhileRevalidate, CacheFirst, NetworkFirst } from 'workbox-strategies'
import { ExpirationPlugin } from 'workbox-expiration'

declare const self: ServiceWorkerGlobalScope

// Precache all static assets
precacheAndRoute(self.__WB_MANIFEST)

// Clean up old caches
cleanupOutdatedCaches()

// Cache API responses
registerRoute(
  ({ url }) => url.pathname.startsWith('/api/'),
  new NetworkFirst({
    cacheName: 'api-cache',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 100,
        maxAgeSeconds: 60 * 60 * 24, // 24 hours
      }),
    ],
  })
)

// Cache images
registerRoute(
  ({ request }) => request.destination === 'image',
  new CacheFirst({
    cacheName: 'images-cache',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 200,
        maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
      }),
    ],
  })
)

// Cache fonts
registerRoute(
  ({ request }) => request.destination === 'font',
  new CacheFirst({
    cacheName: 'fonts-cache',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
      }),
    ],
  })
)

// Cache CSS and JS files
registerRoute(
  ({ request }) => 
    request.destination === 'style' || 
    request.destination === 'script',
  new StaleWhileRevalidate({
    cacheName: 'static-resources',
  })
)

// Handle offline fallback
registerRoute(
  ({ request }) => request.mode === 'navigate',
  new NetworkFirst({
    cacheName: 'pages-cache',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 60 * 60 * 24 * 7, // 7 days
      }),
    ],
  })
)

// Background sync for notes
self.addEventListener('sync', (event: any) => {
  if (event.tag === 'background-sync-notes') {
    event.waitUntil(syncNotes())
  }
})

async function syncNotes() {
  try {
    // Get pending notes from IndexedDB
    const pendingNotes = await getPendingNotes()
    
    for (const note of pendingNotes) {
      try {
        // Attempt to sync the note
        await syncNote(note)
        // Remove from pending if successful
        await removePendingNote(note.id)
      } catch (error) {
        console.error('Failed to sync note:', error)
      }
    }
  } catch (error) {
    console.error('Background sync failed:', error)
  }
}

async function getPendingNotes(): Promise<any[]> {
  // Implementation would depend on your IndexedDB structure
  return []
}

async function syncNote(note: any): Promise<void> {
  // Implementation would depend on your API
  console.log('Syncing note:', note)
}

async function removePendingNote(noteId: string): Promise<void> {
  // Implementation would depend on your IndexedDB structure
  console.log('Removing pending note:', noteId)
}

// Push notifications
self.addEventListener('push', (event) => {
  if (!event.data) return

  const data = event.data.json()
  
  const options: any = {
    body: data.body,
    icon: '/android-chrome-192x192.png',
    badge: '/notification-favicon-32x32.png',
    vibrate: [200, 100, 200],
    data: data.data,
    actions: [
      {
        action: 'open',
        title: 'Open',
        icon: '/android-chrome-192x192.png'
      },
      {
        action: 'close',
        title: 'Close'
      }
    ]
  }

  event.waitUntil(
    self.registration.showNotification(data.title || 'Filen', options)
  )
})

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  event.notification.close()

  if (event.action === 'open' || !event.action) {
    event.waitUntil(
      self.clients.openWindow(event.notification.data?.url || '/')
    )
  }
})

// Handle app install prompt
self.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the mini-infobar from appearing on mobile
  event.preventDefault()
  
  // Stash the event so it can be triggered later
  // Note: This would typically be handled in the main thread, not service worker
  console.log('Install prompt event received in service worker')
})

// Skip waiting and claim clients immediately
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
})

// Claim all clients immediately
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim())
})

// Handle share target (if implemented)
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url)
  
  if (url.pathname === '/share-target' && event.request.method === 'POST') {
    event.respondWith(handleShareTarget(event.request))
  }
})

async function handleShareTarget(request: Request): Promise<Response> {
  const formData = await request.formData()
  const title = formData.get('title') as string
  const text = formData.get('text') as string
  const url = formData.get('url') as string

  // Store shared content for the app to pick up
  const sharedContent = { title, text, url, timestamp: Date.now() }
  
  // You would store this in IndexedDB or similar
  console.log('Shared content:', sharedContent)

  // Redirect to the notes page
  return Response.redirect('/notes', 302)
}

export {}