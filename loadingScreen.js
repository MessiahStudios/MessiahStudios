document.addEventListener('DOMContentLoaded', function() {
    // Show the loading screen
    const loadingScreen = document.getElementById('loadingScreen');
    loadingScreen.style.display = 'flex';

    // Simulate loading process (e.g., loading assets, initializing game)
    const simulateLoading = new Promise(resolve => {
        setTimeout(resolve, 3000); // Simulate a 3-second loading time (adjust as necessary)
    });

    simulateLoading.then(() => {
        // Hide the loading screen once the game is ready
        loadingScreen.style.display = 'none';
        wade.init('app.js'); // Initialize the game
    }).catch(error => {
        console.error('Loading process failed:', error);
        loadingScreen.style.display = 'none';
        wade.init('app.js'); // Attempt to initialize the game even if loading fails
    });
});
