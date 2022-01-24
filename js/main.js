const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".slider-button--next",
    prevEl: ".slider-button--prev",
  },
});

document.addEventListener("keydown", function (e) {
  e.preventDefault();
  if (event.key == "ArrowRight") {
    console.log(event.key);
  }
});
