  // HTML ELEMENTS
  const elLoader = document.querySelector(".js-loader"),
  elTitle = document.querySelector(".js-title"),
  elDarkModeToggler = document.querySelector(".js-dark-mode-toggler"),
  elMainContent = document.querySelector(".js-main-content"),
  elFontSelector = document.querySelector(".js-font-selector"),
  elFontList = elFontSelector.querySelector(".js-font-selector-list"),
  elFontSelectorMainButton = elFontSelector.querySelector(".js-font-selector-main-button"),
  elFontSelectorButton = elFontSelector.querySelectorAll(".js-font-selector-button"),
  elSearchForm = document.querySelector(".js-search-form"),
  elSearchFormInner = document.querySelector(".js-search-form-inner"),
  elSearchFormInput = document.querySelector(".js-search-form-input"),
  elPlayButton = document.querySelector(".js-play-button"),
  elSectionNoun = document.querySelector(".js-noun"),
  elSynonymsList = document.querySelector(".js-synonyms-list"),
  elSectionVerb = document.querySelector(".js-verb"),
  elLink = document.querySelector(".js-link"),
  elTemplateDescription = document.querySelector(".js-template-description"),
  elTemplateSynonyms = document.querySelector(".js-template-synonyms"),
  elTemplateDefinitions = document.querySelector(".js-template-definitions");

  // VARIABLES
  const checker = localStorage.getItem("checker", "true");


  // LOADER AND REMEMBER DARK MODE
  document.addEventListener("DOMContentLoaded", function() {
    if (checker === "true") {
      elDarkModeToggler.checked = true;
      document.documentElement.classList.add("dark-mode");
    } else {
      elDarkModeToggler.checked = false;
      document.documentElement.classList.remove("dark-mode");
    };
    setTimeout(() => {
      elLoader.classList.add("loader-wrapper--none")
    }, 800);
  });

   // DARK-MODE-TOGGLER
   elDarkModeToggler.addEventListener("change", function () {
    if (elDarkModeToggler.checked === true) {
      document.documentElement.classList.add("dark-mode");
      localStorage.setItem("checker", "true");
    } else {
      document.documentElement.classList.remove("dark-mode");
      localStorage.setItem("checker", "false")
    }
  });

  // FONT SELECTOR
  elFontSelectorMainButton.addEventListener("click", function() {
    elFontList.classList.toggle("font-selector__list--open")
  });
