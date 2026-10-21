/* ================================================================= *
   THE ANIME CLOSET - DYNAMIC TEMPLATE INJECTION ENGINE (`js/dynamic_loader.js`)
   ================================================================ */

let lookKeysArray = [];
let currentIndex = 0;
let activeLookKey = null;
let currentCharacterData = null;
let currentFitFilter = "all"; // "all", "male", "female"

function initDynamicCharacterPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const charKey = urlParams.get("char") || "luffy";
    const targetLook = urlParams.get("look"); // Check if a specific look was requested in URL

    const dataRegistry = {
        luffy: typeof LUFFY_DATA !== "undefined" ? LUFFY_DATA : null,
        zoro: typeof ZORO_DATA !== "undefined" ? ZORO_DATA : null,
        sanji: typeof SANJI_DATA !== "undefined" ? SANJI_DATA : null,
    };

    currentCharacterData = dataRegistry[charKey];

    if (!currentCharacterData) {
        document.getElementById("character-title").innerText =
            "Character Not Found";
        document.getElementById("character-subtitle").innerText =
            "Please check the URL or select a valid character from the Hub.";
        return;
    }

    document.title = `${currentCharacterData.characterName} Lookbook | The Outfits`;
    document.getElementById("character-title").innerText =
        currentCharacterData.characterName;
    document.getElementById("character-subtitle").innerText =
        currentCharacterData.subtitle;
    document.getElementById("header-franchise-badge").innerText =
        `Anime: ${currentCharacterData.anime} 🏴‍☠️`;

    lookKeysArray = Object.keys(currentCharacterData.looks);

    // If a specific look parameter is present and valid, open it directly!
    if (targetLook && currentCharacterData.looks[targetLook]) {
        openLookDetail(targetLook);
    } else {
        renderCatalogGrid();
    }
}

function filterFits(fitType) {
    currentFitFilter = fitType;

    // Update button active state styling
    ['all', 'male', 'female'].forEach(type => {
        const btn = document.getElementById(`filter-btn-${type}`);
        if (!btn) return;
        if (type === fitType) {
            btn.className = "px-3 py-1 rounded-lg bg-petrol text-white font-bold transition-all shadow-sm";
        } else {
            btn.className = "px-3 py-1 rounded-lg text-petrol dark:text-zinc-300 hover:bg-petrol/10 font-bold transition-all";
        }
    });

    renderCatalogGrid();
}

