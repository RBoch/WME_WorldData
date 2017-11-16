<?php
 
// fordert die php datei an
require 'world_data_parser.php';

//holt die CSV Datei aus dem Data Ordner 
$parser = new WorldDataParser();
$data = $parser->parseCSV('data/world_data_v1.csv');

// Element wird in einer Schriftart mit fester Breite angezeigt, wobei Leerzeichen und Zeilenumbrüche erhalten bleiben.
echo '<pre>';
// schreibt die Datei aus dem Dataordner, r - nur lesen 
print_r($data);
echo '</pre>';

?>