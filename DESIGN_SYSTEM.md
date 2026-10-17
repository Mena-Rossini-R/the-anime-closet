# The Anime Closet - Master Design System & Architecture v1.0

## 1. Core Stack & Infrastructure
- **Framework:** Pure HTML5 + Tailwind CSS (via CDN configuration).
- **Hosting:** 100% Static (GitHub Pages / Netlify) — Zero servers, zero databases.
- **Affiliate Integration:** EarnKaro intermediary link mapping for Indian retail platforms (Myntra, Flipkart, Ajio, Savana).

## 2. Color Palette & Theme Tokens
- **Light Theme (Taupe-Cream & Vintage Academia):**
  - Background: `#F41FEA` (Taupe Cream `bg-taupeCream`)
  - Containers/Cards: `#FFFFFF` (`bg-cardLight`)
  - Primary Text / Structure: `#271C19` (`text-espresso`)
  - Structural Borders: Solid 2px dark espresso (`border-2 border-espresso`)
  - Accent Color: Tangerine Orange (`#FF6B00` / `text-tangerine`)
- **Dark Theme (Obsidian & Cyberpunk Neo-Brutalism):**
  - Background: `#030305` (`bg-obsidian`)
  - Containers/Cards: `#0E0E12` (`bg-cardObsidian`)
  - Primary Text: `#F4F4F5` (`text-zinc-100`)
  - Structural Borders: Fine silver/zinc (`border-2 border-zinc-700`) with retro drop shadows (`shadow-[4px_4px_0px_0px_#71717A]`)
  - Accent Color: Cyberpunk Cyan / Tangerine Orange (`text-tangerine` / `text-cyan-400`)

## 3. Typography Hierarchy
- **Light Mode Headings & Body:** Clean professional Sans-Serif (`Inter`) paired with editorial italics (`Playfair Display`).
- **Dark Mode Headings:** Punchy Cyberpunk Display Font (`Syne` / `font-punk`).
- **Metadata & Badges:** Monospace Font (`Space Grotesk` / `font-mono`).

## 4. Interactive Behaviors & Auras
- **Living Background Auras:** Hovering any Bento card dynamically shifts a full-screen blurred chromatic wash (`#ambient-glow`) matching the character's signature aura color at a subtle opacity.
- **Card Hover Elevation:** Clean upward translation (`-translate-y-1` / `translate-x-1`) with crisp shadow shifts.