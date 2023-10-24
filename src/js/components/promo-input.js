document.addEventListener("DOMContentLoaded", () => {
  const promoButton = document.querySelector(".promo-button");
  const promoLabel = document.querySelector(".promo-label");
  const promoInput = document.querySelector('.promo-input');

  promoButton.addEventListener("click", () => {
    promoButton.classList.add('is-promo-hidden');
    promoLabel.classList.add("is-promo-active");
    console.dir(promoInput);
    promoInput.focus();
  });

  promoInput.addEventListener("blur", () => {
    console.log(promoInput.value);
    if (promoInput.value === "") {
      promoLabel.classList.remove("is-promo-active");
      promoButton.classList.remove("is-promo-hidden");
    }
  });
});
