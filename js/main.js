// HTML ELEMENTS
const elLoader = document.querySelector(".loader-wrapper"),
elFontSelector = document.querySelector(".js-font-selector"),
elFontSelectorMainButton = elFontSelector.querySelector(".js-font-selector-main-button"),
elFontList = elFontSelector.querySelector(".font-selector__list");

// LOADER
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(() => {
    elLoader.classList.add("loader-wrapper--none")
  }, 800);
});

// FONT SELECTOR
elFontSelectorMainButton.addEventListener("click", function() {
  elFontList.classList.toggle("font-selector__list--open")
});