if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('service-worker.js').then(function(registration){
            console.log('ServiceWorker registration successful with  scope :', registration);
        }, function(err) {
            console.log('ServiceWorker Registration failed:', err);
        });
    });
    // Todo: Register the service worker here
    navigator.serviceWorker.ready.then(() => {
        console.log(
          'This web app is being served cache-first by a service '
        );
      });
}