self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('jsrun2-store').then(function(cache) {
     return cache.addAll([
       '/jsrun2/',
       '/jsrun2/index.html',
       '/jsrun2/index.js',
       '/jsrun2/images/pirate_PNG90.png'
     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});