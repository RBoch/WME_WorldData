<?php
 
// fordert die php datei an
require 'world_data_parser.php';

//holt die CSV Datei aus dem Data Ordner 
$parser = new WorldDataParser();
$data = $parser->parseCSV('data/world_data_v1.csv');

// erstelle XML Datai
$result = $parser -> saveXML($data);

if($result){
    echo "XML Savestatus: erfolgreich ($result)";
} else{
    echo "XML Savestatus: gescheitert ($result)";
}

?>