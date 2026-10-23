(function () {
  const character = {
    key: 'sanji',
    displayName: 'Vinsmoke Sanji',
    badge: 'One Piece',
    franchise: 'onepiece',
    universe: 'anime',
    category: 'anime',
    image: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&q=80&w=1000',
    subtitle: 'Chef Core • Smart Tailored Streetwear',
    homePage: 'anime.html',
    looks: {
      look_01: {
        lookLabel: 'Look 01',
        title: 'Chef Core Smart Tailored',
        gender: 'male',
        category: 'classic',
        mannequinImg: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&q=80&w=1000',
        items: [
          { name: 'Tailored Black Shirt', price: '₹1,199', store: 'AJIO', link: 'https://example.com', altLink: 'https://example.com' },
          { name: 'Slim Formal Trousers', price: '₹1,399', store: 'MYNTRA', link: 'https://example.com', altLink: 'https://example.com' },
          { name: 'Leather Slip Ons', price: '₹1,499', store: 'SAVANA', link: 'https://example.com', altLink: 'https://example.com' }
        ]
      }
    }
  };

  if (window.registerCategoryData) {
    window.registerCategoryData('anime', { sanji: character });
    window.ANIME_LOOKBOOKS = window.ANIME_LOOKBOOKS || {};
    window.ANIME_LOOKBOOKS.sanji = character;
  }
})();
