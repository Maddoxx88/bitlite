import { Workbox } from "workbox-window";

let wb;

if ("serviceWorker" in navigator) {
  wb = new Workbox(`${process.env.BASE_URL}service-worker.js`);

  wb.addEventListener("controlling", () => {
    window.location.reload();
  });

  wb.register();

  var CACHE_NAME = 'my-offline-cache';
  var urlsToCache = [
  '/',
  '/css/app.fc24272a.css',
  '/js/app.918cd361.js',
  '/js/chunk-vendors.589bada7.js',
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      caches.match(event.request).then(function(response) {
        return response;
      }
    );
  );
});
} else {
  wb = null;
}

export default wb;