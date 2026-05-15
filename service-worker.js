const CACHE_NAME = "visitantes-pwa-v5";

const ASSETS = [
  "./",
  "./kiosk.html",
  "./index.html",
  "./manifest.json",
  "./service-worker.js"
];

// âœ… INSTALAR
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

// âœ… ACTIVAR
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME)
            .map(k => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

// âœ… FETCH
self.addEventListener("fetch", event => {
  // Solo GET
  if (event.request.method !== "GET") return;

  event.respondWith(
    fetch(event.request)
      .then(response => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, copy);
        });
        return response;
      })
      .catch(() =>
        caches.match(event.request)
      )
  );
});
