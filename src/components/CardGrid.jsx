import React, { useState, useEffect } from 'react';
import Card from './Card.jsx';
import './CardGrid.css';
import flipSound from '../assets/audio/flipcard.mp3';
import uniqid from 'uniqid';


const CardGrid = ({ difficulty, characters, round, setRound, onGameOver, isMuted }) => {
  const config = {
    easy: { cardsPerRound: 3, totalRounds: 5 },
    medium: { cardsPerRound: 4, totalRounds: 7 },
    difficult: { cardsPerRound: 5, totalRounds: 10 },
  };
  const { cardsPerRound, totalRounds } = config[difficulty];

  const [currentCards, setCurrentCards] = useState([]);
  const [clickedIds, setClickedIds] = useState(new Set());
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    if (characters.length === 0) return;
  
    // Set the new cards
    const shuffled = [...characters].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, cardsPerRound).map(card => ({
      ...card,
      uniqueKey: uniqid()
    }));
    setCurrentCards(selected);
    setIsFlipped(false); // Reset before flipping
  
    // trigger flip on next frame
    const timer = setTimeout(() => {
      setIsFlipped(true);
      if (!isMuted) {
        const audio = new Audio(flipSound);
        audio.volume = 0.5;
        audio.play().catch(e => console.warn("Audio error:", e));
      }
    }, 700); 
  
    return () => clearTimeout(timer); 
  }, [round]);
  

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
          key={card.uniqueKey}
          character={card}
          onClick={() => handleCardClick(card.id)}
          isFlipped={isFlipped}
        />
      ))}
      </div>
      <p className="round-counter">Round {round} of {totalRounds}</p>
    </div>
  );
};

export default CardGrid;
