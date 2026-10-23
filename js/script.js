(function () {
  const pageConfig = {
    anime: {
      gridId: 'anime-grid',
      filterKey: 'franchise'
    },
    korean: {
      gridId: 'korean-grid',
      filterKey: 'group'
    },
    shows: {
      gridId: 'shows-grid',
      filterKey: 'series'
    }
  };

  function getCurrentPageKey() {
    const path = window.location.pathname.toLowerCase();
    if (path.includes('anime')) return 'anime';
    if (path.includes('korean')) return 'korean';
    if (path.includes('shows')) return 'shows';
    return null;
  }

  function getCharacterMap() {
    return (window.THE_OUTFITS_DATA && window.THE_OUTFITS_DATA.characters) || {};
  }

  function setActiveNavLink() {
    const pageKey = getCurrentPageKey();
    document.querySelectorAll('nav a[href]').forEach((link) => {
      const href = (link.getAttribute('href') || '').toLowerCase();
      const isCurrent = pageKey ? href.includes(`${pageKey}.html`) : href.endsWith('index.html');

      link.classList.toggle('text-tangerine', isCurrent);
      link.classList.toggle('font-bold', isCurrent);
      if (!isCurrent) {
        link.classList.remove('text-tangerine');
        link.classList.remove('font-bold');
      }
    });
  }

  function getCharactersForPage(pageKey) {
    const characterMap = getCharacterMap();
    return Object.values(characterMap).filter((character) => character.category === pageKey);
  }

  function buildCardMarkup(character, pageKey) {
    const key = character.key || 'character';
    const href = `character.html?char=${encodeURIComponent(key)}&category=${encodeURIComponent(pageKey)}`;
    const image = character.image || 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&q=80&w=1000';
    const badge = character.badge || character.displayName || key;
    const title = character.displayName || character.key || key;
    return `
      <a
        href="${href}"
        class="card-container col-span-1 group block bg-cardLight dark:bg-cardObsidian border-2 border-petrol dark:border-zinc-700 rounded-2xl overflow-hidden shadow-[4px_4px_0px_0px_#2D2522] dark:shadow-[4px_4px_0px_0px_#71717A] hover:-translate-y-1 transition-all flex flex-col justify-between"
        data-filter="${character[pageConfig[pageKey].filterKey] || 'all'}"
      >
        <div class="relative w-full aspect-square bg-white dark:bg-zinc-950 overflow-hidden flex items-center justify-center p-3 border-b-2 border-petrol dark:border-zinc-700">
          <img src="${image}" alt="${title}" class="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" />
          <div class="absolute top-2 left-2 bg-[#2D2522] text-[#F7F4EE] px-2 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase border border-petrol shadow-sm z-10">
            ${badge}
          </div>
        </div>
        <div class="p-3 flex items-center justify-between bg-cardLight dark:bg-cardObsidian group-hover:bg-petrol group-hover:text-taupeCream transition-colors duration-300">
          <div>
            <h2 class="text-sm font-bold text-petrol dark:text-zinc-100 group-hover:text-taupeCream transition-colors font-punk">${title}</h2>
          </div>
          <span class="text-[10px] font-mono font-bold uppercase text-tangerine group-hover:text-taupeCream">Open ↗</span>
        </div>
      </a>
    `;
  }

  function renderCategoryPage(pageKey, filterValue = 'all') {
    const config = pageConfig[pageKey];
    if (!config) return;

    const container = document.getElementById(config.gridId);
    if (!container) return;

    const characters = getCharactersForPage(pageKey);
    const visible = filterValue === 'all'
      ? characters
      : characters.filter((character) => (character[config.filterKey] || 'all') === filterValue);

    container.innerHTML = visible.map((character) => buildCardMarkup(character, pageKey)).join('');

    const select = document.getElementById(`${pageKey}-select`);
    if (select) select.value = filterValue;
  }

  function toggleMobileMenu(menuId = 'mobile-menu') {
    const menu = document.getElementById(menuId);
    if (menu) menu.classList.toggle('hidden');
  }

  window.toggleMobileMenu = toggleMobileMenu;
  window.filterAnime = function (value) { renderCategoryPage('anime', value || 'all'); };
  window.filterKorean = function (value) { renderCategoryPage('korean', value || 'all'); };
  window.filterShows = function (value) { renderCategoryPage('shows', value || 'all'); };

  document.addEventListener('DOMContentLoaded', function () {
    setActiveNavLink();

    const pageKey = getCurrentPageKey();
    if (pageKey && pageConfig[pageKey]) {
      renderCategoryPage(pageKey, 'all');
    }
  });
})();