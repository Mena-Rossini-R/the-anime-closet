(function () {
  const catalog = {
    pages: {
      anime: {
        key: 'anime',
        title: 'Anime Lookbooks',
        subtitle: 'Curated looks inspired by anime icons and everyday hero energy.',
        filterLabel: 'Universe',
        filterOptions: [
          { value: 'all', label: 'All Compartments' },
          { value: 'onepiece', label: 'One Piece' },
          { value: 'naruto', label: 'Naruto' },
          { value: 'jjk', label: 'Jujutsu Kaisen' }
        ],
        gridId: 'anime-grid',
        characterKeys: []
      },
      korean: {
        key: 'korean',
        title: 'Korean Lookbooks',
        subtitle: 'Streetwear, K-pop energy, and polished K-drama layering.',
        filterLabel: 'Category',
        filterOptions: [
          { value: 'all', label: 'All Categories' },
          { value: 'boybands', label: 'Boybands' },
          { value: 'girlbands', label: 'Girlbands' },
          { value: 'series', label: 'K-Dramas' }
        ],
        gridId: 'korean-grid',
        characterKeys: []
      },
      shows: {
        key: 'shows',
        title: 'Shows & Series',
        subtitle: 'Character-inspired style pulled from iconic TV moments.',
        filterLabel: 'Series',
        filterOptions: [
          { value: 'all', label: 'All Series' },
          { value: 'friends', label: 'Friends' },
          { value: 'euphoria', label: 'Euphoria' },
          { value: 'succession', label: 'Succession' }
        ],
        gridId: 'shows-grid',
        characterKeys: []
      }
    },
    characters: {}
  };

  function registerCategoryData(category, characters) {
    if (!category || !characters || typeof characters !== 'object') return;

    Object.entries(characters).forEach(([key, character]) => {
      const normalized = { ...(character || {}) };
      normalized.key = normalized.key || key;
      normalized.category = category;
      normalized.homePage = normalized.homePage || `${category}.html`;
      normalized.displayName = normalized.displayName || normalized.characterName || normalized.key;
      normalized.badge = normalized.badge || normalized.anime || normalized.group || normalized.series || 'Character';
      normalized.looks = normalized.looks || {};
      catalog.characters[normalized.key] = normalized;
    });

    if (catalog.pages[category]) {
      catalog.pages[category].characterKeys = Object.keys(characters);
    }
  }

  window.registerCategoryData = registerCategoryData;
  window.THE_OUTFITS_DATA = catalog;
  window.ANIME_LOOKBOOKS = {};
})();
