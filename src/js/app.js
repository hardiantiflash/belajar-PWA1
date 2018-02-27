var test;

if ('serviceWorker' in navigator) {
	navigator.serviceWorker
			.register('/sw.js')
			.then(function (){
				console.log('yey! alhamdulilah service worker udah teregister')
			});

}

window.addEventListener('beforeinsatallprompt', (evfunctionent){
	console.log(' wkwkwk ngga bisa di install =__= ');
		event.preventDefault();
		test = event;
		return = false;

});