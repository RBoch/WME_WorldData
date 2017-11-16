<?php
 

require 'world_data_parser.php';

$parser = new WorldDataParser();
$data = $parser->parseCSV('data/world_data_v1.csv');

echo '<pre>';
print_r($data);
echo '</pre>';

?>