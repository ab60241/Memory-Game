
const cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamnods.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

const cardsInPlay = [];

function checkForMatch() {
		if (cardsInPlay[0] === cardsInPlay[1]) {    //  || cardsInPlay[2] === cardsInPlay[3]
	  alert("You found a match!");
	} else {
	  alert("Sorry, try again.");
	}
}
																					// Now, call the checkForMatch function from inside the flipCard function, where the lines above used to sit inside the if statement.
function flipCard() {  
  let cardId = this.getAttribute('data-id');                                                       // No error - Flips Queen Flips King - Then gets a match 
  console.log("User flipped " + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank);
  console.log(cards[cardId].suit);
  console.log(cards[cardId].cardImage);
  this.setAttribute('src', cards[cardId].cardImage)
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
}

function createBoard() {
	for (let i = 0; i < cards.length; i++) {
    		let cardElement = document.createElement('img');
    		cardElement.setAttribute('src', 'images/back.png');
    		cardElement.setAttribute('data-id', i);
    		cardElement.addEventListener('click', flipCard);
    		document.getElementById('game-board').appendChild(cardElement);
}
}

createBoard(); //is this invoke? 


// store once I figure this out Stage your code.
//git add -A
//Create a version of your staged code.
//git commit -m 'created game logic'
//Push your code to the GitHub repository.
//git push origin master

// && cardsInPlay[0] === cardsInPlay[2]) {						
		//	alert("You found a match!");
		//} else {
		//	alert("Sorry try again");
		//}
//}

