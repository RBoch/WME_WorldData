<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="utf-8"/>
        <title>WorldData, Team 35</title>
        <meta name="author" content="Sara Fritze, Robert Bochmann">
        <meta name="description" content="Lösung zur Aufgabe 1 Web und Multimedia Engineering WS1718 Team 35">
        <meta name="keyword" content="World, Data, WME">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="stylesheet" href="https://github.com/murtaugh/HTML5-Reset/blob/master/assets/css/reset.css" type="text/css" />
        <link rel="stylesheet" href="main.css">
        <link rel="stylesheet" href="http://fontawesome.io/" type="text/html">
        <link rel="stylesheet" href="https://fonts.google.com/specimen/Roboto" type="text/html">
        <script src="https://use.fontawesome.com/d01e518936.js"></script>
        <script src="main.js"></script>
        <!-- title, description, author, keywords -->        
    </head>
    <body>
<!-- Logo und Navigationsleiste -->
        
            <header>
                <div id="headwrapper">
                <a href="#">
                    <img id="logo" src="logo_color.png" alt="WorldData" onmouseover="logoIn()" onmouseout="logoOut()">
                </a> 
                    <div id="toggle" onclick="toggleMenu()">
                        <i  class="fa fa-bars" aria-hidden="true" ></i>
                    </div>
                  
                <nav id="myTopnav" class="mainnav">
                    

                    <ul class="container" onclick="myFunction(this)" id="menu_items">


                        <li>
                            <a href="">
                                <i class="fa fa-list-ul" aria-hidden="true"></i>
                                A1 - Table
                            </a>
                        </li>
                        <li>                           
                            <a href="parse.php">
                                <i class="fa fa-list-ul" aria-hidden="true"></i>
                                A2 - Parse
                            </a>
                        </li>
                        <li>                           
                            <a href="save.php">
                                <i class="fa fa-list-ul" aria-hidden="true"></i>
                                A2 - Save
                            </a>
                        </li>
                        <li>                            
                            <a href="print.php">
                                <i class="fa fa-list-ul" aria-hidden="true"></i>
                                A2 - Print
                            </a>
                        </li>
                        <li>                           
                            <a href="">
                                <i class="fa fa-list-ul" aria-hidden="true"></i>
                                A3 - REST
                            </a>
                        </li>
                        <li>                            
                            <a href="">
                                <i class="fa fa-list-ul" aria-hidden="true"></i>
                                A4 - Via
                            </a>
                        </li>
                    </ul>
                </nav>
                <script>
                    function myFunction(x) {
                        x.classList.toggle("change");
                    }
                </script>
                </div>
            </header>
            <div class="wrapper">
    
            <h1>World Data Overview ...</h1>
            <div class="textbox">
                <h2>Data (word)</h2>
                <p>
                    In one sense, data is the plural form of datum. Datum actually can also be a count noun with the plural datums (see usage in datum article) 
                    that can be used with cardinal numbers (e.g. "80 datums"); data (originally a Latin plural) is not used like a normal count noun with 
                    cardinal numbers and can be plural with such plural determiners as these and many or as an uncountable noun with a verb in the singular form.
                    [1] Even when a very small quantity of data is referenced (one number, for example) the phrase piece of data is often used, as opposed to datum. 
                    The debate over appropriate usage continues,[2][3][4] but "data" as a singular form is far more common.[5]
                </p>
                <p>
                    In English, the word datum is still used in the general sense of "an item given". In cartography, geography, nuclear magnetic 
                    resonance and technical drawing it is often used to refer to a single specific reference datum from which distances to all other
                     data are measured. Any measurement or result is a datum, though data point is now far more common.[6]
                </p>
                <p>
                    Data is most often used as a singular mass noun in everyday usage.[7][8] Some major newspapers such as The New York Times use it 
                    either in the singular or plural. In the New York Times the phrases "the survey data are still being analyzed" and "the first year 
                    for which data is available" have appeared within one day.[9] The Wall Street Journal explicitly allows this usage in its style guide.[10] 
                    The Associated Press style guide classifies data as a collective noun that takes the singular when treated as a unit but the plural when referring 
                    to individual items ("The data is sound.", and "The data have been carefully collected.").[11]
                </p>
                <p>
                    In scientific writing data is often treated as a plural, as in These data do not support the conclusions, but the word is also used as a 
                    singular mass entity like information, for instance in computing and related disciplines.[12] British usage now widely accepts treating data 
                    as singular in standard English,[13] including everyday newspaper usage[14] at least in non-scientific use.[15] UK scientific publishing still 
                    prefers treating it as a plural.[16] Some UK university style guides recommend using data for both singular and plural use[17] and some recommend 
                    treating it only as a singular in connection with computers.[18] The IEEE Computer Society allows usage of data as either a mass noun or plural based 
                    on author preference,[19] while IEEE in the editorial style manual indicates to always use the plural form.[20] Some professional 
                    organizations and style guides[21] require that authors treat data as a plural noun. For example, the Air Force Flight Test Center 
                    specifically states that the word data is always plural, never singular.[22]
                </p>
                <p>
                    <a href="https://en.wikipedia.org/wiki/Data_(word)">Wikipedia</a>
                </p>
            </div>
            <div class="showhide">
                Show/Hide: 
                 <a class="active" onclick="showhide(2)">birth rate</a>  
                | <a class="active" onclick="showhide(3)">cellphones</a> 
                | <a class="active" onclick="showhide(4)">children</a> 
                | <a class="active" onclick="showhide(5)">electric usage</a> 
                | <a class="active" onclick="showhide(6)">internet usage</a> 
            </div>
            <!-- World Data Tabelle -->
            <table id="sortable">
                    <div class="table">
                        
       <!-- Hier die PHP Anweisung -->
                        
                        <?php

       

        ?>
    </div>
            </table>
            <div class="showhide">
                Show/Hide: 
                 <a class="active" onclick="showhide(2)">birth rate</a>  
                | <a class="active" onclick="showhide(3)">cellphones</a> 
                | <a class="active" onclick="showhide(4)">children</a> 
                | <a class="active" onclick="showhide(5)">electricity usage</a> 
                | <a class="active" onclick="showhide(6)">internet user</a> 
            </div>
            <footer>
                First Course Exercise
                <b>HTML, CSS and JS</b> of the lecture Web and Multimedia Engineering.
                <p>
                    this solution has been created by:
                    <br> Sara Fritze (s1072515), Robert Bochmann (s9584289), Team 35
                </p>
            </footer>
        </div>
    </body>
</html>





    








