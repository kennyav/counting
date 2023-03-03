import React, { useState, useEffect } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

// class imports
import { Deck } from '../Classes/DeckClass'

// add a timer and a stopwath
export default function NormalGame(prop) {

   const deck = new Deck();
   const numberOfDecks = prop.deckCount;
   const [card, setCard] = useState({
      suit: "red",
      number: "Joker",
      rank: 0,
      amount: 1
   });
   const [count, setCount] = useState(card.rank);
   const [show, setShowCount] = useState(false);
   const [done, setDeckDone] = useState(false);


   const [index, setIndex] = useState(Math.floor(Math.random() * deck.length));//


   const handleButtonPress = () => {

      console.log("Deck", deck.cards)

      // defining a random index to mimic a deck shuffle
      const randomIndex = Math.floor(Math.random() * deck.cards.length);
      setIndex(randomIndex);
      
      // testing to see if the deck has anymore cards
      if (deck.cards.length === 0) {
         setDeckDone(true);
      }
      // the conditionals are just in case, it should be that they are not needed
      if (index < deck.cards.length && deck.cards[index].amount !== 0) {
         // when an instance of a card appears we have to decrease the amount to show that it is out of the deck
         deck.cards[index].amount -= 1;

         // sets the current card and sets the current running count
         setCard(deck.cards[index]);
         setCount(count + deck.cards[index].rank);

         if (deck.cards[index].amount === 0) {
            // removes the card from the deck when there are no more instances left
            deck.removeCard(index);
         }
      }
   }

   // helper function for reseting the deck
   const handleResetDeck = () => {
      deck.cards = deck.resetDeck(1);
      setDeckDone(!done);
   }

   return (
      <div>
         <div className='game'>
            <div className='card-image'>
               <img id="test" src={require(`../../deck/${card.number.toLowerCase()}_of_${card.suit.toLowerCase() + "s"}.png`)} alt="Not Found" />
            </div>
            <Stack className='stack' direction="row" spacing={2}>
               <Button onClick={handleButtonPress} variant="contained" color="success">
                  Next Card
               </Button>
               <Button onClick={() => setShowCount(!show)} variant="contained" color="error">
                  Show Count
               </Button>
            </Stack>
         </div>
         < div >
            {
               show ?
                  (<div className='count-value' >
                     Running Count:
                     {count}
                  </div >) :
                  null
            }
         </div >
         <div>
            {done ?
               (<div className='deck-finished'>
                  <h1>
                     The Deck is Finished
                  </h1>
                  <button onClick={handleResetDeck}>Reset Deck</button>
               </div>) :
               null}
         </div>
      </div>
   )
}
