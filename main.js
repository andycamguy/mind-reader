const pages = {

       1: "I can read your mind",
       2: "pick a number between 1 and 99",
       3: "add both digits together to get a new number",
       4: "subtract your new number from the original number",
       5: "", //random symbols
       6: ""


};
var currentpage = 1;
let symbols = ["@", "&", "A", "%", "$", "B", "C", "D", "("];
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

}
function generateSymbols() {
       //set chosen symbol from the array randomly
       currentsymbol = symbols[Math.floor(Math.random() * symbols.length)];
       // little function to randomly choose from the symbols that doesn't want to work
       let symbolstring = "";
       //look through 0-100
       for (i = 0; i < 100; i++) {
              //check for an interval of 9 
              if (i % 9 === 0) {
                     // tell symbolstring to be equal to symbolstring(itself a number)and concatenate with currentsymbol a string
                     symbolstring = symbolstring += currentsymbol;
                     //replace all blank spaces with symbols in array
                     
              }
              else
              {
                     currentsymbol = symbols[Math.floor(Math.random() * symbols.length)];
              }
              // add a random symbol from the symbols array, set symbolstring = symbolstring + symbol[randomindex]
       }
       //set pages[5] to string or a placeholder
       pages[5] = symbolstring;
       //set pages[6] to 'whatever dummy' concatenation of chosen symbol and the string
       pages[6] = "It's " + currentsymbol + " dummy";
       //concatenate a string or create elements to pin back to the DOM


}
