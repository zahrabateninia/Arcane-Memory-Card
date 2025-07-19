import React, { useState, useEffect } from 'react';
import Card from './Card.jsx'
import './CardGrid.css';

const CardGrid = ({ difficulty, characters, round, setRound, onGameOver }) => {
  // Game config based on difficulty
  const config = {
    easy: { cardsPerRound: 3, totalRounds: 5 },
    medium: { cardsPerRound: 4, totalRounds: 7 },
    difficult: { cardsPerRound: 5, totalRounds: 10 },
  };
  const { cardsPerRound, totalRounds } = config[difficulty];

  const [currentCards, setCurrentCards] = useState([]);
  const [clickedIds, setClickedIds] = useState(new Set());

  useEffect(() => {
    if (characters.length > 0) {
      loadNewCards();
    }
  }, [characters, round]);

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
            <Card key={card.id} character={card} onClick={() => handleCardClick(card.id)}  round={round}/>
          ))}
      </div>
      <p>Round {round} of {totalRounds}</p>
    </div>
  );
};

export default CardGrid;
