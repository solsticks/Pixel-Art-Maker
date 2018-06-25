// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

    //Set the grid and current color to #000
var theGrid = $("#pixelCanvas");
var currentColor = "#000";

    // Prevent default submit behavior and call makeGrid function
$("#sizePicker").submit(function(e) {
      e.preventDefault();
      makeGrid();
    });
 
    //Change the currentColor to the selected one
$("#colorPicker").change(function() {
      currentColor = $(this).val();
    });
  
    //If the user clicks or moves the mouse in the grid
    //while holding the left mouse button down draw the pixels
    theGrid.on("mousemove", "td", function(e) {
      if (e.buttons === 1) {
        $(this).css("background-color", currentColor); //Draw the td that the user hovers on
      }
    });
  
    theGrid.on("click", "td", function(e) {
      $(this).css("background-color", currentColor); //Draw the td that the user clicks
    });
  
    //Build the grid
    function makeGrid() {
      //Set the grid dimensions;
      var gridHeight = $("#inputHeight").val();
      var gridWidth = $("#inputWeight").val();
      theGrid.empty(); //Empty the grid and start over
      // Create rows
      for (var x = 0; x <= gridHeight - 1; x++) {
        theGrid.append("<tr>"); //Start Row
        // Create columns for each row
        for (var y = 0; y <= gridWidth - 1; y++) {
          $("tr:eq(" + x + ")").append("<td></td>");
        }
        theGrid.append("</tr>"); //End Row
          
          
      }
    
    };
  
  