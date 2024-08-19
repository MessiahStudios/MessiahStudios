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

    // Function to hide the loading screen without initiating app.js
    function hideLoadingScreen() {
        loadingScreen.style.display = 'none';
        loadingScreen.remove();
    }

    const interval = setInterval(updateProgress, updateInterval);

    // Ensure that the loading screen is hidden once the DOM is fully loaded
    document.addEventListener('DOMContentLoaded', () => {
        clearInterval(interval);
        hideLoadingScreen();
    });

    // As a fallback, hide the loading screen after the maximum duration
    setTimeout(() => {
        clearInterval(interval);
        hideLoadingScreen();
    }, totalDuration);
});
