document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  let lastScrollTop = 0;
  let delta = 5;
  let isHeaderVisible = false;

  window.addEventListener("scroll", () => {
    const st = window.scrollY;

    if (Math.abs(lastScrollTop - st) <= delta) return;

    if (st <= 200) {
      // Если прокрутка находится в пределах первых 120px, скрываем хедер
      if (isHeaderVisible) {
        header.classList.remove("active");
        isHeaderVisible = false;
      }
    } else if (st > lastScrollTop) {
      // Если скролл вниз, скрываем хедер
      if (isHeaderVisible) {
        header.classList.remove("active");
        isHeaderVisible = false;
      }
    } else {
      // Если скролл вверх, показываем хедер
      if (!isHeaderVisible) {
        header.classList.add("active");
        isHeaderVisible = true;
      }
    }

    lastScrollTop = st;
  });
});
