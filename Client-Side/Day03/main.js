const decks = Array.from(document.getElementsByTagName("main"));
const previousSlideButton = document.getElementById("previous-slide");
const nextSlideButton = document.getElementById("next-slide");
const previousDeckButton = document.getElementById("previous-deck");
const nextDeckButton = document.getElementById("next-deck");
var decksIndex = 0;
var slidesIndex = 0;

let totalSlides = decks[decksIndex].getElementsByTagName("section").length;
let totalDecs = decks.length;
var curSlide = 1;
var curDec = 1;

const slideCount = document.querySelector("#slide-count");
const decCount = document.querySelector("#deck-count");

// Slide Count
function setSlideCount(dir, totalSlides) {
  curSlide = dir;
  slideCount.innerHTML = `${curSlide} / ${totalSlides}`;
}

// Deck Count
function setDecCount(dir) {
  slidesIndex = 0;
  curDec = dir;
  decCount.innerHTML = `${curDec} / ${totalDecs}`;
}

decks.forEach((deck) => {
  deck.style.width = deck.getElementsByTagName("section").length + "00vw";
});

function showFooter() {
  decks[decksIndex].getElementsByTagName("footer")[0].style.display = "flex";
}

function moveSlide(dir) {
  const newSlidesIndex = slidesIndex + dir;
  const slides = Array.from(decks[decksIndex].getElementsByTagName("section"));

  if (newSlidesIndex >= 0 && newSlidesIndex < slides.length) {
    slidesIndex = newSlidesIndex;
    setSlideCount(newSlidesIndex + 1, slides.length);
    slides.forEach((slide) => {
      slide.style.transform = "translateX(-" + slidesIndex + "00vw)";
    });
  }
}

const moveDeck = (dir) => {
  const newDecksIndex = decksIndex + dir;
  if (newDecksIndex >= 0 && newDecksIndex < decks.length) {
    setDecCount(newDecksIndex + 1);
    setSlideCount(
      1,
      decks[newDecksIndex].getElementsByTagName("section").length
    );
    decksIndex = newDecksIndex;
    decks.forEach((deck) => {
      deck.style.transform = "translateY(-" + decksIndex + "00vh)";
    });
    showFooter();
  }
};

nextSlideButton.addEventListener("click", (e) => {
  moveSlide(1);
});
previousSlideButton.addEventListener("click", (e) => {
  moveSlide(-1);
});
nextDeckButton.addEventListener("click", (e) => {
  moveDeck(1);
});
previousDeckButton.addEventListener("click", (e) => {
  moveDeck(-1);
});

showFooter();
setSlideCount(1, totalSlides);
setDecCount(1);
