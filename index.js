// DOM Variables
const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const card3 = document.querySelector(".card3");
const card4 = document.querySelector(".card4");
const card5 = document.querySelector(".card5");
const card1img = document.querySelector(".card1-img");
const card2img = document.querySelector(".card2-img");
const card3img = document.querySelector(".card3-img");
const card4img = document.querySelector(".card4-img");
const card5img = document.querySelector(".card5-img");

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

function dealFirstHand() {
  for (let i = 0; i < 5; i++) {
    let cardImgName = eval(`card${i + 1}img`);
    cardImgName.setAttribute("src", `images/${playerHand[i]}.svg`);
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
dealFirstHand();

// card2img.setAttribute("src", `images/${playerHand[0]}.svg`);
