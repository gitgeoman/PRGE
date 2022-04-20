<<<<<<< Updated upstream
=======
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

  // tutaj działający filtr do slidera

  let daty = [...new Set(dane.map((item) => item.date))];
  // generowanie listy
  let filtered = dane.filter(function (item) {
    // return item.date == "02/24/2022";
    return item;
  });

  let warstwa;
  let lista_markerow = [];
  for (let item in filtered) {
    $("#lista").append(
      `<div class='item'>
          <span class='bold'>${filtered[item].date}</span>
          <div><span class='bold'>Location: </span> ${filtered[item].location}</div>
          <div><span class='bold'>Description: </span>${filtered[item].description}</div>
          <a href='#'> Click for more... </a>
      </div>`
    );
    // generowanie markerow
    lista_markerow.push(
      L.marker([filtered[item].latitude, filtered[item].longitude])
    );
    console.log(lista_markerow.length);
    warstwa = L.layerGroup(lista_markerow);
    console.log(warstwa);
  }
  // dodawanie markerow
  warstwa.addTo(mymap);
  // warstwa.remove()
  mymap.addLayer(lyrOSM);
});
>>>>>>> Stashed changes
