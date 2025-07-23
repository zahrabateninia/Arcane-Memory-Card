import React, { useState, useEffect } from 'react';
import Card from './Card.jsx'
import './CardGrid.css';
import flipSound from '../assets/audio/flipcard.mp3';

const CardGrid = ({ difficulty, characters, round, setRound, onGameOver }) => {
  // Game config based on difficulty
  const config = {
    easy: { cardsPerRound: 3, totalRounds: 5 },
    medium: { cardsPerRound: 4, totalRounds: 7 },
    difficult: { cardsPerRound: 5, totalRounds: 10 },
  };
  const { cardsPerRound, totalRounds } = config[difficulty];
  const [shouldFlip, setShouldFlip] = useState(false);

  const [currentCards, setCurrentCards] = useState([]);
  const [clickedIds, setClickedIds] = useState(new Set());

  useEffect(() => {
    if (characters.length > 0) {
      loadNewCards();
    }
  }, [characters, round]);

  useEffect(() => {
    setShouldFlip(false); 
    const timer = setTimeout(() => {
      setShouldFlip(true);
      const audio = new Audio(flipSound);
      audio.volume = 0.5;
      audio.play().catch(e => console.warn("Audio error:", e));
    }, 500);
    return () => clearTimeout(timer);
  }, [round]);


  const loadNewCards = () => {
    const shuffled = [...characters].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, cardsPerRound);
    setCurrentCards(selected);
  };

  const handleCardClick = (id) => {
    if (clickedIds.has(id)) {
      onGameOver('lose');
    } else {
      const updated = new Set(clickedIds);
      updated.add(id);
      setClickedIds(updated);

      if (round === totalRounds) {
        onGameOver('win');
      } else {
        setRound((prev) => prev + 1);
      }
    }
  };

  return (
    <div className="card-grid">
      <div className="cards-container">
            {currentCards.map((card) => (
            <Card 
            key={card.id} 
            character={card} 
            onClick={() => handleCardClick(card.id)}  
            shouldFlip={shouldFlip}
            />
          ))}
      </div>
      <p className='round-counter'>Round {round} of {totalRounds}</p>
    </div>
  );
};

export default CardGrid;
