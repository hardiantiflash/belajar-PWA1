self.addEventListener('insatall', function(event){
	console.log('sw nya lagi nginstall . . .');
	event.waitUntil(
			caches.open('olegesrek')
				.then(function(cache) {
					cache.addAll([
							'/',
							'index.html',
							'/src/css/app.css',
							'/src/js/app.js'
						])
				})
		);
	return self.clients.claim();
});

self.addEventListener('activate', function(event){
	console.log('sw nya lagi aktifin . . .');
	return self.clients.claim();
});

self.addEventListener('fetch', function(event){
	console.log('sw nya lagi fetching . . .');
	event.responWidth(fetch(event.request));
});

