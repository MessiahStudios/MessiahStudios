document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loadingScreen');
    const progressText = document.getElementById('progressText');
    loadingScreen.style.display = 'flex';

    let currentPercentage = 0;
    const updateInterval = 50; // Increase the percentage every 50ms

    // Function to update the percentage on the screen
    function updateProgress() {
        if (currentPercentage < 100) {
            currentPercentage++;
            progressText.textContent = `Loading... ${currentPercentage}%`;
        } else {
            clearInterval(interval);
            hideLoadingScreen();
        }
    }

    // Function to hide the loading screen when the DOM is fully loaded
    function hideLoadingScreen() {
        loadingScreen.style.display = 'none';
        loadingScreen.remove();
    }

    // Start updating the progress
    const interval = setInterval(updateProgress, updateInterval);

    // Check if the DOM is fully loaded and stop the loading screen
    window.addEventListener('load', function() {
        currentPercentage = 100;
        hideLoadingScreen();
    });
});
