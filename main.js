const card ={
  Title: " ",
  
   handleClicknext: function() {
    // goto next card in the array;

  },
// button for go/restart
  init: function() {
    this.button.addEventListener('click', this.handleClick);
    //when not go become restart
  }
     handleClickgo: function() {
    // goto next card in the array;

  },
// next button
  init: function() {
    this.button.addEventListener('click', this.handleClick);
    //if current stage is page 1, no next button
    //when current stage is page 5, change text to reveal
    
  }
}
// define the pages in the card
const pages = 
      {
        "I can read your mind",
        "pick a number between 1 and 99",
        "add both digits together to get a new number",
        "subtract your new number from the original number",
        "0-&, 1-@ ,2-$, 3-B",
        "Its & dummy."
        
      };
