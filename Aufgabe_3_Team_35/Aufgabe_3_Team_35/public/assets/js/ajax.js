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
        if(id1 != ""){
            URL += "/" + id1;
            if(id2 != ""){
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
});

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

function fillProperties(data){
    var selection = document.getElementById("prop_selection")
    for(var option in data){
        var opt = document.createElement("option");
        opt.innerHTML = data[option];
        opt.value = option;
        selection.appendChild(opt)
    }
}




function addCountry(){
    alert("add country");
}

function deletCountry(){
    alert("delet country");
}