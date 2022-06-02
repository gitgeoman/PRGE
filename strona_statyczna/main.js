$(document).ready(function () {
  // tworzę instancje mapy na stronie którą przeglądarka wklei na miejsce div o id mymap
  let mymap = L.map("mymap", {
    center: [48.383022, 31.1828699],
    zoom: 6,
    zoomControl: false,
    attributionControl: false,
  });
  //   tworzę zmienną w której będzie adres usługi przeglądania danych przestzrennych
  let lyrOSM = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png");

  // generowanie listy
  for (let item in dane) {
    $("#lista").append(
      `<div class='item'>
          <span class='bold'>${dane[item].date}</span>
          <div><span class='bold'>Location: </span> ${dane[item].location}</div>
          <div><span class='bold'>Description: </span>${dane[item].description}</div>
          <a href='#'> Click for more... </a>
      </div>`
    );

    L.marker([dane[item].latitude, dane[item].longitude]).addTo(mymap);
    console.log(dane[item]);
  }
  mymap.addLayer(lyrOSM);
});
