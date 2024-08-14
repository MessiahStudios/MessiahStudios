self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('divine-gems-v1').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/style.css',
        '/bar.js',
        '/counter.js',
        '/match3.js',
	'jquery-1.11.1.min.js',
        '/wade.ifx_1.0.js',
        '/wade.particles_1.0.1.js',
        '/wade_1.5.js',
        // Include all the fonts
        'fonts/Akashi.eot',
        'fonts/Akashi.svg',
        'fonts/Akashi.ttf',
        'fonts/Akashi.woff',
        'fonts/MonospaceTypewriter.eot',
        'fonts/MonospaceTypewriter.svg',
        'fonts/MonospaceTypewriter.ttf',
        'fonts/MonospaceTypewriter.woff',
        // Add all images
        '/images/Thumbs.db',
        '/images/background.png',
        '/images/backgroundShareBox.png',
        '/images/barTime.png',
        '/images/bigBoom.png',
        '/images/buttonBack.png',
        '/images/buttonCredit.png',
        '/images/buttonPause.png',
        '/images/buttonPlay.png',
        '/images/buttonSoundOff.png',
        '/images/buttonSoundOn.png',
        '/images/buttonUnpause.png',
        '/images/buttonsMuteOff.png',
        '/images/buttonsMuteOn.png',
        '/images/christian_arabic_symbol_glow.png',
        '/images/christian_arabic_symbol_new.png',
        '/images/cross_object_glow.png',
        '/images/cross_object_new.png',
        '/images/crown_object_glow.png',
        '/images/crown_object_new.png',
        '/images/dgTitle.png',
        '/images/divineGemsTitle.png',
        '/images/divineGemsTitle_padded_192x192.png',
        '/images/divineGemsTitle_padded_512x512.png',
        '/images/fbSend.png',
        '/images/fb_R.png',
        '/images/fish_symbol_glow.png',
        '/images/fish_symbol_new.png',
        '/images/fiveEffect.png',
        '/images/fiveEffect2.png',
        '/images/flash.png',
        '/images/gp_R.png',
        '/images/imdb_R.png',
        '/images/inst_R.png',
        '/images/li_R.png',
        '/images/markerTime.png',
        '/images/menuBackground.png',
        '/images/nails_object_glow.png',
        '/images/nails_object_new.png',
        '/images/potionBar.png',
        '/images/scoreArea.png',
        '/images/scoreArea.xcf',
        '/images/selected.png',
        '/images/shatter.png',
        '/images/special4.png',
        '/images/special5-lion.png',
        '/images/specialEffect1.png',
        '/images/t_R.png',
        '/images/top.png',
        '/images/topWithScore.png',
        '/images/trinity_object_glow.png',
        '/images/trinity_object_new.png',
        '/images/vlog_R.png',
        '/images/wadePowered.png',
        '/images/yt_R.png',
        // Add all sound files
        '/sounds/Explosion3.aac',
        '/sounds/Explosion3.ogg',
        '/sounds/PowerUp8.aac',
        '/sounds/PowerUp8.ogg',
        '/sounds/Walperion-Music-Ode-to-Victory.aac',
        '/sounds/Walperion-Music-Ode-to-Victory.ogg',
        '/sounds/fiveSound-lion.aac',
        '/sounds/fiveSound-lion.ogg',
        // Add additional files as necessary
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
