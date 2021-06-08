// Tip: By changing the cache-version we can invalidate the old cache
// and let the browser load the new one.
const version = 1;
const cacheName = 'cache-' + version;
const offlinePageUrl = 'offline-page.html';
const urlsToCache = [
  'client.js',
  'style.css',
  offlinePageUrl
];

// ------------   INSTALL  ------------
self.addEventListener('install', event => {
    event.waitUntil(
      caches.open(cacheName)
      .then(function(cache){
        console.log(`opened ${cacheName}`);
        return cache.addAll(urlsToCache);
      }).catch(err => 
        console.error('Error while installing service worker', err))
      );
    });
  // Todo: cache the URLs contained in the urlsToCache array
  

// ------------   FETCH  ------------
self.addEventListener('fetch', event => {
  // We want to handle the case only if it's a navigation request
  // for an HTML page.
  if (event.request.mode === 'navigate') {
    event.respondWith(

      // Todo:
      // 1. fetch the target URL (event.request). If we
      // are offline, the fetch method will reject the promise.

      fetch(event.request).catch(()=>{
        return caches.match(offlinePageUrl);
      })

      );
      
      // 2. Catch the promise rejection (use the catch() method)
      // and return the offline page (offlinePageUrl) from the cache.
      
  }
  else {
    event.respondWith(
      // We provide the data from the cache, if available,
      // falling back to the network otherwise.
      caches.match(event.request)
      .then(function (response) {
        return response || fetch(event.request);
      })
    );
  }
});
