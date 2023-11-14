import { Fancybox } from "@fancyapps/ui";

Fancybox.bind("[data-fancybox]", {});

document.querySelectorAll(".form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    Fancybox.close();
    Fancybox.show([
      {
        src: "#dialog-success",
        type: "inline",
      },
    ]);
  });
});
