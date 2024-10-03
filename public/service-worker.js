self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('forex-pwa-cache').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/src/styles.css',
                '/src/app.js',
                '/src/forexAPI.js'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
