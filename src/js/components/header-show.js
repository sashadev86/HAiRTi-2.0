document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const burger = document.querySelector("[data-burger]");
  const menu = document.querySelector("[data-menu]");

  let lastScrollTop = 0;
  let delta = 5;
  let isHeaderVisible = false;

  // Функция для обработки клика по бургеру
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

  // Обработчик клика по бургеру
  burger.addEventListener("click", toggleMenu);

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
