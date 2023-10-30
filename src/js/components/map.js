import ymaps from "ymaps";

document.addEventListener("DOMContentLoaded", () => {
  ymaps
    .load(
      "https://api-maps.yandex.ru/2.1/?apikey=fe250f75-7719-412f-a245-802cd13d0166&lang=ru_RU"
    )
    .then((maps) => {
      const map = document.getElementById("map"); // Получение элемента карты из DOM

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
    });
});
