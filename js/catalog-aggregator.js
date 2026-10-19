/* ================================================================= *
   THE ANIME CLOSET - CATALOG AGGREGATOR ENGINE (`js/catalog-aggregator.js`)
   Automatically merges separate character JS files into a unified MASTER_CATALOG.
   ================================================================ */

let MASTER_CATALOG = [];

function aggregateCharacterCatalogs() {
    MASTER_CATALOG = [];
    const registry = window.ANIME_LOOKBOOKS || {};

    // Loop through every registered character script automatically
    Object.keys(registry).forEach(charKey => {
        const charData = registry[charKey];
        if (!charData || !charData.looks) return;

        // Loop through each look belonging to this character
        Object.keys(charData.looks).forEach(lookKey => {
            const look = charData.looks[lookKey];

            // Safely parse price number from string if needed (e.g., "₹699" -> 699 or fallback)
            let rawPrice = 699;
            let priceStr = "₹699";

            if (look.items && look.items[0] && look.items[0].price) {
                if (typeof look.items[0].price === 'number') {
                    rawPrice = look.items[0].price;
                    priceStr = `₹${rawPrice}`;
                } else if (typeof look.items[0].price === 'string') {
                    priceStr = look.items[0].price;
                    rawPrice = parseInt(priceStr.replace(/[^0-9]/g, '')) || 699;
                }
            }

            // Push formatted item into the master feed
            MASTER_CATALOG.push({
                id: `${charKey}-${lookKey}`,
                universe: charData.universe || "anime",
                universeLabel: charData.anime,
                characterName: charData.characterName,
                gender: look.gender || "unisex", // "male", "female", "unisex"
                title: look.title,
                price: rawPrice,
                priceFormatted: priceStr,
                dateAdded: look.dateAdded || "2026-10-01",
                url: `character.html?char=${charKey}`,
                image: look.mannequinImg
            });
        });
    });

    // Run filter and render once aggregated
    if (typeof applyMasterFilter === 'function') {
        applyMasterFilter();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    aggregateCharacterCatalogs();
});