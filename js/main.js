const swiperAuto = new Swiper(".hotel-slider", {
  loop: true,
  autoplay: {
    delay: 4000,
    reverseDirection: true,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
});
const swiperMouse = new Swiper(".hotel-slider", {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".hotel-slider__button--next",
    prevEl: ".hotel-slider__button--prev",
  },
});
const swiperKeyboard = new Swiper(".hotel-slider", {
  loop: true,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
const swiperReviews = new Swiper(".reviews-slider", {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".reviews-slider__button--next",
    prevEl: ".reviews-slider__button--prev",
  },
});
