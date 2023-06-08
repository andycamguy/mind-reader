
var currentpage=0;
const pages = {

       1: "I can read your mind",
       2: "pick a number between 1 and 99",
       3: "add both digits together to get a new number",
       4: "subtract your new number from the original number",
       5:" ",  //random symbols
       6: "its this dummy"

}
let symbols = ["&","@","$","B","A","%", ""];
let currentsymbol = "";
//currentsymbol
//
function next_slide() {
     // increment currentpage by 1
     // invoke the render function
     currentpage++;
     render();
}
function restart() {
       // reset currentpage to 1
       //invoke render function
       currentpage=1;
       render();
}
function render()
{
     //display the 
       document.getElementById("display").textContent=pages[currentpage];
       //read from state and create the view
       //assigns the text content
      //if currentpage =5 ; randomize the symbols when you first goto page
    
      {

      }
}      
function generateSymbols()
{
       //set chosen symbol from the array randomly
       //look through 0-100
       //concatenate a string or create elements to pin back to the DOM
       //set pages[5] to string or a placeholder
       //replace all blank spaces with symbols in array
       //set pages[6] to 'whatever dummy' concatenation of chosen symbol and the string
}