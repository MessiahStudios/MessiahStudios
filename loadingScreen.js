document.addEventListener('DOMContentLoaded', function() {
    // Show the loading screen
    const loadingScreen = document.getElementById('loadingScreen');
    const progressText = document.getElementById('progressText');
    loadingScreen.style.display = 'flex';

    // Set the total time for the countdown (3 minutes = 180 seconds)
    const totalDuration = 180 * 1000; // 180 seconds in milliseconds
    const updateInterval = 1800; // Update every 1.8 seconds for a smoother transition
    let currentPercentage = 0;

    // Function to update the percentage on the screen
    function updateProgress() {
        if (currentPercentage <= 100) {
            progressText.textContent = `Loading assets... ${currentPercentage}%`;
            currentPercentage++;
        } else {
            clearInterval(interval);
            loadingScreen.style.display = 'none';
            wade.init('app.js'); // Initialize the game after loading is complete
        }
    }

    // Start updating the progress
    const interval = setInterval(updateProgress, updateInterval);

    // Ensure that the game starts after the full duration, even if something goes wrong with the interval
    setTimeout(() => {
        clearInterval(interval);
        loadingScreen.style.display = 'none';
        wade.init('app.js');
    }, totalDuration);
});