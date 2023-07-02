const cardSuit = ["clubs", "diamonds", "hearts", "spades"];
const cardValue = [
  "ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "jack",
  "queen",
  "king",
];
const cardShoe = [];
const playerHand = [];

function createCardDeck() {
  for (let suit of cardSuit) {
    for (let val of cardValue) {
      cardShoe.push(`${suit}_${val}`);
    }
  }
  shuffleCards(cardShoe);
}

function dealFirstHand() {
  for (let i = 0; i < 5; i++) {
    let nextCard = cardShoe.shift();
    console.log("next card removed is:", nextCard);
    playerHand.push(nextCard);
  }
}

function renderPlayerHand() {
  for (let i = 0; i < playerHand.length; i++) {
    let cardImage = document.createElement("img");
    cardImage.setAttribute("src", `images/${playerHand[i]}.svg`);
    dealer.appendChild(cardImage);
  }
}

function shuffleCards(deck) {
  // Durstenfeld Shuffle Algorithm
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}

createCardDeck();
dealFirstHand();
