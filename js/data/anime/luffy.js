/* ================================================================= *
   THE ANIME CLOSET - CHARACTER DATA: MONKEY D. LUFFY (`js/data/anime/luffy.js`)
   ================================================================ */

const LUFFY_DATA = {
    key: "luffy",
    characterName: "Monkey D. Luffy",
    anime: "One Piece",
    universe: "anime", // Required for global filter matching on index.html
    subtitle: "Future Pirate King • Everyday Character Energy",
    auraColor: "rgba(255, 107, 0, 0.45)",
    looks: {
        classic_men: {
            lookLabel: "Look 01",
            title: "Classic Red Fit",
            gender: "male", // Standardized to match index filter options (male/female/unisex)
            category: "classic",
            dateAdded: "2026-10-01",
            mannequinImg: "../assets/luffy/luffy_classic_men.png", // <!-- IMAGE SLOT: Mannequin Asset -->
            items: [
                { name: "Red Cotton Cuban Collar Shirt", price: "₹699", store: "MYNTRA", link: "https://earnkaro.com", altLink: "https://earnkaro.com" },
                { name: "White Ribbed Cotton Tank Vest", price: "₹399", store: "MYNTRA", link: "https://earnkaro.com", altLink: "https://earnkaro.com" },
                { name: "Super Baggy Denim Bermuda Shorts", price: "₹999", store: "MYNTRA", link: "https://earnkaro.com", altLink: "https://earnkaro.com" },
                { name: "Beige Casual Sneaker", price: "₹899", store: "TATA CLIQ", link: "https://earnkaro.com", altLink: "https://earnkaro.com" }
            ]
        },
        vacation_men: {
            lookLabel: "Look 02",
            title: "Dressrosa Vacation",
            gender: "male",
            category: "vacation",
            dateAdded: "2026-10-02",
            mannequinImg: "../assets/luffy/luffy_vacation_men.png", // <!-- IMAGE SLOT: Mannequin Asset -->
            items: [
                { name: "Sunflower Print Resort Shirt", price: "₹749", store: "FLIPKART", link: "https://earnkaro.com", altLink: "https://earnkaro.com" },
                { name: "Frayed Hem Relaxed Denim Shorts", price: "₹799", store: "MYNTRA", link: "https://earnkaro.com", altLink: "https://earnkaro.com" },
                { name: "Unisex Straw Boater Hat", price: "₹499", store: "AMAZON", link: "https://earnkaro.com", altLink: "https://earnkaro.com" },
                { name: "Round Green Sunglasses", price: "₹349", store: "FLIPKART", link: "https://earnkaro.com", altLink: "https://earnkaro.com" }
            ]
        },
        sporty_men: {
            lookLabel: "Look 03",
            title: "Sporty Training",
            gender: "male",
            category: "sporty",
            dateAdded: "2026-10-03",
            mannequinImg: "../assets/luffy/luffy_sporty_men.png", // <!-- IMAGE SLOT: Mannequin Asset -->
            items: [
                { name: "Striped Bomber Jacket", price: "₹1,499", store: "MYNTRA", link: "https://earnkaro.com", altLink: "https://earnkaro.com" },
                { name: "Solid Black Track Pants", price: "₹599", store: "FLIPKART", link: "https://earnkaro.com", altLink: "https://earnkaro.com" },
                { name: "Black & Red Mesh Running Shoes", price: "₹999", store: "FLIPKART", link: "https://earnkaro.com", altLink: "https://earnkaro.com" }
            ]
        },
        fashion_men: {
            lookLabel: "Look 04",
            title: "Gear 5 High-Fashion Streetwear",
            gender: "male",
            category: "fashion",
            dateAdded: "2026-10-04",
            mannequinImg: "../assets/luffy/luffy_fashion_men.png", // <!-- IMAGE SLOT: Mannequin Asset -->
            items: [
                { name: "Awakened White Heavyweight Hoodie", price: "₹2,599", store: "SAVANA", link: "https://earnkaro.com", altLink: "https://earnkaro.com" },
                { name: "Crimson-Trimmed Tactical Vest", price: "₹1,799", store: "FLIPKART", link: "https://earnkaro.com", altLink: "https://earnkaro.com" },
                { name: "White Casual Jeans", price: "₹1,299", store: "AJIO", link: "https://earnkaro.com", altLink: "https://earnkaro.com" }
            ]
        },
        office_men: {
            lookLabel: "Look 05",
            title: "Grand Line Casual Office",
            gender: "male",
            category: "office",
            dateAdded: "2026-10-05",
            mannequinImg: "../assets/luffy/luffy_office.png", // <!-- IMAGE SLOT: Mannequin Asset -->
            items: [
                { name: "Beige Structured Casual Overshirt", price: "₹1,199", store: "AJIO", link: "https://earnkaro.com", altLink: "https://earnkaro.com" },
                { name: "Relaxed Fit Dark Olive Trousers", price: "₹1,399", store: "MYNTRA", link: "https://earnkaro.com", altLink: "https://earnkaro.com" },
                { name: "Minimalist Tan Loafers", price: "₹1,299", store: "TATA CLIQ", link: "https://earnkaro.com", altLink: "https://earnkaro.com" }
            ]
        },
        classic_women: {
            lookLabel: "Look 06",
            title: "Classic Red Tie-Front Fit",
            gender: "female",
            category: "classic",
            dateAdded: "2026-10-06",
            mannequinImg: "../assets/luffy/luffy_classic_women.png", // <!-- IMAGE SLOT: Mannequin Asset -->
            items: [
                { name: "Cropped Red Tie-Front Blouse", price: "₹699", store: "SAVANA", link: "https://earnkaro.com", altLink: "https://earnkaro.com" },
                { name: "White Ribbed Cami Tank", price: "₹349", store: "MYNTRA", link: "https://earnkaro.com", altLink: "https://earnkaro.com" },
                { name: "High-Waist Denim Shorts", price: "₹799", store: "AJIO", link: "https://earnkaro.com", altLink: "https://earnkaro.com" },
                { name: "Tan Braided Flat Sandals", price: "₹699", store: "MYNTRA", link: "https://earnkaro.com", altLink: "https://earnkaro.com" }
            ]
        },
        vacation_women: {
            lookLabel: "Look 07",
            title: "Yellow Floral Vacation Fit",
            gender: "female",
            category: "vacation",
            dateAdded: "2026-10-07",
            mannequinImg: "../assets/luffy/luffy_vacation_women.png", // <!-- IMAGE SLOT: Mannequin Asset -->
            items: [
                { name: "Yellow Floral Crop Blouse", price: "₹799", store: "SAVANA", link: "https://earnkaro.com", altLink: "https://earnkaro.com" },
                { name: "Distressed High-Waist Denim Skort", price: "₹899", store: "AJIO", link: "https://earnkaro.com", altLink: "https://earnkaro.com" },
                { name: "Straw Boater Hat", price: "₹499", store: "AMAZON", link: "https://earnkaro.com", altLink: "https://earnkaro.com" }
            ]
        },
        sporty_women: {
            lookLabel: "Look 08",
            title: "Active Bomber Fit",
            gender: "female",
            category: "sporty",
            dateAdded: "2026-10-08",
            mannequinImg: "../assets/luffy/luffy_sporty_women.png", // <!-- IMAGE SLOT: Mannequin Asset -->
            items: [
                { name: "Cropped Zip-Up Active Bomber", price: "₹1,299", store: "MYNTRA", link: "https://earnkaro.com", altLink: "https://earnkaro.com" },
                { name: "High-Waist Flared Yoga Pants", price: "₹799", store: "FLIPKART", link: "https://earnkaro.com", altLink: "https://earnkaro.com" },
                { name: "Minimalist White Sneakers", price: "₹999", store: "AJIO", link: "https://earnkaro.com", altLink: "https://earnkaro.com" }
            ]
        },
        fashion_women: {
            lookLabel: "Look 09",
            title: "Awakened Cargo Streetwear",
            gender: "female",
            category: "fashion",
            dateAdded: "2026-10-09",
            mannequinImg: "../assets/luffy/luffy_fashion_women.png", // <!-- IMAGE SLOT: Mannequin Asset -->
            items: [
                { name: "Ribbed White Crop Top", price: "₹399", store: "MYNTRA", link: "https://earnkaro.com", altLink: "https://earnkaro.com" },
                { name: "White Wide-Leg Cargo Pants", price: "₹1,199", store: "AJIO", link: "https://earnkaro.com", altLink: "https://earnkaro.com" },
                { name: "Round Green Sunglasses", price: "₹349", store: "FLIPKART", link: "https://earnkaro.com", altLink: "https://earnkaro.com" }
            ]
        },
        office_women: {
            lookLabel: "Look 10",
            title: "Oversized Blazer Casual Office",
            gender: "female",
            category: "office",
            dateAdded: "2026-10-10",
            mannequinImg: "../assets/luffy/luffy_office_female.png", // <!-- IMAGE SLOT: Mannequin Asset -->
            items: [
                { name: "Neutral Beige Oversized Blazer", price: "₹1,899", store: "AJIO", link: "https://earnkaro.com", altLink: "https://earnkaro.com" },
                { name: "White Cotton Crewneck Tee", price: "₹499", store: "MYNTRA", link: "https://earnkaro.com", altLink: "https://earnkaro.com" },
                { name: "Pleated Midi Skirt", price: "₹1,099", store: "MYNTRA", link: "https://earnkaro.com", altLink: "https://earnkaro.com" }
            ]
        }
    }
};

// 🌟 AUTO-REGISTRATION FOR THE AGGREGATOR ENGINE
window.ANIME_LOOKBOOKS = window.ANIME_LOOKBOOKS || {};
window.ANIME_LOOKBOOKS['luffy'] = LUFFY_DATA;