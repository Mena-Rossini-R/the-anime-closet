(function () {
  const character = {
    key: 'racheal',
    displayName: 'Rachel Green',
    badge: 'Friends',
    series: 'friends',
    universe: 'shows',
    category: 'shows',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1000',
    subtitle: '90s New York coffeehouse elegance',
    homePage: 'shows.html',
    looks: {
      look_01: {
        lookLabel: 'Look 01',
        title: 'Friends Coffee Edit',
        gender: 'female',
        category: 'classic',
        mannequinImg: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1000',
        items: [
          { name: 'Soft Knit Polo', price: '₹1,099', store: 'AJIO', link: 'https://example.com', altLink: 'https://example.com' },
          { name: 'Pleated Mini Skirt', price: '₹1,299', store: 'MYNTRA', link: 'https://example.com', altLink: 'https://example.com' },
          { name: 'Leather Sling Bag', price: '₹1,699', store: 'SAVANA', link: 'https://example.com', altLink: 'https://example.com' }
        ]
      }
    }
  };

  if (window.registerCategoryData) {
    window.registerCategoryData('shows', { racheal: character });
    window.SHOWS_LOOKBOOKS = window.SHOWS_LOOKBOOKS || {};
    window.SHOWS_LOOKBOOKS.racheal = character;
  }
})();
