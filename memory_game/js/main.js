
var cards = [
   {
   		rank: "queen",
   		suit: "hearts",
   		cardImage: "images/queen-of-hearts.png"},
   	{
   		rank:"queen'",
   		suit: "diamonds",
   		type: "images/queen-of-diamonds.png"},
   	{
   		rank: "king",
   		suit: "hearts",
   		type: "images/king-of-hearts.png",},
   	{
   		rank: "king",
   		suit: "diamonds",
   		type: "images/king-of-diamonds.png"}
   	];

var cardsInPlay = [];
var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
} else {
console.log("Sorry, try again.");
};

var flipCard = function (this.getAttribute('data-id') {
if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay) {
	 window.alert("You found a match!"); 
	} else (cardsInPlay.length === 2 && !! cardsInPlay[0] === cardsInPlay) {
		window.alert("Sorry, try again!")
		console.log("User flipped" + cards[cardId].rank)

	};
var flipCard = createBoard = function () {
	for (var i = 0; i < cards.length; i++) {
         var newListItem = document.createElement('img');
         cardElement.setAttribute('src', "images/back.png");
         cardElement.setAttribute('data-id', i);
         document.getElementsByTagName(flipCard).addEventListener('click', cardElement);
         appendChild() cardElement;
};

createBoard();
console.log(cards[cardId].cardImage)



