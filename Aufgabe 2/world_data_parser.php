<?php


class WorldDataParser {
/*
* Parsen: Daten aus der CSV datei holen bzw. lesen und sie wird in einer Array-Struktur ausgegeben
*
* Die CSV Datei wird Zeilenweise "geparst"
* alle Elemente in einer Zeile müssen durch Komma getrennt sein
* Die erste Zeile wird so verarbeitet, als ob sie die Spaltennamen enthält. 
* Dann werden alle Elemente einer Zeile in ein Array eingefügt. 
* Ein Array mit all diesen Feldern werden zurückgegeben.
*/
  
    function parseCSV($path) {
        $data = [];
        if (($handle = fopen($path, 'r')) !== false) /* öffnen der Datei, nur lesen*/
            if (($headerRow = fgetcsv($handle)) !== false) { /*Spaltennamen aus erster Zeile als Array holen*/
                $headerRow = array_map('trim', $headerRow); 
                /*  trimmt bzw. kürzen Leerzeichen von allen Elementen vom headerRow (array)*/
                while (($dataRow = fgetcsv($handle)) !== false) { /* jeder Zeile ist bis zum Ende ist ein Array*/
                    $dataRow = array_map('trim', $dataRow);
                    /* trimmt Leerzeichen von allen Elementen vom  dataRow (array)*/
                    $data[] = array_combine($headerRow, $dataRow); /*fügt Datenzeilen in Array ein, indem Spaltennamen als Schlüssel verwendet werden*/
                }
            }
        fclose($handle); // schließt die Datei 

        return $data;
    }

    /* 
    *es wird als XML Datei gespeichert
    *
    *
    */
    function saveXML() {}
    
    /* 
    *es wird wie in einer HTML-Tabelle dargestellt
    *
    *
    */
    function printXML() {}