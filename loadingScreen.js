document.addEventListener('DOMContentLoaded', function() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/divine-gems-game/service-worker.js')
        .then(registration => {
            console.log('Service Worker registered with scope:', registration.scope);

            let serviceWorker = registration.installing;
            if (serviceWorker) {
                serviceWorker.addEventListener('statechange', () => {
                    if (serviceWorker.state === 'installed') {
                        document.getElementById('loadingScreen').style.display = 'none';
                        wade.init('app.js');
                    }
                });
            } else {
                document.getElementById('loadingScreen').style.display = 'none';
                wade.init('app.js');
            }
        })
        .catch(error => {
            console.error('Service Worker registration failed:', error);
            document.getElementById('loadingScreen').style.display = 'none';
            wade.init('app.js');
        });
    } else {
        document.getElementById('loadingScreen').style.display = 'none';
        wade.init('app.js');
    }
});
