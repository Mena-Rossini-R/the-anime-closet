/* ================================================================= *
   THE ANIME CLOSET - CATALOG AGGREGATOR ENGINE (`js/catalog-aggregator.js`)
   Automatically merges separate character JS files into a unified MASTER_CATALOG.
   ================================================================ */

let MASTER_CATALOG = [];

function getCatalogRegistries() {
    return [
        window.ANIME_LOOKBOOKS || {},
        window.KOREAN_LOOKBOOKS || {},
        window.SHOWS_LOOKBOOKS || {},
        (window.THE_OUTFITS_DATA && window.THE_OUTFITS_DATA.characters) || {}
    ];
}

function aggregateCharacterCatalogs() {
    MASTER_CATALOG = [];
    const merged = {};

    getCatalogRegistries().forEach((registry) => {
        Object.keys(registry).forEach((charKey) => {
            const charData = registry[charKey];
            if (!charData || !charData.looks) return;
            merged[charKey] = { ...merged[charKey], ...charData };
        });
    });

    Object.keys(merged).forEach((charKey) => {
        const charData = merged[charKey];
        const category = charData.category || 'anime';
        const folderMap = {
            anime: 'anime',
            korean: 'korean',
            shows: 'shows'
        };
        const folder = folderMap[category] || category;

        Object.keys(charData.looks || {}).forEach((lookKey) => {
            const look = charData.looks[lookKey];
            let rawPrice = 699;
            let priceStr = '₹699';

            if (look.items && look.items[0] && look.items[0].price) {
                if (typeof look.items[0].price === 'number') {
                    rawPrice = look.items[0].price;
                    priceStr = `₹${rawPrice}`;
                } else if (typeof look.items[0].price === 'string') {
                    priceStr = look.items[0].price;
                    rawPrice = parseInt(priceStr.replace(/[^0-9]/g, '')) || 699;
                }
            }

            MASTER_CATALOG.push({
                id: `${charKey}-${lookKey}`,
                universe: charData.universe || category || 'anime',
                universeLabel: charData.universeLabel || charData.badge || charData.displayName || 'Character',
                characterName: charData.displayName || charData.characterName || charData.key,
                gender: look.gender || 'unisex',
                title: look.title,
                price: rawPrice,
                priceFormatted: priceStr,
                dateAdded: look.dateAdded || '2026-10-01',
                url: `${folder}/character.html?char=${charKey}&category=${category}&look=${lookKey}`,
                image: look.mannequinImg || charData.image
            });
        });
    });

    if (typeof applyMasterFilter === 'function') {
        applyMasterFilter();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    aggregateCharacterCatalogs();
});