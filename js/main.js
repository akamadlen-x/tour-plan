$(document).ready(function () {
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

  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function () {
    document
      .querySelector(".navbar-bottom")
      .classList.toggle("navbar-bottom--visible");
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
  // Валидация форм
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Write your name",
          minlength: "Minimum lenght 2 sign",
        },
        email: {
          required: "We need your email address",
          email: "Emai format: name@domain.com",
        },
        phone: {
          required: "Phone required",
        },
      },
    });
  });

  jQuery(function ($) {
    $("input[type='phone_mask']").mask("+7(999) 999-9999");
  });
  AOS.init();
});
