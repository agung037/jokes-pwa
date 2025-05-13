// Menambahkan event listener untuk proses instalasi service worker
self.addEventListener('install', event => {
    // Tunggu hingga service worker selesai diinstal
    event.waitUntil(
        // Membuka cache dengan nama 'hello-world-pwa'
        caches.open('hello-world-pwa').then(cache => {
            // Menambahkan file-file yang akan disimpan di cache
            return cache.addAll([
                './index.html', // File HTML utama aplikasi
                './style.css', // File CSS untuk styling aplikasi
                './icons/manifest-icon-192.maskable.png', // Ikon aplikasi
            ]);
        })
    );
});

// Menambahkan event listener untuk menangani permintaan jaringan (fetch)
self.addEventListener('fetch', event => {
    // Membuka cache dengan nama 'hello-world-pwa'
    caches.open('hello-world-pwa').then(cache => {
        // Mencocokkan permintaan dengan data yang ada di cache
        return cache.match(event.request).then(response => {
            // Jika data ditemukan di cache, gunakan data tersebut
            // Jika tidak, lakukan fetch ke jaringan
            return response || fetch(event.request);
        });
    });
});