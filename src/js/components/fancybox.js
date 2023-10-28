import { Fancybox } from "@fancyapps/ui";

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
