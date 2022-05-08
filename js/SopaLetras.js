
function generaTabla() {   
    // get the reference for the body
    var mybody = document.getElementById("mtabla");

    // creates <table> and <tbody> elements
    mytable     = document.createElement("table");
    mytablebody = document.createElement("tbody");

    let contenido = [            
       ["C","Ñ","P","A","R","A","M","E","T","R","O","B","V","K","D","I","S","E","Ñ","O"],
       ["O","H","E","R","E","N","C","I","A","L","R","T","N","O","A","N","E","A","W","C"],
       ["D","A","Q","O","R","G","U","I","D","Ñ","A","L","M","V","A","G","N","A","S","L"],
       ["I","A","T","P","R","A","L","E","A","S","O","A","E","W","A","E","T","O","A","A"],
       ["G","P","T","A","O","A","Q","A","H","S","A","O","X","A","M","N","O","L","R","S"],
       ["O","A","T","A","R","S","O","F","T","W","A","R","E","A","S","I","R","L","T","E"],
       ["Y","A","T","W","D","A","A","X","A","S","V","A","E","X","A","E","N","O","A","C"],
       ["L","E","N","G","U","A","J","E","A","C","A","B","U","G","M","R","O","R","K","S"],
       ["A","K","T","A","Q","E","O","I","A","M","A","O","P","U","A","I","U","R","A","S"],
       ["J","A","X","Ñ","A","P","A","O","A","B","D","A","T","O","S","A","W","O","C","P"],
       ["W","E","K","K","Ñ","A","P","S","A","B","U","T","P","A","E","A","C","S","A","S"],
       ["W","Z","P","R","O","G","R","A","M","A","C","I","O","N","Ñ","A","R","E","A","E"],
       ["W","B","T","Q","A","T","R","A","I","O","B","J","E","T","O","A","N","D","A","D"],
       ["Z","W","T","A","I","A","L","F","U","N","C","I","O","N","V","A","F","A","X","E"],
       ["H","T","T","P","M","E","T","O","D","O","A","U","Z","A","Q","E","K","A","P","R"],
       ["O","L","Y","L","J","Ñ","K","P","D","E","R","A","V","A","J","E","I","B","E","N"],
       ["Y","B","U","R","K","Q","J","L","R","E","C","V","E","M","J","M","O","V","E","M"]

        ];
    

    // creating all cells
    for(var i = 0; i < 17; i++) {
        // creates a <tr> element
        mycurrent_row = document.createElement("tr");

        for(var j = 0; j < 20; j++) {
            
            // creates a <td> element
            mycurrent_cell = document.createElement("td");
            // creates a Text Node
            
            currenttext = document.createTextNode(contenido[i][j]);
            // appends the Text Node we created into the cell <td>
            mycurrent_cell.appendChild(currenttext);

            
            // appends the cell <td> into the row <tr>
            mycurrent_row.appendChild(mycurrent_cell);
        }
       
        // appends the row <tr> into <tbody>
        mytablebody.appendChild(mycurrent_row);
    }

    // appends <tbody> into <table>
    mytable.appendChild(mytablebody);
    // appends <table> into <body>
    mybody.appendChild(mytable);
    // sets the border attribute of mytable to 2;
    mytable.setAttribute("border","2");
    
}