// Class for the deck of cards

// base deck
const baseDeck = [
   {
      suit: "Spade",
      number: "Ace",
      rank: -1,
      amount: 1
   },
   {
      suit: "Club",
      number: "Ace",
      rank: -1,
      amount: 1
   },
   {
      suit: "Heart",
      number: "Ace",
      rank: -1,
      amount: 1
   },
   {
      suit: "Diamond",
      number: "Ace",
      rank: -1,
      amount: 1
   },
   {
      suit: "Spade",
      number: "King",
      rank: -1,
      amount: 1
   },
   {
      suit: "Club",
      number: "King",
      rank: -1,
      amount: 1
   },
   {
      suit: "Heart",
      number: "King",
      rank: -1,
      amount: 1
   },
   {
      suit: "Diamond",
      number: "King",
      rank: -1,
      amount: 1
   },
   {
      suit: "Spade",
      number: "Queen",
      rank: -1,
      amount: 1
   },
   {
      suit: "Club",
      number: "Queen",
      rank: -1,
      amount: 1
   },
   {
      suit: "Heart",
      number: "Queen",
      rank: -1,
      amount: 1
   },
   {
      suit: "Diamond",
      number: "Queen",
      rank: -1,
      amount: 1
   },
   {
      suit: "Spade",
      number: "Jack",
      rank: -1,
      amount: 1
   },
   {
      suit: "Club",
      number: "Jack",
      rank: -1,
      amount: 1
   },
   {
      suit: "Heart",
      number: "Jack",
      rank: -1,
      amount: 1
   },
   {
      suit: "Diamond",
      number: "Jack",
      rank: -1,
      amount: 1
   },
   {
      suit: "Spade",
      number: "10",
      rank: -1,
      amount: 1
   },
   {
      suit: "Club",
      number: "10",
      rank: -1,
      amount: 1
   },
   {
      suit: "Heart",
      number: "10",
      rank: -1,
      amount: 1
   },
   {
      suit: "Diamond",
      number: "10",
      rank: -1,
      amount: 1
   },
   {
      suit: "Spade",
      number: "9",
      rank: 0,
      amount: 1
   },
   {
      suit: "Club",
      number: "9",
      rank: 0,
      amount: 1
   },
   {
      suit: "Heart",
      number: "9",
      rank: 0,
      amount: 1
   },
   {
      suit: "Diamond",
      number: "9",
      rank: 0,
      amount: 1
   },
   {
      suit: "Spade",
      number: "8",
      rank: 0,
      amount: 1
   },
   {
      suit: "Club",
      number: "8",
      rank: 0,
      amount: 1
   },
   {
      suit: "Heart",
      number: "8",
      rank: 0,
      amount: 1
   },
   {
      suit: "Diamond",
      number: "8",
      rank: 0,
      amount: 1
   },
   {
      suit: "Spade",
      number: "7",
      rank: 0,
      amount: 1
   },
   {
      suit: "Club",
      number: "7",
      rank: 0,
      amount: 1
   },
   {
      suit: "Heart",
      number: "7",
      rank: 0,
      amount: 1
   },
   {
      suit: "Diamond",
      number: "7",
      rank: 0,
      amount: 1
   },
   {
      suit: "Spade",
      number: "6",
      rank: 1,
      amount: 1
   },
   {
      suit: "Club",
      number: "6",
      rank: 1,
      amount: 1
   },
   {
      suit: "Heart",
      number: "6",
      rank: 1,
      amount: 1
   },
   {
      suit: "Diamond",
      number: "6",
      rank: 1,
      amount: 1
   },
   {
      suit: "Spade",
      number: "5",
      rank: 1,
      amount: 1
   },
   {
      suit: "Club",
      number: "5",
      rank: 1,
      amount: 1
   },
   {
      suit: "Heart",
      number: "5",
      rank: 1,
      amount: 1
   },
   {
      suit: "Diamond",
      number: "5",
      rank: 1,
      amount: 1
   },
   {
      suit: "Spade",
      number: "4",
      rank: 1,
      amount: 1
   },
   {
      suit: "Club",
      number: "4",
      rank: 1,
      amount: 1
   },
   {
      suit: "Heart",
      number: "4",
      rank: 1,
      amount: 1
   },
   {
      suit: "Diamond",
      number: "4",
      rank: 1,
      amount: 1
   },
   {
      suit: "Spade",
      number: "3",
      rank: 1,
      amount: 1
   },
   {
      suit: "Club",
      number: "3",
      rank: 1,
      amount: 1
   },
   {
      suit: "Heart",
      number: "3",
      rank: 1,
      amount: 1
   },
   {
      suit: "Diamond",
      number: "3",
      rank: 1,
      amount: 1
   },
   {
      suit: "Spade",
      number: "2",
      rank: 1,
      amount: 1
   },
   {
      suit: "Club",
      number: "2",
      rank: 1,
      amount: 1
   },
   {
      suit: "Heart",
      number: "2",
      rank: 1,
      amount: 1
   },
   {
      suit: "Diamond",
      number: "2",
      rank: 1,
      amount: 1
   }
];

export class Deck {
   constructor() {
      this.cards = [...baseDeck];
      this.curCard = {
         suit: "red",
         number: "Joker",
         rank: 0,
         amount: 1
      };
      this.count = 0;
   }

   setNumberOfDecks(num) {
      this.cards.map((card) => {
         // the amount is not replaced by num b/c if the deck is switch in the middle of a count then the already 
         // seen cards are renewed an extra time
         card.amount += (num - 1);
      });
      return this.cards
   }

   // resets the amount in the deck to the specified deck amount
   resetDeck(num) {
      console.log("Base deck", baseDeck)
      this.cards = baseDeck
      this.cards.map((card) => {
         card.amount = num;
      });
   }

   iterateDeck(passedFn) {
      passedFn(this.cards);
   }

   removeCard(idx) {
      this.cards.splice(idx, 1);
   }

   setCard(card) {
      this.curCard = card;
   }

   setCount(c) {
      this.count += c;
   }
}
