var keys = [];

// initialisiert Tabelle mit World Data und properties Auswahlfeld
$(document).ready(() => {
    //GET DATA
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/items",
        async: true,
        success: (data) => {
            fillTable(data)
        }
    })
    
    //GET PROPERTIES
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/properties",
        async: true,
        success: (data) => {
            fillProperties(data)
            keys = data;
            hideProperty(keys[6].replace(/ /g, "_"));
            hideProperty(keys[7].replace(/ /g, "_"));
            hideProperty(keys[8].replace(/ /g, "_"));
            hideProperty(keys[10].replace(/ /g, "_"));
            hideProperty(keys[11].replace(/ /g, "_"));
            hideProperty(keys[12].replace(/ /g, "_"));
            hideProperty(keys[13].replace(/ /g, "_"));
        }
    });
});

// GET Anfrage für items
$(document).ready(() => {
    $("#country_filter").on("submit", (e) => {
        e.preventDefault();
        var form = document.forms["country_filter"];
        var id1 = form["country_filter_id"].value;
        var id2 = form["country_filter_id2"].value;
    
        var URL = "http://localhost:3000/items";
    
        // URL String für Anfrage von Land Daten oder range Daten
        if(id1 != ""  && /^\d+$/.test(id1)){
            id1 = formatID(id1);
            console.log("ID1 " + id1);
            URL += "/" + id1;
            if(id2 != "" && /^\d+$/.test(id2)){
                id2 = formatID(id2);
                console.log("ID2 " + id2);
                URL += "/" + id2;               
            }
        }
    
        // HTML GET
        $.ajax({
            type: "GET",
            url: URL,
            async: true,
            success: (data) => {
                fillTable(data)
            }
        });
    });
})


// zeige auf Klick Eigenschaft in Tabelle
$(document).ready(() => {
    $("#show_selected_prop").click( (e) => {
        e.preventDefault();
        var select = document.getElementById("prop_selection").value;
        showProperty(keys[select].replace(/ /g, "_"));
    });
});


// verstecke auf Klick Eigenschaft in Tabelle
$(document).ready(() => {
    $("#hide_selected_prop").click( (e) => {
        e.preventDefault();
        var select = document.getElementById("prop_selection").value;
        hideProperty(keys[select].replace(/ /g, "_"));
    });
});

// HTTP POST item
$(document).ready(() => {
    $("#country_add").on("submit", (e) => {
        e.preventDefault();

        // beziehe Eingabe
        var form = document.forms["country_add"];
        var name = form["country_name"].value;
        var prop_1 = document.getElementById("prop_1_selection").value;
        var prop_2 = document.getElementById("prop_2_selection").value;
        var prop_1_value = form["country_birth"].value;
        var prop_2_value = form["country_cellphone"].value;

        // JSON string vorlage
        var data =  '{"name": "/",' +
                    '"birth rate per 1000": "/",' +
                    '"cell phones per 100": "/",' +
                    '"children per woman": "/",' +
                    '"electricity consumption per capita": "/",' +
                    '"gdp_per_capita": "/",' +
                    '"gdp_per_capita_growth": "/",' +
                    '"inflation annual": "/",' +
                    '"internet user per 100": "/",' +
                    '"life expectancy": "/",' +
                    '"military expenditure percent of gdp": "/",' +
                    '"gps_lat": "/",' +
                    '"gps_long": "/"}';

        // fülle JSON mit angegebenen Daten
        data = JSON.parse(data);
        data.name = name;
        data[keys[prop_1]] = prop_1_value;
        data[keys[prop_2]] = prop_2_value;

        // POST Request
        $.ajax({
            type: "POST",
            url: "http://localhost:3000/items",
            async: true,
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: () => {
                location.reload();
            }
        });  
    })
})


//HTTP DELETE
$(document).ready(() => {
    $("#country_delete").on("submit", (e) => {
        e.preventDefault();

        // Finde zu löschendes Land
        var form = document.forms["country_delete"];
        var id = form["country_delete_id"].value;

        // URL String letztes Element oder id
        var URL = "http://localhost:3000/items";       
        if(id != ""  && /^\d+$/.test(id)){
            id = formatID(id);
            URL += "/" + id;
        }

        // HTTP DELETE
        $.ajax({
            type: "DELETE",
            url: URL,
            async: true,
            success: () => {
                location.reload();
            }
        });

    });
})

// füllt Tabelle mit Inhalt aus Abfrage
function fillTable(data) {
    // Lösche möglichen Inhalt aus Tabelle
    $("#table_body tr").remove();

    var table = document.getElementById("table_body");

    // Prüfe ob ein Datensatz oder mehr verfügbar und fülle Tabelle dementsprechend
    if (data.length) {
        // Füllen mit >1 Datensätzen
        for (i = 0; i <= data.length; i++) {
            var tr = document.createElement("tr");

            for (var key in data[i]) {
                var td = document.createElement("td");
                td.setAttribute("class", key.replace(/ /g, "_"));
                var value = data[i][key];
                td.textContent = value;
                tr.appendChild(td)
            }
            table.appendChild(tr);
        }
    } else {
        // Fülle Tabelle mit einem Datensatz
        var tr = document.createElement("tr");
        for (var key in data) {
            var td = document.createElement("td");
            var value = data[key];
            td.textContent = value;
            tr.appendChild(td)
        }
        table.appendChild(tr);
    }

}

// füllt Auswahlboxen mit Eigenschaften;
function fillProperties(data){
    // Box für ein/ausblenden
    var selection = document.getElementById("prop_selection")
    for(var option in data){
        var opt = document.createElement("option");
        opt.innerHTML = data[option].replace(/_/g, " ");
        opt.value = option;
        selection.appendChild(opt)
    }

    // Box Land hinzufügen Eigenschaft 1
    var selection_prop_1 = document.getElementById("prop_1_selection")
    for(var option in data){
        if(option <= 1){
            continue;
        }
        var opt = document.createElement("option");
        opt.innerHTML = data[option].replace(/_/g, " ");
        opt.value = option;
        selection_prop_1.appendChild(opt)
    }

    // Box Land hinzufügen Eigenschaft 2
    var selection_prop_2 = document.getElementById("prop_2_selection")
    for(var option in data){
        if(option <= 1){
            continue;
        }
        var opt = document.createElement("option");
        opt.innerHTML = data[option].replace(/_/g, " ");
        opt.value = option;
        selection_prop_2.appendChild(opt)
    }
}


// blendet Eigenschaft in Tabelle ein
function showProperty(property){
    $("." + property).show();
}

// blendet Eigenschaft in Tabelle aus
function hideProperty(property){
    $("." + property).hide();
}

// formatiert eingegebene zahlen in dreistelliges format (zB. 1 -> 001)
function formatID(id){
    if (id.length >= 3){
        return id;
    }
    while(id.length < 3){
        id = "0" + id;
    }
    return id;
}