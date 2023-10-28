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
    });
  }
});
