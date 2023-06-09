const pages = {

       1: "I can read your mind",
       2: "pick a number between 1 and 99",
       3: "add both digits together to get a new number",
       4: "subtract your new number from the original number",
       5: "generateSymbols()", //random symbols
       6: "this dummy"


};
var currentpage = 0;
let symbols = ["@","&","A","%","$","B","C","D", "("];
let currentsymbol = "";
//currentsymbol
function next_slide() {
       // increment currentpage by 1
       // invoke the render function
       currentpage++;
       render();
}
function restart() {
       // reset currentpage to 1
       //invoke render function
       currentpage = 1;
       render();
}
function render() {
       //display the 
       document.getElementById("display").textContent = pages[currentpage];
       //read from state and create the view
       //assigns the text content
       if (currentpage === 5) {
              generateSymbols();
       }
       if (currentpage === 6) {
              generateSymbols();
       }
}
function generateSymbols() {
       //set chosen symbol from the array randomly
       currentsymbol = symbols[Math.floor(Math.random() * symbols.length)];
       // little function to randomly choose from the symbols that doesn't want to work
       let symbolstring;
       for ( symbolstring = 0; symbolstring < 10; symbolstring++) {

              symbolstring += currentsymbol;
       }
       pages[5] = symbolstring;
       pages[6] = "It's " + currentsymbol + " dummy";
       //look through 0-100
       //concatenate a string or create elements to pin back to the DOM
       //set pages[5] to string or a placeholder
       //replace all blank spaces with symbols in array
       //set pages[6] to 'whatever dummy' concatenation of chosen symbol and the string
}
