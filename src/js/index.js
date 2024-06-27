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
  slidesPerView: 1, // Отображает 1 слайд одновременно
  slidesPerGroup: 1, // Переключает по 1 слайду за раз
  loop: true, // Позволяет бесконечную прокрутку

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
    enabled: false, // Отключаем пагинацию по умолчанию для больших экранов
  },
});

// Функция для обновления конфигурации Swiper при изменении размера экрана
function updateSwiper() {
  if (window.innerWidth < 481) {
    swiper.pagination.enable();
    swiper.navigation.disable();
  } else {
    swiper.pagination.disable();
    swiper.navigation.enable();
  }
  swiper.update(); // Обновляем Swiper после изменения конфигурации
}

// Изначальная проверка при загрузке страницы
updateSwiper();

// Обработчик события resize
window.addEventListener("resize", updateSwiper);

// Мобильная навигация
import mobileNav from "./modules/mobile-nav.js";
mobileNav();
