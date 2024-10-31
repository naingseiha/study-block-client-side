let start_page = 1;
let decksIndex = 0;
let page = null;

const decks = Array.from(document.getElementsByTagName("main"));
const first_page = decks[decksIndex].getElementsByTagName("section");

const next_button = document.querySelector("#next-slide");
const previous_button = document.querySelector("#previous-slide");

const next_deck = document.querySelector("next-deck");
const previous_deck = document.querySelector("previous-deck");

next_button.addEventListener("click", function () {
  if (start_page >= first_page.length) return;

  start_page += 1;
  next_button.setAttribute("href", `#section-${start_page}`);
});

previous_button.addEventListener("click", function () {
  if (start_page <= 1) return;

  start_page -= 1;
  previous_button.setAttribute("href", `#section-${start_page}`);
});

next_deck.addEventListener("click", function () {
  decksIndex += 1;
  page = decks[decksIndex].getElementsByTagName("section");
});
