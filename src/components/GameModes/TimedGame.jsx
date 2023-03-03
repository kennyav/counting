import React, { useState } from 'react'

// material ui imports
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
//import ProgressBar from '../ProgressBar';

// class imports
import { Deck } from '../Classes/DeckClass'

// intialize deck
const deck = new Deck();

export default function NormalGame(prop) {

   const [show, setShowCount] = useState(false);
   const [done, setDeckDone] = useState(false);
   const [index, setIndex] = useState(0);
   const [play, setPlay] = useState(false);
   let timer;
   console.log("index", index)
   console.log("deck length", deck.cards.length)


   const handleButtonPress = () => {
      setPlay(true);
      timer = setInterval(() => {

         // defining a random index to mimic a deck shuffle
         setIndex(Math.floor(Math.random() * deck.cards.length));

         // when an instance of a card appears we have to decrease the amount to show that it is out of the deck
         deck.cards[index].amount -= 1;

         // sets the current card and sets the current running count
         deck.setCard(deck.cards[index]);
         deck.setCount(deck.curCard.rank);

         if (deck.cards[index].amount === 0) {
            // removes the card from the deck when there are no more instances left
            deck.removeCard(index);
         }

         // testing to see if the deck has anymore cards
         if (deck.cards.length === 0) {
            setDeckDone(true);
         }
      }, 1000);

      return () => {
         clearInterval(timer);
      }, play;
   }

   // helper function for reseting the deck
   const handleResetDeck = () => {
      deck.cards = deck.resetDeck(1);
      setDeckDone(!done);
   }

   // helper function for reseting the deck
   const handleStopPress = () => {
      setPlay(false);
      clearInterval(timer);
   }

   return (
      <div>
         <div className='game'>
            <div className='card-image'>
               <img id="test" src={require(`../../deck/${deck.curCard.number.toLowerCase()}_of_${deck.curCard.suit.toLowerCase() + "s"}.png`)} alt="Not Found" />
            </div>
            <Stack className='stack' direction="row" spacing={2}>
               {!play ?
                  <Button onClick={handleButtonPress} variant="contained" color="success">
                     Start
                  </Button> :
                  <Button onClick={handleStopPress} variant="contained" color="success">
                     Stop
                  </Button>}
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
                     {deck.count}
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
