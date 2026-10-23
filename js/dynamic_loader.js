/* ================================================================= *
   THE OUTFITS - CHARACTER DETAIL PAGE CONTROLLER
   ================================================================ */

(function () {
  const state = {
    currentCharacterData: null,
    lookKeys: [],
    currentIndex: 0,
    currentFilter: 'all'
  };

  function normalizeGender(value) {
    const normalized = String(value || '').toLowerCase();
    if (['male', 'men', 'masculine'].includes(normalized)) return 'male';
    if (['female', 'women', 'feminine'].includes(normalized)) return 'female';
    return 'all';
  }

  function getCharacterMap() {
    return (window.THE_OUTFITS_DATA && window.THE_OUTFITS_DATA.characters) || {};
  }

  function getCharacterCycle(category) {
    const map = getCharacterMap();
    return Object.values(map).filter((character) => character.category === category);
  }

  function updateCategoryHomeLinks(category) {
    const links = [
      document.getElementById('top-back-btn'),
      document.getElementById('char-home-link')
    ];

    links.forEach((link) => {
      if (!link) return;
      link.href = `${category}.html`;
      link.title = `Go to ${category} page`;
    });
  }

  function setCharacterMeta(character) {
    const title = document.getElementById('character-title');
    const subtitle = document.getElementById('character-subtitle');

    if (title) title.textContent = character.displayName || character.key;
    if (subtitle) subtitle.textContent = character.subtitle || '';
  }

  function renderCatalogGrid() {
    const grid = document.getElementById('catalog-grid');
    const view = document.getElementById('catalog-view');
    const activeSection = document.getElementById('active-look-section');

    if (!grid || !state.currentCharacterData) return;
    if (view) view.classList.remove('hidden');
    if (activeSection) activeSection.classList.add('hidden');

    const looks = Object.entries(state.currentCharacterData.looks || {});
    const visibleLooks = looks.filter(([ , look ]) => {
      if (state.currentFilter === 'all') return true;
      return normalizeGender(look.gender) === state.currentFilter;
    });

    if (!visibleLooks.length) {
      grid.innerHTML = '<div class="col-span-full text-center py-10 font-mono text-xs text-petrol/70">No looks found for this filter.</div>';
      return;
    }

    grid.innerHTML = visibleLooks.map(([lookKey, look]) => {
      const item = (look.items && look.items[0]) || {};
      const price = item.price || '₹999';
      const image = look.mannequinImg || 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&q=80&w=1000';

      return `
        <div class="character-grid-card group block border-2 rounded-2xl overflow-hidden shadow-[4px_4px_0px_0px_#2D2522] dark:shadow-[4px_4px_0px_0px_#71717A] hover:-translate-y-1 transition-all flex flex-col justify-between cursor-pointer" onclick="window.openLookDetail('${lookKey}')">
          <div class="character-card-media relative w-full aspect-square overflow-hidden flex items-center justify-center p-3 border-b-2 border-petrol dark:border-zinc-700">
            <img src="${image}" alt="${look.title}" class="character-card-img absolute inset-0 w-full h-full group-hover:scale-105 transition-transform duration-700" />
            <div class="absolute top-2 left-2 bg-[#2D2522] text-[#F7F4EE] px-2 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase border border-petrol shadow-sm z-10">
              ${look.lookLabel || 'Look'}
            </div>
          </div>
          <div class="character-card-footer">
            <div class="character-card-copy">
              <h3 class="character-card-title">${look.title}</h3>
            </div>
            <div class="character-card-meta">
              <div class="character-card-price-row">
                <span class="character-card-price">${price}</span>
              </div>
              <div class="character-card-shop-row">
                <span class="character-card-shop">Shop <span aria-hidden="true">↗</span></span>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  function scrollToLookTitle() {
    const title = document.getElementById('active-look-title');
    if (!title) return;

    requestAnimationFrame(() => {
      const headerOffset = 110;
      const top = title.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  }

  function syncBackNavigationButtons() {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category') || 'anime';
    const charKey = params.get('char') || 'luffy';

    const topBackBtn = document.getElementById('top-back-btn');
    if (topBackBtn) {
      const hasLook = params.has('look');
      topBackBtn.href = hasLook ? `character.html?char=${charKey}&category=${category}` : `${category}.html`;
      topBackBtn.title = hasLook ? 'Back to character looks' : `Back to ${category}`;
    }

    const homeLink = document.getElementById('char-home-link');
    if (homeLink) {
      homeLink.href = `${category}.html`;
    }
  }

  function syncFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const requestedLook = params.get('look');

    if (requestedLook && state.currentCharacterData && state.currentCharacterData.looks && state.currentCharacterData.looks[requestedLook]) {
      openLookDetail(requestedLook, false);
      return;
    }

    syncBackNavigationButtons();
    renderCatalogGrid();
  }

  function openLookDetail(lookKey, shouldPushState = true) {
    if (!state.currentCharacterData || !state.currentCharacterData.looks[lookKey]) return;

    const params = new URLSearchParams(window.location.search);
    params.set('look', lookKey);

    const nextUrl = `${window.location.pathname}?${params.toString()}`;
    if (shouldPushState) {
      window.history.pushState({}, '', nextUrl);
    } else {
      window.history.replaceState({}, '', nextUrl);
    }

    const look = state.currentCharacterData.looks[lookKey];
    const tag = document.getElementById('active-look-tag');
    const title = document.getElementById('active-look-title');
    const img = document.getElementById('modal-model-img');
    const placeholder = document.getElementById('modal-placeholder');
    const container = document.getElementById('modal-look-display');

    if (tag) tag.textContent = `${look.lookLabel || 'Look'} • ${state.currentCharacterData.displayName || state.currentCharacterData.key}`;
    if (title) title.textContent = look.title || 'Look Title';

    const imageSource = look.mannequinImg || 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&q=80&w=1000';
    if (img) {
      img.src = imageSource;
      img.classList.remove('hidden');
    }
    if (placeholder) placeholder.classList.add('hidden');

    if (container) {
      container.innerHTML = (look.items || []).map((item) => `
        <div class="bg-cardLight dark:bg-cardObsidian border-2 border-petrol dark:border-zinc-700 p-4 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm hover:translate-x-1 transition-all duration-200">
          <div>
            <span class="text-[9px] uppercase font-extrabold tracking-widest px-2 py-0.5 rounded bg-taupeCream dark:bg-zinc-800 text-petrol dark:text-zinc-300 border border-petrol dark:border-zinc-700">${item.store || 'Store'}</span>
            <h4 class="text-xs sm:text-sm font-bold mt-1.5 text-petrol dark:text-white">${item.name}</h4>
            <p class="text-xs font-extrabold text-tangerine mt-0.5 font-mono">${item.price || '₹999'}</p>
          </div>
          <div class="flex items-center gap-2 w-full sm:w-auto justify-end flex-wrap">
            <a href="${item.link || '#'}" target="_blank" rel="noopener noreferrer" class="bg-tangerine hover:bg-petrol text-white px-3 py-2 rounded-lg text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 whitespace-nowrap shadow-sm border-2 border-petrol flex items-center justify-center gap-1">Buy ↗</a>
            <a href="${item.altLink || '#'}" target="_blank" rel="noopener noreferrer" class="bg-cardLight dark:bg-zinc-900 hover:bg-petrol hover:text-white text-petrol/80 dark:text-zinc-300 px-3 py-2 rounded-lg text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 whitespace-nowrap shadow-sm border-2 border-petrol">Find Similar Products</a>
          </div>
        </div>
      `).join('');
    }

    const view = document.getElementById('catalog-view');
    const activeSection = document.getElementById('active-look-section');
    if (view) view.classList.add('hidden');
    if (activeSection) activeSection.classList.remove('hidden');

    if (state.lookKeys.length) {
      const index = state.lookKeys.indexOf(lookKey);
      state.currentIndex = index >= 0 ? index : 0;
    }

    syncBackNavigationButtons();
    scrollToLookTitle();
  }

  function nextLook() {
    if (!state.lookKeys.length) return;
    state.currentIndex = (state.currentIndex + 1) % state.lookKeys.length;
    openLookDetail(state.lookKeys[state.currentIndex]);
  }

  function prevLook() {
    if (!state.lookKeys.length) return;
    state.currentIndex = (state.currentIndex - 1 + state.lookKeys.length) % state.lookKeys.length;
    openLookDetail(state.lookKeys[state.currentIndex]);
  }

  function closeActiveLook() {
    const params = new URLSearchParams(window.location.search);
    params.delete('look');
    window.history.replaceState({}, '', `${window.location.pathname}${params.toString() ? `?${params.toString()}` : ''}`);
    syncBackNavigationButtons();
    renderCatalogGrid();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function initializeCharacterNavigation() {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category') || 'anime';
    const charKey = params.get('char') || 'luffy';
    const cycle = getCharacterCycle(category);
    const currentIndex = cycle.findIndex((character) => character.key === charKey);

    const prevBtn = document.getElementById('prev-char-btn');
    const nextBtn = document.getElementById('next-char-btn');
    const prevName = document.getElementById('prev-char-name');
    const nextName = document.getElementById('next-char-name');

    if (cycle.length) {
      const prevCharacter = cycle[(currentIndex - 1 + cycle.length) % cycle.length];
      const nextCharacter = cycle[(currentIndex + 1) % cycle.length];

      if (prevBtn) prevBtn.href = `character.html?char=${prevCharacter.key}&category=${category}`;
      if (nextBtn) nextBtn.href = `character.html?char=${nextCharacter.key}&category=${category}`;
      if (prevName) prevName.textContent = prevCharacter.displayName || prevCharacter.key;
      if (nextName) nextName.textContent = nextCharacter.displayName || nextCharacter.key;
    }

    syncBackNavigationButtons();
  }

  function initDynamicCharacterPage() {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('char') || 'luffy';
    const category = params.get('category') || 'anime';
    const map = getCharacterMap();
    const character = map[key];

    if (!character) {
      const title = document.getElementById('character-title');
      const subtitle = document.getElementById('character-subtitle');
      if (title) title.textContent = 'Character Not Found';
      if (subtitle) subtitle.textContent = 'Please check the character link and try again.';
      return;
    }

    state.currentCharacterData = character;
    state.lookKeys = Object.keys(character.looks || {});
    state.currentFilter = 'all';

    setCharacterMeta(character);
    updateCategoryHomeLinks(category);
    initializeCharacterNavigation();

    const filterButtons = ['all', 'male', 'female'];
    filterButtons.forEach((type) => {
      const btn = document.getElementById(`filter-btn-${type}`);
      if (!btn) return;
      btn.className = type === 'all'
        ? 'px-3 py-1 rounded-lg bg-petrol text-white font-bold transition-all'
        : 'px-3 py-1 rounded-lg text-petrol dark:text-zinc-300 hover:bg-petrol/10 font-bold transition-all';
    });

    const requestedLook = params.get('look');
    if (requestedLook && character.looks && character.looks[requestedLook]) {
      openLookDetail(requestedLook, false);
      return;
    }

    renderCatalogGrid();
  }

  window.filterFits = function (fitType) {
    state.currentFilter = fitType || 'all';

    ['all', 'male', 'female'].forEach((type) => {
      const btn = document.getElementById(`filter-btn-${type}`);
      if (!btn) return;
      btn.className = type === state.currentFilter
        ? 'px-3 py-1 rounded-lg bg-petrol text-white font-bold transition-all'
        : 'px-3 py-1 rounded-lg text-petrol dark:text-zinc-300 hover:bg-petrol/10 font-bold transition-all';
    });

    renderCatalogGrid();
  };

  window.openLookDetail = openLookDetail;
  window.nextLook = nextLook;
  window.prevLook = prevLook;
  window.closeActiveLook = closeActiveLook;

  window.addEventListener('popstate', function () {
    syncFromUrl();
    syncBackNavigationButtons();
  });

  document.addEventListener('DOMContentLoaded', function () {
    const catalogGrid = document.getElementById('catalog-grid');
    const activeSection = document.getElementById('active-look-section');
    const backToCatalogBtn = document.getElementById('back-to-catalog-btn');

    if (catalogGrid && activeSection) {
      initDynamicCharacterPage();
    }

    if (backToCatalogBtn) {
      backToCatalogBtn.addEventListener('click', function (event) {
        event.preventDefault();
        closeActiveLook();
      });
    }
  });
})();
