// Minimal service worker for installability; no caching of camera, GIF or uploads.
self.addEventListener('install', event => { self.skipWaiting(); });
self.addEventListener('activate', event => { event.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', () => {});
