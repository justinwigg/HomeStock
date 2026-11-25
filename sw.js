self.addEventListener("install", event => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    await caches.delete("homestock-v1");
    await self.registration.unregister();
  })());
});