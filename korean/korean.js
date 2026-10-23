(function () {
  window.KOREAN_LOOKBOOKS = window.KOREAN_LOOKBOOKS || {};

  window.registerKoreanCharacter = function (character) {
    if (!character || !character.key) return;
    window.KOREAN_LOOKBOOKS[character.key] = character;
  };
})();
