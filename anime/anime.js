(function () {
  window.ANIME_LOOKBOOKS = window.ANIME_LOOKBOOKS || {};

  window.registerAnimeCharacter = function (character) {
    if (!character || !character.key) return;
    window.ANIME_LOOKBOOKS[character.key] = character;
  };
})();
