var cacheName = 'hello-pwa';
var filesToCache = [
  '/',
  '/index.ejs',
  'https://github.com/lathaani/js-file/blob/8366f6176f62a1fa9bd5050ba581657ba6578ab0/PWA/main.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
