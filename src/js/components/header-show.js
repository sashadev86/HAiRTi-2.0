document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    window.scrollY > 120
      ? header.classList.add("active")
      : header.classList.remove("active");
  });
});
