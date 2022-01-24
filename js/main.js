const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".slider-button--next",
    prevEl: ".slider-button--prev",
  },
});
const swiperKeyboard = new Swiper(".swiper", {
  loop: true,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
