// Cache version
const CACHE_NAME = 'divine-gems-v1';

// Files to cache
const FILES_TO_CACHE = [
  '/divine-gems-game/',
  '/divine-gems-game/index.html',
  '/divine-gems-game/style.css',
  '/divine-gems-game/bar.js',
  '/divine-gems-game/counter.js',
  '/divine-gems-game/match3.js',
  '/divine-gems-game/jquery-1.11.1.min.js',
  '/divine-gems-game/wade.ifx_1.0.js',
  '/divine-gems-game/wade.particles_1.0.1.js',
  '/divine-gems-game/wade_1.5.js',
  // Include all the fonts
  '/divine-gems-game/fonts/Akashi.eot',
  '/divine-gems-game/fonts/Akashi.svg',
  '/divine-gems-game/fonts/Akashi.ttf',
  '/divine-gems-game/fonts/Akashi.woff',
  '/divine-gems-game/fonts/MonospaceTypewriter.eot',
  '/divine-gems-game/fonts/MonospaceTypewriter.svg',
  '/divine-gems-game/fonts/MonospaceTypewriter.ttf',
  '/divine-gems-game/fonts/MonospaceTypewriter.woff',
  // Add all images
  '/divine-gems-game/images/Thumbs.db',
  '/divine-gems-game/images/background.png',
  '/divine-gems-game/images/backgroundShareBox.png',
  '/divine-gems-game/images/barTime.png',
  '/divine-gems-game/images/bigBoom.png',
  '/divine-gems-game/images/buttonBack.png',
  '/divine-gems-game/images/buttonCredit.png',
  '/divine-gems-game/images/buttonPause.png',
  '/divine-gems-game/images/buttonPlay.png',
  '/divine-gems-game/images/buttonSoundOff.png',
  '/divine-gems-game/images/buttonSoundOn.png',
  '/divine-gems-game/images/buttonUnpause.png',
  '/divine-gems-game/images/buttonsMuteOff.png',
  '/divine-gems-game/images/buttonsMuteOn.png',
  '/divine-gems-game/images/christian_arabic_symbol_glow.png',
  '/divine-gems-game/images/christian_arabic_symbol_new.png',
  '/divine-gems-game/images/cross_object_glow.png',
  '/divine-gems-game/images/cross_object_new.png',
  '/divine-gems-game/images/crown_object_glow.png',
  '/divine-gems-game/images/crown_object_new.png',
  '/divine-gems-game/images/dgTitle.png',
  '/divine-gems-game/images/divineGemsTitle.png',
  '/divine-gems-game/images/divineGemsTitle_padded_192x192.png',
  '/divine-gems-game/images/divineGemsTitle_padded_512x512.png',
  '/divine-gems-game/images/fbSend.png',
  '/divine-gems-game/images/fb_R.png',
  '/divine-gems-game/images/fish_symbol_glow.png',
  '/divine-gems-game/images/fish_symbol_new.png',
  '/divine-gems-game/images/fiveEffect.png',
  '/divine-gems-game/images/fiveEffect2.png',
  '/divine-gems-game/images/flash.png',
  '/divine-gems-game/images/gp_R.png',
  '/divine-gems-game/images/imdb_R.png',
  'divine-gems-game/images/installButton.png',
  '/divine-gems-game/images/inst_R.png',
  '/divine-gems-game/images/li_R.png',
  '/divine-gems-game/images/markerTime.png',
  '/divine-gems-game/images/menuBackground.png',
  '/divine-gems-game/images/nails_object_glow.png',
  '/divine-gems-game/images/nails_object_new.png',
  '/divine-gems-game/images/potionBar.png',
  '/divine-gems-game/images/scoreArea.png',
  '/divine-gems-game/images/scoreArea.xcf',
  '/divine-gems-game/images/selected.png',
  '/divine-gems-game/images/shatter.png',
  '/divine-gems-game/images/special4.png',
  '/divine-gems-game/images/special5-lion.png',
  '/divine-gems-game/images/specialEffect1.png',
  '/divine-gems-game/images/t_R.png',
  '/divine-gems-game/images/top.png',
  '/divine-gems-game/images/topWithScore.png',
  '/divine-gems-game/images/trinity_object_glow.png',
  '/divine-gems-game/images/trinity_object_new.png',
  '/divine-gems-game/images/vlog_R.png',
  '/divine-gems-game/images/wadePowered.png',
  '/divine-gems-game/images/yt_R.png',
  // Add all sound files
  '/divine-gems-game/sounds/Explosion3.aac',
  '/divine-gems-game/sounds/Explosion3.ogg',
  '/divine-gems-game/sounds/PowerUp8.aac',
  '/divine-gems-game/sounds/PowerUp8.ogg',
  '/divine-gems-game/sounds/Walperion-Music-Ode-to-Victory.aac',
  '/divine-gems-game/sounds/Walperion-Music-Ode-to-Victory.ogg',
  '/divine-gems-game/sounds/fiveSound-lion.aac',
  '/divine-gems-game/sounds/fiveSound-lion.ogg',
  // Add additional files as necessary
];

// Install event - Caching static assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting(); // Activate the service worker immediately after installation
});

// Activate event - Cleanup old caches
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(keyList =>
      Promise.all(
        keyList.map(key => {
          if (!cacheWhitelist.includes(key)) {
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim(); // Take control of all clients immediately after activation
});

// Fetch event - Serve cached content when offline, else fetch from network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

// Listen for skipWaiting message from the client to update only when the user requests it
self.addEventListener('message', event => {
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
  }
});
