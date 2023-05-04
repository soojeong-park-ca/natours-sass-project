// STORIES SLIDER
let slideIndex = 1;
showSlide(slideIndex);

const nextBtn = document.querySelector(".btn--next");
function nextSlide() {
  showSlide((slideIndex += 1));
}
nextBtn.addEventListener("click", nextSlide);

const prevBtn = document.querySelector(".btn--prev");
function prevSlide() {
  showSlide((slideIndex -= 1));
}
prevBtn.addEventListener("click", prevSlide);

function showSlide(n) {
  const stories = document.querySelectorAll(".story");

  if (n > stories.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = stories.length;
  }

  for (let i = 0; i < stories.length; i++) {
    stories[i].style.display = "none";
  }

  stories[slideIndex - 1].style.display = "block";
}

// NAVIGATION
const navCheckbox = document.querySelector(".navigation__checkbox");
const navLinks = document.querySelectorAll(".navigation__link");

function hideNav() {
  navCheckbox.checked = false;
}

navLinks.forEach(link => link.addEventListener("click", hideNav));

// TOURS SECTION POPUP
const btnTours = document.querySelectorAll(".btn-tours");
const popup = document.querySelector(".popup");
const popupContent = document.querySelector(".popup__content");
const btnPopupClose = document.querySelector(".popup__close");
const btnPopupBook = document.querySelector(".btn-popup-book");

function openPopup() {
  popup.classList.remove("hidden");
}

function closePopup() {
  popup.classList.add("hidden");
}

btnTours.forEach(btn => btn.addEventListener("click", openPopup));

btnPopupClose.addEventListener("click", closePopup);

btnPopupBook.addEventListener("click", closePopup);

popup.addEventListener("click", function (e) {
  e.target === popup && closePopup();
});

window.addEventListener("keydown", function (e) {
  e.key === "Escape" && closePopup();
});

// Stories
let initialScreenWidth = window.innerWidth;
const storyParagraph = document.querySelectorAll(".story__paragraph");
const storyHidden = document.querySelectorAll(".story__hidden");

if (initialScreenWidth <= 900) {
  storyHidden.forEach(story => story.classList.add("hidden"));
} else {
  storyHidden.forEach(story => story.classList.remove("hidden"));
}

window.addEventListener("resize", function () {
  if (window.innerWidth <= 900) {
    storyHidden.forEach(story => story.classList.add("hidden"));
  } else {
    storyHidden.forEach(story => story.classList.remove("hidden"));
  }
});
