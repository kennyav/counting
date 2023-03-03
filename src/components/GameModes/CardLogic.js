import React, { useState, useEffect } from 'react'

export const baseDeck = [
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

export const setReset = (numberOfDecks) => {
   baseDeck.map(element => element.amount += numberOfDecks);
   setDeck([...baseDeck]);
   setDeckDone(false);
}

