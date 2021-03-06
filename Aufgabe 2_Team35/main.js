
function showhide(n){
    var sections = document.getElementsByClassName("showhide");
    var cols = document.getElementsByTagName("col");
    var visibility = cols[n].style.visibility;
    if(visibility != "collapse"){
        for(var i = 0; i < sections.length; i++){
            sections[i].getElementsByTagName("a")[n-2].className = "deactive";
        }
        cols[n].style.visibility = "collapse";
    } else {
        for(var i = 0; i < sections.length; i++){
            sections[i].getElementsByTagName("a")[n-2].className = "active";
        }
        cols[n].style.visibility = "visible";
    }
}


//Code für Sortierung von w3schools https://www.w3schools.com/howto/howto_js_sort_table.asp
function sort(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("sortable");
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc"; 
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    var tbody = table.getElementsByTagName("tbody");
    rows = tbody[0].getElementsByTagName("tr");
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 0; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("td")[n];
      y = rows[i + 1].getElementsByTagName("td")[n];
      /* Check if the two rows should switch place,
      based on the direction, asc or desc: */
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // Each time a switch is done, increase this count by 1:
      switchcount ++; 
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}


function toggleMenu() {
  var x = document.getElementById("myTopnav");
  var y = document.getElementsByClassName("wrapper")
  if (x.className === "mainnav") {
      x.className += " responsive";
      y[0].className += " responsive"
  } else {
      x.className = "mainnav";
      y[0].className = "wrapper";
  }
}

function logoIn(){
  var logo = document.getElementById("logo");
  logo.src = "logo_grey.png"
}

function logoOut(){
  var logo = document.getElementById("logo");
  logo.src = "logo_color.png"

}