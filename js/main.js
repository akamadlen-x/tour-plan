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
  var footerButton = $(".footer__button");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);
  footerButton.on("click", changeTop);

  function changeTop() {
    var footerTel = $(".footer-tel");
    var footerName = document.getElementById("input-name");
    var footerTT = document.getElementById("input-tel");
    var container1 = document.querySelector(".container");
    if (
      container1.clientWidth > 960 ||
      (container1.clientWidth < 701 && container1.clientWidth > 423)
    ) {
      if (footerName.style.height != "50px")
        document.getElementById("input-tel").style.height = 68 + "px";
      console.log(footerTT.clientHeight);
      if (footerTT.style.height != "50px")
        document.getElementById("input-name").style.height = 68 + "px";
    }
  }

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
          minlength: "You must enter 11 digit",
        },
      },
    });
  });

  // Валидация формы email
  $(".form").validate({
    errorClass: "invalid",
    messages: {
      email: {
        required: true,
        email: true,
        required: "We need your email address",
        email: "Emai format: name@domain.com",
      },
    },
  });

  jQuery(function ($) {
    $("input[type='tel']").mask("+7(999) 999-9999");
  });
  AOS.init();
});
