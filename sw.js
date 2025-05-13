self.addEventListener('install', event => {
    // wait until the service worker is installed
    event.waitUntil(
        // open cache
        caches.open('hello-world-pwa').then(cache => {
            return cache.addAll([
                './index.html',
                './style.css',
                './icons/manifest-icon-192.maskable.png',
            ]);
        })
    );
});

// add event listener for fetch
self.addEventListener('fetch', event => {

    // open cache
    caches.open('hello-world-pwa').then(cache => {
        return cache.match(event.request).then(response => {
            return response || fetch(event.request);
        });
    });
});