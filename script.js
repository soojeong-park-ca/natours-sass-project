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
let initialScreenWidth = window.innerWidth;

const btnTours = document.querySelectorAll(".btn-tours");
const popup = document.querySelector(".popup");
const popupContent = document.querySelector(".popup__content");
const btnPopupClose = document.querySelector(".popup__close");
const btnPopupBook = document.querySelector(".btn-popup-book");
const popupHeading = document.querySelector(".popup-heading");
const popupText = document.querySelector(".popup__text");
const popupBtnTour1 = document.querySelector(".btn-tour-1");
const popupBtnTour2 = document.querySelector(".btn-tour-2");
const popupBtnTour3 = document.querySelector(".btn-tour-3");

// Changing contents(heaidng, text) for Popup
const popupTitle1 = "The Sea Explorer Tour Package";
const popupTitle2 = "The Forest Hiker Tour Package";
const popupTitle3 = "The Snow Adventurer Tour Package";
const popupText1 = `&nbsp;&nbsp;&nbsp;&nbsp;Our "Sea Explorer" tour package offers an unforgettable opportunity to explore the stunning natural beauty of the world's oceans. Our expert guides will take you on a journey of discovery, as we sail through crystal clear waters and encounter a wealth of marine life along the way.

<br/>&nbsp;&nbsp;&nbsp;&nbsp;The tour includes exciting activities such as snorkeling, scuba diving, and kayaking, allowing you to get up close and personal with some of the most fascinating creatures in the sea. You'll also have plenty of time to relax and enjoy the breathtaking scenery, with opportunities for sunbathing on pristine beaches, stargazing on deck, and savoring delicious meals made from fresh, locally sourced ingredients.

<br/>&nbsp;&nbsp;&nbsp;&nbsp;Whether you're a seasoned sea adventurer or a first-time sailor, this tour is designed to meet your needs and exceed your expectations. Book now and experience the thrill of a lifetime on our Sea Adventures tour!
`;
const popupText2 = `&nbsp;&nbsp;&nbsp;&nbsp;Our "Forest Hiker" tour package is the perfect way to immerse yourself in the natural beauty of the world's forests. Led by experienced guides, you'll trek through lush, verdant landscapes, breathing in the fresh air and enjoying stunning views at every turn.

<br/>&nbsp;&nbsp;&nbsp;&nbsp;The tour includes hikes of varying difficulty levels, ensuring that everyone can find a trail that's just right for them. You'll explore hidden waterfalls, take in panoramic vistas, and spot a variety of wildlife along the way. You'll also learn about the history and ecology of the forest, with expert guides sharing their knowledge and insights at every step.

<br/>&nbsp;&nbsp;&nbsp;&nbsp;In the evenings, you'll relax in comfortable accommodations, enjoying locally sourced meals and the camaraderie of your fellow hikers. With a focus on sustainable travel practices and responsible tourism, this tour is the perfect way to connect with nature while leaving a positive impact on the environment.

<br/>&nbsp;&nbsp;&nbsp;&nbsp;Whether you're an experienced hiker or a beginner looking to challenge yourself, our Forest Hike tour package is the perfect way to explore the world's forests and experience the healing power of nature. Book now and embark on the adventure of a lifetime!
`;
const popupText3 = `&nbsp;&nbsp;&nbsp;&nbsp;Our "Snow Adventurer" tour package offers the ultimate winter wonderland experience, with an array of exciting activities designed to thrill and delight travelers of all ages. Led by expert guides, you'll explore snow-covered landscapes, stunning mountains, and frozen lakes, all while enjoying the fresh, crisp air and the breathtaking beauty of the winter wilderness.

<br/>&nbsp;&nbsp;&nbsp;&nbsp;The tour includes thrilling activities such as skiing, snowboarding, snowshoeing, and ice skating, allowing you to fully immerse yourself in the magic of the snow-covered world. You'll also have the opportunity to relax and unwind in cozy lodges, enjoying hearty meals, hot cocoa by the fire, and the company of your fellow adventurers.

<br/>&nbsp;&nbsp;&nbsp;&nbsp;Throughout the tour, you'll learn about the unique history and ecology of the winter landscape, with expert guides sharing their knowledge and insights. With a focus on sustainable travel practices and responsible tourism, this tour is the perfect way to connect with nature while leaving a positive impact on the environment.

<br/>&nbsp;&nbsp;&nbsp;&nbsp;Whether you're a seasoned snow enthusiast or a first-time visitor to the winter wilderness, our Snow Adventure tour package is the perfect way to experience the thrill and beauty of the snow-covered world. Book now and embark on an unforgettable winter adventure!
`;

popupBtnTour1.addEventListener("click", function () {
  popupHeading.innerHTML = popupTitle1;
  popupText.innerHTML = popupText1;
});
popupBtnTour2.addEventListener("click", function () {
  popupHeading.innerHTML = popupTitle2;
  popupText.innerHTML = popupText2;
});
popupBtnTour3.addEventListener("click", function () {
  popupHeading.innerHTML = popupTitle3;
  popupText.innerHTML = popupText3;
});

// Opening / Closing Popup Modal Window
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
