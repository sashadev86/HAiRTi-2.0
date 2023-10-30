import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  // Анимация появления блоков при загрузке
  const sectionHero = document.querySelector(".hero");
  const pageNav = sectionHero.querySelector(".hero__nav");
  const pageTitle = sectionHero.querySelector(".hero__title");
  const social = sectionHero.querySelector(".social");
  const form = sectionHero.querySelector(".form");
  const slider = sectionHero.querySelector(".hero__swiper");
  const sectionExamples = document.querySelector(".examples");

  console.log(sectionHero);

  const animationPageNav = gsap.from(pageNav, {
    opacity: 0,
    duration: 1,
    delay: 0.5,
  });

  const animationPageTitle = gsap.from(pageTitle, {
    opacity: 0,
    duration: 1,
    delay: 0.9,
  });

  const animationSocial = gsap.from(social, {
    opacity: 0,
    duration: 1,
    delay: 1.4,
  });

  const animationForm = gsap.from(form, {
    opacity: 0,
    duration: 1,
    delay: 1.6,
  });

  const animationSlider = gsap.from(slider, {
    opacity: 0,
    duration: 1,
    delay: 2,
  });

  const animationSectionExamples = gsap.from(sectionExamples, {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 2.5,
  });

  //////////////////////////////////////////

  // Анимация для svg hero
  const pathHero = document.getElementById("animatedPathHero");

  // Начальное значение ширины линии
  pathHero.style.strokeDasharray = pathHero.getTotalLength();
  pathHero.style.strokeDashoffset = -pathHero.getTotalLength(); // Начинаем с полной длины

  // Анимация увеличения ширины линии с лева на право
  gsap.to(pathHero, { strokeDashoffset: 0, duration: 3, ease: "power1.inOut" });

  //////////////////////////////////////////

  // Анимация для svg price
  const pathPrice = document.getElementById("animatedPathPrice");

  // Начальное значение ширины линии
  pathPrice.style.strokeDasharray = pathPrice.getTotalLength();
  pathPrice.style.strokeDashoffset = pathPrice.getTotalLength(); // Начинаем с полной длины

  // Создайте анимацию с GSAP
  const heroAnimation = gsap.to(pathPrice, {
    strokeDashoffset: 0,
    duration: 2.2,
    ease: "power1.inOut",
  });

  // ScrollTrigger к анимации
  ScrollTrigger.create({
    trigger: ".price",
    start: "top center", // Начинаем анимацию, когда верхнее "top" содержимое секции становится видимым в центре "center" окна просмотра.
    animation: heroAnimation, // Запускаем анимацию
    toggleActions: "play none none reverse", // Определяет, что делать при скроллинге
    // markers: true, // Полезно для отладки
  });

  //////////////////////////////////////////

  // Секции
  const priceSection = document.querySelector(".price");
  const contactsSection = document.querySelector(".contacts");
  const footerSection = document.querySelector(".footer");

  // Анимация для секции "Price"
  const priceAnimation = gsap.from(priceSection, {
    opacity: 0,
    x: 100, // Плавное появление справа
    duration: 1.1,
    paused: true,
  });

  // Анимация для секции "Contacts"
  const contactsAnimation = gsap.from(contactsSection, {
    opacity: 0,
    x: -100, // Плавное появление с лево
    duration: 1.1,
    paused: true,
  });

  // Анимация для секции "Footer"
  const footerAnimation = gsap.from(footerSection, {
    opacity: 0,
    y: 100, // Плавное появление снизу
    duration: 1.1,
    paused: true,
  });

  // ScrollTrigger для секции "Price"
  ScrollTrigger.create({
    trigger: priceSection,
    start: "top 80%", // Начало анимации, когда секция "Price" находится на 80% высоты вьюпорта
    end: "bottom 20%", // Завершение анимации, когда секция "Price" находится на 20% высоты вьюпорта
    // markers: true, // Маркеры для отладки
    onEnter: () => priceAnimation.play(), // Когда секция "Price" видна, начать анимацию
    onLeaveBack: () => priceAnimation.reverse(), // Когда секция "Price" скрыта, откатить анимацию
  });

  // ScrollTrigger для секции "Contacts"
  ScrollTrigger.create({
    trigger: contactsSection,
    start: "top 80%", // Начало анимации, когда секция "Contacts" находится на 80% высоты вьюпорта
    end: "bottom 20%", // Завершение анимации, когда секция "Contacts" находится на 20% высоты вьюпорта
    // markers: true, // Маркеры для отладки
    onEnter: () => contactsAnimation.play(), // Когда секция "Contacts" видна, начать анимацию
    onLeaveBack: () => contactsAnimation.reverse(), // Когда секция "Contacts" скрыта, откатить анимацию
  });

  // ScrollTrigger для секции "Footer"
  ScrollTrigger.create({
    trigger: footerSection,
    start: "top bottom", // Начало анимации, когда секция "Footer" находится на 80% высоты вьюпорта
    end: "top center", // Завершение анимации, когда секция "Footer" находится на 20% высоты вьюпорта
    // markers: true, // Маркеры для отладки
    onEnter: () => footerAnimation.play(), // Когда секция "Footer" видна, начать анимацию
    onLeaveBack: () => footerAnimation.reverse(), // Когда секция "Footer" скрыта, откатить анимацию
  });
});
