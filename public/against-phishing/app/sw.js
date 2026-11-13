const CACHE = 'against-phishing-v1';
const SHELL = [
    './',
    './index.html',
    './app.css',
    './app.js',
    './manifest.webmanifest',
    './icons/icon-192.png',
    '../src/lib/analyzer.js',
    '../src/lib/brands.js',
    '../src/lib/domain.js',
    '../src/lib/links.js',
    '../src/lib/punycode.js',
    '../src/lib/rdap.js',
];

self.addEventListener('install', (event) => {
    event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))))
            .then(() => self.clients.claim()),
    );
});

self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);
    if (event.request.method !== 'GET' || url.origin !== self.location.origin) {
        return;
    }
    event.respondWith(
        fetch(event.request)
            .then((response) => {
                if (response.ok && !url.search) {
                    const copy = response.clone();
                    caches.open(CACHE).then((cache) => cache.put(event.request, copy));
                }
                return response;
            })
            .catch(() => caches.match(event.request, { ignoreSearch: true })),
    );
});
