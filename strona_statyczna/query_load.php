<?php
    require_once('connect.php');

    $result_of_query = pg_query("
    SELECT 
        id,
        tekst,
        ST_AsGeoJSON(wsp) as wsp 
    FROM 
        public.tabelka_z_danymi");

    $tablica=pg_fetch_all($result_of_query);

    // print_r($tablica);

    $tablica_na_geoJSOn=[];
    foreach($tablica AS $wiersz){
        $wiersz['wsp']=json_decode($wiersz['wsp']);
       
        $feature_GEOJSON = [
            "type"=>"Feature",
            "geometry"=>$wiersz['wsp'],
            "properties"=>$wiersz['tekst']
        ];
        array_push($tablica_na_geoJSOn,$feature_GEOJSON);
    }
    $tablica_na_kolekcje_obiektow = [
        "type"=>"FeatureCollection",
        "features"=>$tablica_na_geoJSOn
    ];
    echo json_encode($tablica_na_kolekcje_obiektow);



    pg_close($polaczenie);

?>
