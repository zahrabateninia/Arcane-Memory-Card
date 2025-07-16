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

    useEffect(()=>{
        // run this effect after characters are set
        if(characters.length > 0){
            loadNewCards()
        }
    },[characters, load]);

    const loadNewCards = () => {
        // randomly sort the array
        const shuffled = [...characters].sort(() => Math.random() - 0.5); 
        const selected = shuffled.slice(0, cardsPerRound);
        setCurrentCards(selected)
    }



  return (
    <div>
      
    </div>
  )
}

export default CardGrid
