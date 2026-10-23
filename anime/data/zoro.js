(function () {
  const character = {
    key: 'zoro',
    displayName: 'Roronoa Zoro',
    badge: 'One Piece',
    franchise: 'onepiece',
    universe: 'anime',
    category: 'anime',
    image: '../assets/zoro/zoro_1.png',
    subtitle: 'Three-Sword Style • Dark Academia Layering',
    homePage: 'anime.html',
    looks: {
      look_01: {
        lookLabel: 'Look 01',
        title: 'Sage Green Overshirt Fit',
        gender: 'male',
        category: 'classic',
        mannequinImg: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1000',
        items: [
          { name: 'Sage Green Cotton Overshirt', price: '₹899', store: 'MYNTRA', link: 'https://example.com', altLink: 'https://example.com' },
          { name: 'Black Cargo Trousers', price: '₹1,299', store: 'AJIO', link: 'https://example.com', altLink: 'https://example.com' },
          { name: 'Leather Utility Belt', price: '₹899', store: 'SAVANA', link: 'https://example.com', altLink: 'https://example.com' }
        ]
      },
      look_02: {
        lookLabel: 'Look 02',
        title: 'Black Utility Layer',
        gender: 'male',
        category: 'classic',
        mannequinImg: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1000',
        items: [
          { name: 'Black Technical Bomber', price: '₹1,499', store: 'MYNTRA', link: 'https://example.com', altLink: 'https://example.com' },
          { name: 'Structured Combat Trousers', price: '₹1,199', store: 'AJIO', link: 'https://example.com', altLink: 'https://example.com' },
          { name: 'Minimal Leather Boots', price: '₹2,099', store: 'SAVANA', link: 'https://example.com', altLink: 'https://example.com' }
        ]
      }
    }
  };

  if (window.registerCategoryData) {
    window.registerCategoryData('anime', { zoro: character });
    window.ANIME_LOOKBOOKS = window.ANIME_LOOKBOOKS || {};
    window.ANIME_LOOKBOOKS.zoro = character;
  }
})();
