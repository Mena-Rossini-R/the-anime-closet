(function () {
  const character = {
    key: 'luffy',
    displayName: 'Monkey D. Luffy',
    badge: 'One Piece',
    franchise: 'onepiece',
    universe: 'anime',
    category: 'anime',
    image: '../assets/luffy/luffy.jpg',
    subtitle: 'Future Pirate King • Everyday Character Energy',
    homePage: 'anime.html',
    looks: {
      classic_men: {
        lookLabel: 'Look 01',
        title: 'Classic Red Fit',
        gender: 'male',
        category: 'classic',
        mannequinImg: '../assets/luffy/luffy_classic_men.png',
        items: [
          { name: 'Red Cotton Cuban Collar Shirt', price: '₹699', store: 'MYNTRA', link: 'https://example.com', altLink: 'https://example.com' },
          { name: 'White Ribbed Cotton Tank Vest', price: '₹399', store: 'MYNTRA', link: 'https://example.com', altLink: 'https://example.com' },
          { name: 'Super Baggy Denim Bermuda Shorts', price: '₹999', store: 'MYNTRA', link: 'https://example.com', altLink: 'https://example.com' }
        ]
      },
      classic_women: {
        lookLabel: 'Look 02',
        title: 'Classic Red Tie-Front Fit',
        gender: 'female',
        category: 'classic',
        mannequinImg: '../assets/luffy/luffy_classic_women.png',
        items: [
          { name: 'Cropped Red Tie-Front Blouse', price: '₹699', store: 'SAVANA', link: 'https://example.com', altLink: 'https://example.com' },
          { name: 'White Ribbed Cami Tank', price: '₹349', store: 'MYNTRA', link: 'https://example.com', altLink: 'https://example.com' },
          { name: 'Soft Cargo Mini Skirt', price: '₹799', store: 'AJIO', link: 'https://example.com', altLink: 'https://example.com' }
        ]
      },
      fashion_men: {
        lookLabel: 'Look 03',
        title: 'Street Hero Layering',
        gender: 'male',
        category: 'fashion',
        mannequinImg: '../assets/luffy/luffy_fashion_men.png',
        items: [
          { name: 'Oversized Indigo Utility Jacket', price: '₹1,399', store: 'MYNTRA', link: 'https://example.com', altLink: 'https://example.com' },
          { name: 'Graphic Rib Tank', price: '₹499', store: 'AJIO', link: 'https://example.com', altLink: 'https://example.com' },
          { name: 'Relaxed Cargo Trousers', price: '₹1,099', store: 'MYNTRA', link: 'https://example.com', altLink: 'https://example.com' }
        ]
      },
      fashion_women: {
        lookLabel: 'Look 04',
        title: 'Sunset Street Edit',
        gender: 'female',
        category: 'fashion',
        mannequinImg: '../assets/luffy/luffy_fashion_women.png',
        items: [
          { name: 'Statement Oversized Bomber', price: '₹1,599', store: 'AJIO', link: 'https://example.com', altLink: 'https://example.com' },
          { name: 'Wide Leg Trousers', price: '₹1,199', store: 'MYNTRA', link: 'https://example.com', altLink: 'https://example.com' },
          { name: 'Layered Sports Bra Set', price: '₹899', store: 'SAVANA', link: 'https://example.com', altLink: 'https://example.com' }
        ]
      },
      sporty_men: {
        lookLabel: 'Look 05',
        title: 'Adventure Ready',
        gender: 'male',
        category: 'sporty',
        mannequinImg: '../assets/luffy/luffy_sporty_men.png',
        items: [
          { name: 'Technical Track Hoodie', price: '₹1,299', store: 'MYNTRA', link: 'https://example.com', altLink: 'https://example.com' },
          { name: 'Geometry Print Shorts', price: '₹899', store: 'AJIO', link: 'https://example.com', altLink: 'https://example.com' },
          { name: 'Lightweight Running Sneakers', price: '₹2,199', store: 'SAVANA', link: 'https://example.com', altLink: 'https://example.com' }
        ]
      },
      sporty_women: {
        lookLabel: 'Look 06',
        title: 'Coastal Power Sport',
        gender: 'female',
        category: 'sporty',
        mannequinImg: '../assets/luffy/luffy_sporty_women.png',
        items: [
          { name: 'Color Block Crop Hoodie', price: '₹1,199', store: 'MYNTRA', link: 'https://example.com', altLink: 'https://example.com' },
          { name: 'Flow Fit Running Tights', price: '₹999', store: 'AJIO', link: 'https://example.com', altLink: 'https://example.com' },
          { name: 'Low Profile Trainers', price: '₹1,899', store: 'SAVANA', link: 'https://example.com', altLink: 'https://example.com' }
        ]
      },
      vacation_men: {
        lookLabel: 'Look 07',
        title: 'Island Escape',
        gender: 'male',
        category: 'vacation',
        mannequinImg: '../assets/luffy/luffy_vacation_men.png',
        items: [
          { name: 'Open Knit Beach Shirt', price: '₹899', store: 'AJIO', link: 'https://example.com', altLink: 'https://example.com' },
          { name: 'Boardwalk Drawstring Shorts', price: '₹799', store: 'MYNTRA', link: 'https://example.com', altLink: 'https://example.com' },
          { name: 'Slip On Sandals', price: '₹699', store: 'SAVANA', link: 'https://example.com', altLink: 'https://example.com' }
        ]
      },
      vacation_women: {
        lookLabel: 'Look 08',
        title: 'Sunny Island Layers',
        gender: 'female',
        category: 'vacation',
        mannequinImg: '../assets/luffy/luffy_vacation_women.png',
        items: [
          { name: 'Lightweight Shirt Dress', price: '₹1,299', store: 'MYNTRA', link: 'https://example.com', altLink: 'https://example.com' },
          { name: 'Loose Beach Shorts', price: '₹749', store: 'AJIO', link: 'https://example.com', altLink: 'https://example.com' },
          { name: 'Minimal Leather Slides', price: '₹899', store: 'SAVANA', link: 'https://example.com', altLink: 'https://example.com' }
        ]
      },
      night_out_men: {
        lookLabel: 'Look 09',
        title: 'Night Market Swagger',
        gender: 'male',
        category: 'night',
        mannequinImg: '../assets/luffy/luffy_fashion_men.png',
        items: [
          { name: 'Black Satin Overshirt', price: '₹1,699', store: 'AJIO', link: 'https://example.com', altLink: 'https://example.com' },
          { name: 'Relaxed Chino Pants', price: '₹1,099', store: 'MYNTRA', link: 'https://example.com', altLink: 'https://example.com' },
          { name: 'Chunky Leather Sneakers', price: '₹2,399', store: 'SAVANA', link: 'https://example.com', altLink: 'https://example.com' }
        ]
      },
      night_out_women: {
        lookLabel: 'Look 10',
        title: 'After Dark Confidence',
        gender: 'female',
        category: 'night',
        mannequinImg: '../assets/luffy/luffy_fashion_women.png',
        items: [
          { name: 'Statement Satin Crop Set', price: '₹1,799', store: 'AJIO', link: 'https://example.com', altLink: 'https://example.com' },
          { name: 'Layered Gold Accent Necklace', price: '₹899', store: 'SAVANA', link: 'https://example.com', altLink: 'https://example.com' },
          { name: 'Mini Crossbody Bag', price: '₹1,199', store: 'MYNTRA', link: 'https://example.com', altLink: 'https://example.com' }
        ]
      }
    }
  };

  if (window.registerCategoryData) {
    window.registerCategoryData('anime', { luffy: character });
    window.ANIME_LOOKBOOKS = window.ANIME_LOOKBOOKS || {};
    window.ANIME_LOOKBOOKS.luffy = character;
  }
})();
