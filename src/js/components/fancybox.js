import { Fancybox } from "@fancyapps/ui";

document.addEventListener('DOMContentLoaded', () => {
  Fancybox.bind("[data-fancybox]", {
    Thumbs: false,
    Toolbar: {
      display: {
        left: [],
        middle: [],
        right: ["close"],
      },
    },
    Carousel: {
      infinite: true,
    },
  });
});
