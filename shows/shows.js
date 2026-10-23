(function () {
  window.SHOWS_LOOKBOOKS = window.SHOWS_LOOKBOOKS || {};

  window.registerShowCharacter = function (character) {
    if (!character || !character.key) return;
    window.SHOWS_LOOKBOOKS[character.key] = character;
  };
})();
