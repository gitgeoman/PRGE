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
  mymap.addLayer(lyrOSM);

  // generowanie listy

  let layer_group;
  let filtered = [];

  // lista z datami
  // używam set żeby wygenerować unikatowe daty z listy
  let daty = [...new Set(dane.map((item) => item.date))];
  console.log(daty.length);

  $(".slidecontainer").replaceWith(
    `<input type="range" min="1" max=${daty.length} value="10" class="slider" id="myRange"></input>`
  );

  $("#myRange").change((event) => {
    filtered = dane.filter(function (element) {
      return element.date == daty[event.target.value];
    });

    console.log(event.target.value, daty[event.target.value]);
    console.log(filtered);

    let markers_list = [];
    $("#lista").empty();
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
      markers_list.push(
        L.circleMarker([filtered[item].latitude, filtered[item].longitude])
      );
    }
    layer_group?.removeFrom(mymap);
    console.log(markers_list.length);
    layer_group = L.layerGroup(markers_list);
    layer_group.addTo(mymap);
  });
});
