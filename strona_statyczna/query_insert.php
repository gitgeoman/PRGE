<?php

    include('connect.php');

    
    // $php_zmienna_na_dane_z_formularza_pole_nr_1 =$_POST['object_id'];
    $php_zmienna_na_dane_z_formularza_pole_nr_2 = $_POST['object_date'];
    
    $php_zmienna_na_dane_z_formularza_pole_nr_4 =$_POST['object_lat'];
    $php_zmienna_na_dane_z_formularza_pole_nr_3 =$_POST['object_lng'];
    $php_zmienna_na_dane_z_formularza_pole_nr_5 =$_POST['object_location'];
    $php_zmienna_na_dane_z_formularza_pole_nr_6 =$_POST['object_description'];
    $php_zmienna_na_dane_z_formularza_pole_nr_7 =$_POST['object_sources'];


    $tekst = "INSERT INTO public.aktualnosci(
      object_date, 
      object_wsp, 
      object_location, 
      object_description, 
      object_sources
      )
      VALUES (
        '$php_zmienna_na_dane_z_formularza_pole_nr_2',
        'POINT($php_zmienna_na_dane_z_formularza_pole_nr_3 $php_zmienna_na_dane_z_formularza_pole_nr_4)',
        '$php_zmienna_na_dane_z_formularza_pole_nr_5',
        '$php_zmienna_na_dane_z_formularza_pole_nr_6',
        '$php_zmienna_na_dane_z_formularza_pole_nr_7'           
        );";

    $run_query = pg_query($tekst);

    
    pg_close ($polaczenie);

?>
