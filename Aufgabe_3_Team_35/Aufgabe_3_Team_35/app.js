// DO NOT CHANGE!
//init app with express, util, body-parser, csv2json
var express = require('express');
var app = express();
var sys = require('util');
var path = require('path');
var bodyParser = require('body-parser');
var Converter = require("csvtojson").Converter;

//register body-parser to handle json from res / req
app.use( bodyParser.json() );

//register public dir to serve static files (html, css, js)
app.use( express.static( path.join(__dirname, "public") ) );

// END DO NOT CHANGE!


/**************************************************************************
****************************** csv2json *********************************
**************************************************************************/

// Globale Variable für World Data JSON
global.jsonWorld;

// Einbinden des File System Modules zum schreiben der JSON Datei
const fs = require("fs");

// Pfad zur World_Data.csv
const csvPath = "world_data.csv";

// Anlegen des Converter Objektes und parsen der CSV zu JSON
var converter = new Converter({});
converter
    .fromFile(csvPath, (err, jsonObj) => {
        // Prüfen ob parsen erfolgreich
        if(err){
            console.log(err);
        }else {
            // Speichern in globale Variable
            jsonWorld = jsonObj;
            // Speichern als Datei
            var content = JSON.stringify(jsonWorld);
            fs.writeFile("world_data.json", content, "utf8", (err) => {
                if(err){
                    console.log(err);
                } else {
                    console.log("Successfuly saved file.")
                }
            } )
        }
    } );

/**************************************************************************
********************** handle HTTP METHODS ***********************
**************************************************************************/


// DO NOT CHANGE!
// bind server to port
var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});