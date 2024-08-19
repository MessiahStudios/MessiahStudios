window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loadingScreen');
    const progressText = document.getElementById('progressText');
    loadingScreen.style.display = 'flex';

    const totalDuration = 180 * 1000; // 180 seconds in milliseconds
    const updateInterval = 1800;
    let currentPercentage = 0;

    // Function to update the percentage on the screen
    function updateProgress() {
        if (currentPercentage <= 100) {
            progressText.textContent = `Loading assets... ${currentPercentage}%`;
            currentPercentage++;
        } else {
            clearInterval(interval);
            hideLoadingScreen();
        }
    }

    // Function to hide the loading screen and initialize app.js if not already initialized
    function hideLoadingScreen() {
        loadingScreen.style.display = 'none';
        loadingScreen.remove();

        if (typeof wade === 'object' && typeof wade.init === 'function' && !wade.isInitialized) {
            wade.init('app.js');
            wade.isInitialized = true; // Mark that the app has been initialized
        }
    }

    const interval = setInterval(updateProgress, updateInterval);

    setTimeout(() => {
        clearInterval(interval);
        hideLoadingScreen();
    }, totalDuration);
});
