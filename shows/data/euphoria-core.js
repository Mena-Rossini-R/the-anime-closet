(function () {
  const character = {
    key: 'euphoria-core',
    displayName: 'Euphoria Core',
    badge: 'Euphoria',
    series: 'euphoria',
    universe: 'shows',
    category: 'shows',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1000',
    subtitle: 'Subculture textures with a bold edge',
    homePage: 'shows.html',
    looks: {
      look_01: {
        lookLabel: 'Look 01',
        title: 'Subculture Layered',
        gender: 'female',
        category: 'fashion',
        mannequinImg: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1000',
        items: [
          { name: 'Layered T-Shirt Set', price: '₹1,499', store: 'MYNTRA', link: 'https://example.com', altLink: 'https://example.com' },
          { name: 'Chunky Leather Jacket', price: '₹1,999', store: 'AJIO', link: 'https://example.com', altLink: 'https://example.com' },
          { name: 'Slim Cargo Trousers', price: '₹1,399', store: 'SAVANA', link: 'https://example.com', altLink: 'https://example.com' }
        ]
      }
    }
  };

  if (window.registerCategoryData) {
    window.registerCategoryData('shows', { 'euphoria-core': character });
    window.SHOWS_LOOKBOOKS = window.SHOWS_LOOKBOOKS || {};
    window.SHOWS_LOOKBOOKS['euphoria-core'] = character;
  }
})();