function renderCatalogGrid() {
    activeLookKey = null;
    document.getElementById('catalog-view').classList.remove('hidden');
    document.getElementById('active-look-section').classList.add('hidden');

    const looksMap = currentCharacterData.looks;
    const gridContainer = document.getElementById('catalog-grid');

    // Filter look keys based on male/female selection
    const filteredKeys = lookKeysArray.filter(lookKey => {
        const look = looksMap[lookKey];
        if (currentFitFilter === 'all') return true;
        return look.gender === currentFitFilter;
    });

    if (filteredKeys.length === 0) {
        gridContainer.innerHTML = `
            <div class="col-span-full py-12 text-center font-mono text-xs text-petrol/70 dark:text-zinc-400">
                No looks found for ${currentFitFilter.toUpperCase()} fit in this collection.
            </div>
        `;
        return;
    }

    gridContainer.innerHTML = filteredKeys.map(lookKey => {
                const look = looksMap[lookKey];

                let displayPrice = "₹799";
                if (look.items && look.items.length > 0 && look.items[0].price) {
                    displayPrice = look.items[0].price;
                }

                return `
            <div onclick="openLookDetail('${lookKey}')" class="card-container bg-cardLight dark:bg-cardObsidian border-2 border-petrol dark:border-zinc-700 rounded-2xl overflow-hidden shadow-[4px_4px_0px_0px_#2D2522] dark:shadow-[4px_4px_0px_0px_#71717A] cursor-pointer hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group" data-aura="${currentCharacterData.auraColor}">
                <!-- PURE WHITE MANNEQUIN STAGE -->
                <div class="aspect-[4/5] bg-white dark:bg-zinc-950 relative overflow-hidden flex items-center justify-center p-3 border-b-2 border-petrol dark:border-zinc-700">
                    <!-- IMAGE SLOT: Mannequin Asset -->
                    ${look.mannequinImg ? `<img src="${look.mannequinImg}" alt="${look.title}" class="absolute inset-0 w-full h-full object-contain object-center p-3 group-hover:scale-105 transition-transform duration-700">` : `<span class="text-5xl">🧥</span>`}
                    <div class="absolute top-3 left-3 bg-petrol text-taupeCream px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase border border-petrol shadow-sm z-15">
                        ${look.lookLabel}
                    </div>
                    <div class="absolute top-3 right-3 bg-petrol text-white dark:bg-zinc-800 px-2 py-0.5 rounded text-[9px] font-mono uppercase font-bold z-15">
                        ${look.gender}
                    </div>
                </div>
                <!-- CARD FOOTER -->
                <div class="p-3.5 flex flex-col justify-between bg-cardLight text-petrol dark:bg-cardObsidian dark:text-zinc-100 group-hover:bg-petrol group-hover:text-taupeCream transition-colors duration-300 min-h-[105px]">
                    <div>
                        <span class="text-[9px] font-mono font-bold text-tangerine uppercase tracking-wider block mb-0.5 truncate">${look.category.toUpperCase()}</span>
                        <h3 class="font-bold text-xs sm:text-sm font-punk line-clamp-2 leading-tight">${look.title}</h3>
                    </div>
                    <div class="flex items-center justify-between pt-2 border-t border-petrol/10 dark:border-zinc-800 group-hover:border-taupeCream/20 mt-2">
                        <span class="text-xs font-extrabold font-mono text-tangerine group-hover:text-orange-300">${displayPrice}</span>
                        <span class="text-xs font-mono font-bold text-tangerine group-hover:text-tangerine group-hover:translate-x-1 transition-transform">
                            View ↗
                        </span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function openLookDetail(lookKey) {
    activeLookKey = lookKey;
    currentIndex = lookKeysArray.indexOf(lookKey);
    if (currentIndex === -1) currentIndex = 0;

    // Update browser URL state without reloading page so users can copy/share specific look links
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('look', lookKey);
    window.history.replaceState({}, '', `${window.location.pathname}?${urlParams.toString()}`);

    document.getElementById("catalog-view").classList.add("hidden");
    document.getElementById("active-look-section").classList.remove("hidden");

    const lookData = currentCharacterData.looks[lookKey];
    if (!lookData) return;

    document.getElementById("active-look-tag").innerText =
        `${lookData.lookLabel} • ${currentCharacterData.anime} Collection`;
    document.getElementById("active-look-title").innerText = lookData.title;

    const heroImg = document.getElementById("modal-model-img");
    const placeholder = document.getElementById("modal-placeholder");
    if (lookData.mannequinImg) {
        heroImg.src = lookData.mannequinImg;
        heroImg.classList.remove("hidden");
        placeholder.classList.add("hidden");
    } else {
        heroImg.classList.add("hidden");
        placeholder.classList.remove("hidden");
    }

    const container = document.getElementById("modal-look-display");
    container.innerHTML = lookData.items
        .map(
            (item) => `
        <div class="bg-cardLight dark:bg-cardObsidian border-2 border-petrol dark:border-zinc-700 p-4 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm hover:translate-x-1 transition-all duration-200">
            <div>
                <!-- STORE BADGE SLOT -->
                <span class="text-[9px] uppercase font-extrabold tracking-widest px-2 py-0.5 rounded bg-taupeCream dark:bg-zinc-800 text-petrol dark:text-zinc-300 border border-petrol dark:border-zinc-700">${item.store}</span>
                <h4 class="text-xs sm:text-sm font-bold mt-1.5 text-petrol dark:text-white">${item.name}</h4>
                <p class="text-xs font-extrabold text-tangerine mt-0.5 font-mono">${item.price}</p>
            </div>
            <div class="flex items-center gap-2 w-full sm:w-auto justify-end flex-wrap">
                <!-- AFFILIATE LINK SLOT: EarnKaro URL -->
                <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="bg-tangerine hover:bg-petrol dark:hover:bg-zinc-800 text-white px-3 py-2 rounded-lg text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 whitespace-nowrap shadow-sm border-2 border-petrol dark:border-zinc-700 flex items-center justify-center gap-1">
                    Buy ↗
                </a>
                <a href="${item.altLink}" target="_blank" rel="noopener noreferrer" class="bg-cardLight dark:bg-zinc-900 hover:bg-petrol hover:text-white dark:hover:bg-zinc-800 text-petrol/80 dark:text-zinc-300 px-3 py-2 rounded-lg text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 whitespace-nowrap shadow-sm border-2 border-petrol dark:border-zinc-700">
                    Find Similar Products
                </a>
            </div>
        </div>
    `,
        )
        .join("");

    window.scrollTo({ top: 100, behavior: "smooth" });
}

function nextLook() {
    currentIndex = (currentIndex + 1) % lookKeysArray.length;
    openLookDetail(lookKeysArray[currentIndex]);
}

function prevLook() {
    currentIndex =
        (currentIndex - 1 + lookKeysArray.length) % lookKeysArray.length;
    openLookDetail(lookKeysArray[currentIndex]);
}

function closeActiveLook() {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.delete('look');
    window.history.replaceState({}, '', `${window.location.pathname}?${urlParams.toString()}`);

    renderCatalogGrid();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", () => {
    initDynamicCharacterPage();
});