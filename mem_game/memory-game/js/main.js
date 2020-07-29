
const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];

let cardOne = cards [0]
cardsInPlay.push('cardOne')


console.log("User flipped" + cardOne);

let cardTwo = cards [2]
cardsInPlay.push('cardTwo')

console.log("User flipped" + cardTwo);

if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[2]) {							// if cards in play === 2 , need to check if cards match
		alert("You found a match!");
	} else {
		alert("Sorry try again");
	}
	
// store once I figure this out Stage your code.
//git add -A
//Create a version of your staged code.
//git commit -m 'created game logic'
//Push your code to the GitHub repository.
//git push origin master

