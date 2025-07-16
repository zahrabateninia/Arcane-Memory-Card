// Render the grid of shuffled cards
import React, { useState, useEffect } from 'react';
import characterData from '../data/characters.json'


const CardGrid = ({difficulty, onGameOver }) => {

    // game parameters by difficulty
    const config = {
        easy: {cardsPerRound: 3, totalRounds: 5},
        medium: {cardsPerRound: 4, totalRounds: 7},
        difficult: {cardsPerRound: 5, totalRounds: 10},
    }
    const [cardsPerRound, totalRounds] = config(difficulty)

    const [characters, setCharacters] = useState([]);
    const [currentCards, setCurrentCards] = useState([]);
    const [clickedIds, setClickedIds] = useState(new Set());
    const [round, setRound] = useState(1);

    useEffect(() =>{
        setCharacters(characterData)
    },[]);

  return (
    <div>
      
    </div>
  )
}

export default CardGrid
