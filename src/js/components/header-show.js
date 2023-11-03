document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const burger = document.querySelectorAll("[data-burger]");
  const menu = document.querySelector("[data-menu]");
  let lastScrollTop = 0;
  let delta = 5;
  let isHeaderVisible = false;

  // Функция для обработки клика по первой кнопке бургера
  function toggleMenu() {
    if (menu.classList.contains("menu--active")) {
      if (!isHeaderVisible) {
        header.classList.add("active");
        isHeaderVisible = true;
      }
    } else {
      menu.classList.remove("menu--active");
      burger.classList.remove("burger--active");
      header.classList.remove("active");
      isHeaderVisible = false;
    }
  }

  // Функция для обработки клика по второй кнопке бургера
  function toggleSecondBurger() {
    burger[0]?.classList.add("hidden-burger");
    burger[0]?.classList.remove("active-burger");

    if (menu.classList.contains("menu--active")) {
        header.classList.add("active");
        burger[0]?.classList.add("hidden-burger");
        isHeaderVisible = true;
      } else {
        header.classList.remove("active");
        burger[0]?.classList.remove("hidden-burger");
        burger[0]?.classList.add("active-burger");
      }
  }

  // Обработчик клика по первой кнопке бургера
  burger[0].addEventListener("click", toggleMenu);

  // Обработчик клика по второй кнопке бургера
  burger[1].addEventListener("click", toggleSecondBurger);

  window.addEventListener("scroll", () => {
    const st = window.scrollY;

    if (Math.abs(lastScrollTop - st) <= delta) return;

    if (st <= 200) {
      if (isHeaderVisible && !menu.classList.contains("menu--active")) {
        header.classList.remove("active");
        isHeaderVisible = false;
      }
    } else if (st > lastScrollTop) {
      if (isHeaderVisible && !menu.classList.contains("menu--active")) {
        header.classList.remove("active");
        isHeaderVisible = false;
      }
    } else {
      if (!isHeaderVisible && !menu.classList.contains("menu--active")) {
        header.classList.add("active");
        isHeaderVisible = true;
      }
    }

    lastScrollTop = st;
  });
});
