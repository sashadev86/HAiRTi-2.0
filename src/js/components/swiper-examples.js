import Swiper from "swiper";
import { Navigation } from "swiper/modules";

document.addEventListener("DOMContentLoaded", () => {
  const sectionExamples = document.querySelector(".examples");

  if (sectionExamples) {
    const swiper2 = new Swiper(".swiper-examples", {
      modules: [Navigation],
      slidesPerView: 3.75,
      initialSlide: 1,
      spaceBetween: 20,
      loop: true,
      centeredSlides: true,
      centeredSlidesBounds: true,
      navigation: {
        nextEl: ".examples__button-next",
        prevEl: ".examples__button-prev",
      },
      breakpoints: {
        1200: {
          slidesPerView: 3.75,
          spaceBetween: 20,
        },
        1133: {
          slidesPerView: 3.4,
        },
        992: {
          slidesPerView: 3.2,
        },
        900: {
          slidesPerView: 2.8,
        },
        800: {
          slidesPerView: 2.5,
        },
        700: {
          slidesPerView: 2.2,
        },
        576: {
          slidesPerView: 1.9,
        },
        520: {
          spaceBetween: 20,
          slidesPerView: 1.7,
        },
        460: {
          slidesPerView: 1.5,
        },
        435: {
          slidesPerView: 1.3,
        },
        400: {
          slidesPerView: 1.2,
        },
        320: {
          spaceBetween: 10,
          slidesPerView: 1.15,
        },
      },
    });
  }
});
