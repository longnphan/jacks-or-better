const cardContainer = document.querySelector(".card-container");

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

function dealFaceDown() {
  for (let i = 0; i < 5; i++) {
    const newCardDiv = document.createElement("div");
    const cardStatus = document.createElement("h1");
    const cardImage = document.createElement("img");
    cardStatus.classList.add(`card${i + 1}Status`);
    cardImage.classList.add(`card${i + 1}Image`);
    cardImage.setAttribute("src", `images/back.svg`);
    newCardDiv.appendChild(cardStatus);
    newCardDiv.appendChild(cardImage);
    cardContainer.appendChild(newCardDiv);
  }
}

function dealFirstHand() {
  cardContainer.innerHTML = "";
  for (let i = 0; i < 5; i++) {
    const newCardDiv = document.createElement("div");
    const cardStatus = document.createElement("h1");
    const cardImage = document.createElement("img");
    cardStatus.classList.add(`card${i + 1}Status`);
    cardImage.classList.add(`card${i + 1}Image`);
    cardImage.setAttribute("src", `images/${playerHand[i]}.svg`);
    newCardDiv.appendChild(cardStatus);
    newCardDiv.appendChild(cardImage);
    cardContainer.appendChild(newCardDiv);
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
  playerHand[0] = deck.shift();
  playerHand[1] = deck.shift();
  playerHand[2] = deck.shift();
  playerHand[3] = deck.shift();
  playerHand[4] = deck.shift();
}

createCardDeck();
dealFaceDown();
