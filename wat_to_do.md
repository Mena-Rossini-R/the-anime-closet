I’ll give you the exact minimal workflow for adding a new character in each category without touching the page layout itself.

## Sample workflow for adding a new character

Say you want to add:
- Waguri in Anime
- Spiderman in Shows

You do this in 3 small steps.

---

### 1) Create or edit the category data file

Use the existing pattern from:
- luffy.js
- racheal.js

Example for anime:

```js
(function () {
  const character = {
    key: 'waguri',
    displayName: 'Waguri',
    badge: 'Anime',
    category: 'anime',
    image: '../assets/waguri/waguri-cover.jpg',
    subtitle: 'Soft streetwear with a rebellious edge',
    homePage: 'anime.html',
    looks: {
      look_01: {
        lookLabel: 'Look 01',
        title: 'Casual Night Edit',
        gender: 'male',
        mannequinImg: '../assets/waguri/waguri-look-01.png',
        items: [
          {
            name: 'Oversized Hoodie',
            price: '₹1,299',
            store: 'MYNTRA',
            link: 'https://example.com',
            altLink: 'https://example.com'
          }
        ]
      }
    }
  };

  if (window.registerCategoryData) {
    window.registerCategoryData('anime', { waguri: character });
  }
})();
```

This is enough to make the character appear in the anime category page.

---

### 2) Add the show character similarly

Example for shows:

```js
(function () {
  const character = {
    key: 'spiderman',
    displayName: 'Spider-Man',
    badge: 'Shows',
    category: 'shows',
    image: '../assets/spiderman/spiderman-cover.jpg',
    subtitle: 'Techwear with comic-book energy',
    homePage: 'shows.html',
    looks: {
      look_01: {
        lookLabel: 'Look 01',
        title: 'Urban Spider Suit',
        gender: 'male',
        mannequinImg: '../assets/spiderman/spiderman-look-01.png',
        items: [
          {
            name: 'Technical Jacket',
            price: '₹2,499',
            store: 'AJIO',
            link: 'https://example.com',
            altLink: 'https://example.com'
          }
        ]
      }
    }
  };

  if (window.registerCategoryData) {
    window.registerCategoryData('shows', { spiderman: character });
  }
})();
```

This makes it appear in the shows page too.

---

### 3) Make sure the file is loaded in the right HTML

In the relevant page, include the script tag for the data file before the shared scripts.

For example in anime.html, you’d add:

```html
<script src="data/waguri.js"></script>
<script src="../js/site-data.js"></script>
<script src="../js/script.js"></script>
```

And in shows.html:

```html
<script src="data/spiderman.js"></script>
<script src="../js/site-data.js"></script>
<script src="../js/script.js"></script>
```

---

## Very important rule

For a new character, you usually do not write:
- new card HTML
- new look HTML
- new layout markup

You only do:
- create data object
- register it
- include script

The page generator already handles the rest.

---

## Easy checklist

When adding Waguri or Spiderman:

- [ ] create character file in correct folder
- [ ] give unique `key`
- [ ] set `category` to anime or shows
- [ ] add `image`
- [ ] add one `look`
- [ ] register with `window.registerCategoryData(...)`
- [ ] include script in page

---

## Best practice

Keep all content in the JS data files, not in HTML. That is the project’s working pattern.

If you want, next I can give you:
1. a ready-made “Waguri anime data file”
2. a ready-made “Spiderman shows data file”
3. or a copy-paste template for any new character you add later.