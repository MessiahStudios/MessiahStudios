let deferredPrompt;

window.addEventListener('load', function() {
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;

    if (!isStandalone && navigator.onLine) {
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            deferredPrompt = e;

            const footerInstallButton = document.getElementById('footerInstallButton');
            footerInstallButton.style.display = 'block';

            footerInstallButton.addEventListener('click', async () => {
                if (deferredPrompt) {
                    deferredPrompt.prompt();
                    const { outcome } = await deferredPrompt.userChoice;
                    console.log(`User response to the install prompt: ${outcome}`);
                    deferredPrompt = null;
                    document.getElementById('footer').style.display = 'none'; // Hide footer after installation
                }
            });
        });
    } else {
        document.getElementById('footer').style.display = 'none'; // Hide the footer if installed
    }
});
