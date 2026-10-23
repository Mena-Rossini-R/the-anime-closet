(function () {
  const character = {
    key: 'blackpink',
    displayName: 'Blackpink',
    badge: 'Girlbands',
    group: 'girlbands',
    universe: 'korean',
    category: 'korean',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1000',
    subtitle: 'Glossy glam with power dressing energy',
    homePage: 'korean.html',
    looks: {
      look_01: {
        lookLabel: 'Look 01',
        title: 'Glossy Power Edit',
        gender: 'female',
        category: 'fashion',
        mannequinImg: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1000',
        items: [
          { name: 'Gloss Finish Statement Set', price: '₹2,399', store: 'AJIO', link: 'https://example.com', altLink: 'https://example.com' },
          { name: 'Structured Mini Bag', price: '₹1,299', store: 'MYNTRA', link: 'https://example.com', altLink: 'https://example.com' }
        ]
      }
    }
  };

  if (window.registerCategoryData) {
    window.registerCategoryData('korean', { blackpink: character });
    window.KOREAN_LOOKBOOKS = window.KOREAN_LOOKBOOKS || {};
    window.KOREAN_LOOKBOOKS.blackpink = character;
  }
})();
