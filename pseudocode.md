# what am I really doing? #

* Make a single html of a mind reader project with multiple state, the user remembers a number inside his/her head and reveals a number in the end*

# All the cards of the html: #
## 1. I can read your mind. // with a [ go ] button ##
## 2. Pick a number from 0 to 99 // with a [restart] button and [next] button ## 
## 3. Add both digits together to get a new number. // with a [next] button and [restart] button ## 
## 4. subtract your new number from the original number // next and restart button ##
## 5. 0-& , 1-@ , 2-$ , 3-B // with a [reveal] button and note to remember your number ##
## 6. just the & sign // the restart button ##

# Pseudocode #
## Procedural ##
* BEGIN *
* INIT the variables*
* Set up the cards 1-6 as objects with properties and their methods.
* RENDER the CLICKED STATE to move to the next element throughout the object series element for the NEXT button
* RENDER the CLICKED STATE to move to the beginning of the object series for the RESTART button
* The END of the operations object(s) but gives the option to do over and start at the beginning
## Functional 
* BEGIN
* INIT THE CARDS AS ARRAYS ex: const card1 = [ 'I can read your mind']
* SET the containers with the card arrays displayed
* INIT the BUTTONS inside the card containers
* RENDER the Clicks
*  if (next button is clicked), continue with the cards
*  if (restart button is clicked), go back to card 1 
*  Once the END is reached, display the answer card and click the RESTART button

## Object-Oriented Programming
* Begin *
* INIT the cards 1-6 as objects with properties and their methods like in Procedural
* example object: let card1 = [ text : 'I can read your mind', next-button : function of when clicked move forward in elements,]
* for cards 2-6: add its elements of text, the next button and the restart button(restart button only at the end)
* END is card 6 and will have the object of pressing the restart button to the first card
