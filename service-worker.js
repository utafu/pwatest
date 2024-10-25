self.addEventListener('install', function(event) {
  console.log('Service Worker installing.');
  // キャッシュするファイルを指定
  event.waitUntil(
    caches.open('quote-generator-cache').then(function(cache) {
      return cache.addAll([
        './index.html',
        './styles.css',
        './script.js',
        './icon.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  console.log('Fetching:', event.request.url);
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
