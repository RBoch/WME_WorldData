<?php


class WorldDataParser {

  
    function parseCSV($path) {
        $data = [];
        if (($handle = fopen($path, 'r')) !== false) // open file in read-mode
            if (($headerRow = fgetcsv($handle)) !== false) { // get column names from first line as array
                $headerRow = array_map('trim', $headerRow); // trim whitespaces from all elements in this array
                while (($dataRow = fgetcsv($handle)) !== false) { // get each line as array until end of file
                    $dataRow = array_map('trim', $dataRow); // trim whitespaces from all elements in this array
                    $data[] = array_combine($headerRow, $dataRow); // insert data row into array by using column names as keys
                }
            }
        fclose($handle); // close file

        return $data;
    }

    