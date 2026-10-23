# Adding a New Character or Outfit Card

## 1) Add a new character

Use a category data file like these:
- `anime/data/luffy.js`
- `korean/data/bts.js`
- `shows/data/racheal.js`

Example template:

```js
(function () {
  const character = {
    key: 'new_character',
    displayName: 'New Character Name',
    badge: 'Anime',
    category: 'anime',
    image: '../assets/your-folder/cover.jpg',
    subtitle: 'Short character subtitle',
    homePage: 'anime.html',
    looks: {
      look_01: {
        lookLabel: 'Look 01',
        title: 'Street Hero Fit',
        gender: 'male',
        mannequinImg: '../assets/your-folder/look_01.png',
        items: [
          {
            name: 'Oversized Jacket',
            price: '₹1,499',
            store: 'MYNTRA',
            link: 'https://example.com',
            altLink: 'https://example.com'
          }
        ]
      }
    }
  };

  if (window.registerCategoryData) {
    window.registerCategoryData('anime', { new_character: character });
  }
})();
```

Important:
- `key` must be unique
- `category` must match the page category: `anime`, `korean`, or `shows`
- `image` is the cover image for the character card
- `looks` contains all outfit cards for that character

Then make sure the script file is included in the page HTML, usually near the bottom before `script.js`.

---

## 2) Add a new outfit to an existing character

Open the character’s existing data file and add another entry inside `looks`.

Example:

```js
look_11: {
  lookLabel: 'Look 11',
  title: 'Night Street Edit',
  gender: 'female',
  mannequinImg: '../assets/your-folder/look_11.png',
  items: [
    {
      name: 'Oversized Jacket',
      price: '₹1,499',
      store: 'AJIO',
      link: 'https://example.com',
      altLink: 'https://example.com'
    },
    {
      name: 'Cargo Trousers',
      price: '₹1,099',
      store: 'MYNTRA',
      link: 'https://example.com',
      altLink: 'https://example.com'
    }
  ]
}
```

This will automatically appear in the character’s catalog grid because `js/dynamic_loader.js` loops through `character.looks`.

---

## 3) Important files to know

- Character data: `anime/data/*.js`, `korean/data/*.js`, `shows/data/*.js`
- Shared page data registry: `js/site-data.js`
- Character card renderer: `js/dynamic_loader.js`
- Category card renderer: `js/script.js`
- Styling: `css/style.css`

---

## 4) Quick checklist

When adding a new character:
- [ ] create or edit the relevant data file
- [ ] give it a unique `key`
- [ ] set correct `category`
- [ ] add `image` for the main card
- [ ] add at least one `looks` entry
- [ ] ensure the file is loaded in the page HTML

When adding a new outfit:
- [ ] add a new key under `looks`
- [ ] set `lookLabel`, `title`, `gender`, `mannequinImg`
- [ ] add item objects with `name`, `price`, `store`, `link`, `altLink`

---

## 5) Example of a full new character file

```js
(function () {
  const character = {
    key: 'zoro',
    displayName: 'Roronoa Zoro',
    badge: 'One Piece',
    category: 'anime',
    image: '../assets/zoro/zoro.jpg',
    subtitle: 'Three-Sword Style • Everyday Power Dressing',
    homePage: 'anime.html',
    looks: {
      look_01: {
        lookLabel: 'Look 01',
        title: 'Swordmaster Street Edit',
        gender: 'male',
        mannequinImg: '../assets/zoro/zoro_look_01.png',
        items: [
          { name: 'Black Overshirt', price: '₹1,299', store: 'MYNTRA', link: 'https://example.com', altLink: 'https://example.com' },
          { name: 'Relaxed Denim', price: '₹1,099', store: 'AJIO', link: 'https://example.com', altLink: 'https://example.com' },
          { name: 'Leather Boots', price: '₹1,799', store: 'SAVANA', link: 'https://example.com', altLink: 'https://example.com' }
        ]
      }
    }
  };

  if (window.registerCategoryData) {
    window.registerCategoryData('anime', { zoro: character });
  }
})();
```

This is the exact pattern used by the app.
