(function () {
  const character = {
    key: 'bts',
    displayName: 'BTS Core',
    badge: 'Boybands',
    group: 'boybands',
    universe: 'korean',
    category: 'korean',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1000',
    subtitle: 'Streetwear & elevated casual layers',
    homePage: 'korean.html',
    looks: {
      look_01: {
        lookLabel: 'Look 01',
        title: 'Airport Streetwear',
        gender: 'male',
        category: 'classic',
        mannequinImg: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1000',
        items: [
          { name: 'Oversized Bomber', price: '₹1,799', store: 'MYNTRA', link: 'https://example.com', altLink: 'https://example.com' },
          { name: 'Track Pants', price: '₹1,099', store: 'AJIO', link: 'https://example.com', altLink: 'https://example.com' }
        ]
      }
    }
  };

  if (window.registerCategoryData) {
    window.registerCategoryData('korean', { bts: character });
    window.KOREAN_LOOKBOOKS = window.KOREAN_LOOKBOOKS || {};
    window.KOREAN_LOOKBOOKS.bts = character;
  }
})();
