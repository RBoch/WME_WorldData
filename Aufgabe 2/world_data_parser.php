<?php


class WorldDataParser {
/*
*Aufgabe: Serverseitiges Parsen einer CSV Datei
*
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
    * Aufgabe: Eingelesene Datenstruktur als XML Datei speichern
    *
    *
    */
    // Funktion zur Rekursiven XML erstellung
    function arrayToXml($data, $xmlData){
        foreach ($data as $key => $value) {
            $key = str_replace(" ", "_", $key);
            if(is_numeric($key)){
                $key = "Country";
            }
            if (is_array($value) ){
                $sub = $xmlData->addChild($key);
                $this -> arrayToXml($value, $sub);
            } else {
                $xmlData -> addChild("$key", htmlspecialchars("$value"));
            }
        }
    }

    function saveXML($data) {

        // Erstelle ein XML Objekt
        $xmlData = new SimpleXMLElement('<?xml version="1.0"?><Countries></Countries>');

        // Konvertiere Array zu XML
        $this -> arrayToXml($data, $xmlData);

        // Speichern der erstellten XML
        $result = $xmlData -> asXML("world_data.xml");

        // Gebe $result zurück
        return $result;
    }
    
    /*
    *Aufgabe: Verwenden der erstellten XML Datei und Transformation via XSLT in valides HTML5
    *
    *
    */
    function printXML($xmlFile, $xsltFile) {
        
        $xml = new DOMDocument();
        $xml -> load($xmlFile);

        $xsl = new DOMDocument();
        $xsl -> load($xsltFile);

        $processor = new XSLTProcessor();
        
        $processor -> importStyleSheet($xsl);
        
        $table = $processor -> transformToXML($xml);
        return $table;
    }
}