function init(){
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/items",
        async: true,
        success: (data) => {
            fillTable(data)
        }
    })
    
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/properties",
        async: true,
        success: (data) => {
            fillProperties(data)
        }
    })
}

function fillTable(data){
    console.log(data);
    var table = document.getElementById("table_body");
    for(i = 0; i < data.length; i++){
        var tr = document.createElement("tr");
        
        for (var key in data[i]){
            var td = document.createElement("td");
            var value = data[i][key];
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