// Галерея и лайтбоксы от Fancybox
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});
// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

// init Swiper:

var swiper = new Swiper(".mySwiper", {
  // mousewheel: true,

  slidesPerView: 1, // Отображает 1 слайд одновременно
  slidesPerGroup: 1, // Переключает по 1 слайду за раз
  loop: true, // Позволяет бесконечную прокрутку

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Мобильная навигация
import mobileNav from "./modules/mobile-nav.js";
mobileNav();
