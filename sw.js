
const CACHE = 'sc-v2';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  'https://code.jquery.com/jquery-3.7.1.min.js'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k!==CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', event => {
  const req = event.request;
  event.respondWith(
    caches.match(req).then(cached => cached || fetch(req).then(resp => {
      if(req.method === 'GET' && resp.status === 200 && !req.url.startsWith('chrome-extension')){
        const clone = resp.clone();
        caches.open(CACHE).then(c => c.put(req, clone));
      }
      return resp;
    }).catch(() => caches.match('./index.html')))
  );
});
