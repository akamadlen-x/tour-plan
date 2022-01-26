const swiperAuto = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 6000,
    reverseDirection: true,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
});
const swiperMouse = new Swiper(".swiper", {
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
