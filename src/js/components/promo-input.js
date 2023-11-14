document.addEventListener("DOMContentLoaded", () => {
  const promoButton = document.querySelectorAll(".promo-button");
  const promoLabel = document.querySelectorAll(".promo-label");
  const promoInput = document.querySelectorAll('.promo-input');
  const TIME_100_MS = 100;

  promoButton.forEach((item, index) => {
    item.addEventListener("click", () => {
      item.classList.add('is-promo-hidden');
      promoLabel[index].classList.add("is-promo-active");

      setTimeout(() => {
        promoInput[index].focus();
      }, TIME_100_MS);
    });
  })

  promoInput.forEach((item, index) => {
    item.addEventListener("blur", () => {
      if (item.value === "") {
        promoLabel[index].classList.remove("is-promo-active");
        promoButton[index].classList.remove("is-promo-hidden");
      }
    });
  })
});
