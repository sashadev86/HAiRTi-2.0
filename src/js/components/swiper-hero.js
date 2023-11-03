import Swiper from 'swiper';
import { EffectCards, Autoplay } from "swiper/modules";

document.addEventListener('DOMContentLoaded', () => {
  const sectionHero = document.querySelector(".hero");
  if(sectionHero) {
    if (window.innerWidth >= 1400) {
      const swiper1 = new Swiper(".swiper-hero", {
        modules: [EffectCards, Autoplay],
        slidesPerView: 1,
        initialSlide: 1,
        spaceBetween: 20,
        centeredSlides: true,
        loop: true,
        allowTouchMove: false,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        speed: 1000,
        effect: "cards",
        cardEffect: {
          rotate: 0,
          slideShadows: true,
        },
      });
    }
  }
})

