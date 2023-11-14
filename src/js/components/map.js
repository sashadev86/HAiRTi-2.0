document.addEventListener("DOMContentLoaded", () => {
  // Определение функции для загрузки и создания карты
  function loadMap() {
    const map = document.getElementById("map"); // Получение элемента карты из DOM
     const mapLoader = document.querySelector(".loading");

    if (map) {
      // Загрузка библиотеки Yandex Maps API
      const script = document.createElement("script");
      script.src =
        "https://api-maps.yandex.ru/2.1/?apikey=fe250f75-7719-412f-a245-802cd13d0166&lang=ru_RU";
      script.async = true;

      script.onload = () => {
        ymaps.load().then((maps) => {
          const myMap = new maps.Map(map, {
            center: [55.59018, 37.670259],
            zoom: 17,
          });

          const myPlacemark = new maps.Placemark([55.59018, 37.670259], {
            hintContent: "Студия HAIRTI",
            balloonContent:
              "Студия наращивания волос и колористики - HAIRTI. ул. Ряжская 13 к.1",
          });

          myMap.geoObjects.add(myPlacemark);

          mapLoader.style.display = "none";
        });
      };

      document.body.appendChild(script);
    }
  }

  // Определение функции, которая будет вызываться, когда пользователь доскролит до нужного места
  function handleScroll() {
    const rect = map.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      // Пользователь доскролил до элемента, загружаем карту
      loadMap();
      // Удалите обработчик события, чтобы не загружать карту повторно
      window.removeEventListener("scroll", handleScroll);
    }
  }

  // Добавление обработчика события скролла
  window.addEventListener("scroll", handleScroll);
});
