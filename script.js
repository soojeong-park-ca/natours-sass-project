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
  const stories = document.getElementsByClassName("story");

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
