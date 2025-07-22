import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Card.css';
import cardBack from '../assets/img/backCard.webp'; 
import flipSound from '../assets/audio/flipcard.mp3';

const Card = ({ character, onClick, round }) => {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    setFlipped(false);
    const timer = setTimeout(() => {
      setFlipped(true);
      
      const audio = new Audio(flipSound);
      audio.volume = 0.5; // prevent it from being too loud
      audio.play().catch((e) => {
        console.warn("Audio play interrupted:", e);
      });
    }, 500);

    return () => clearTimeout(timer);
  }, [round]);

  return (
    <motion.div
      className={`card-wrapper ${flipped ? 'flipped' : ''}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
    >
      <div className="card-inner">
        <div className="card-face card-back">
          <img src={cardBack} alt="card back" />
        </div>
        <div className="card-face card-front">
          <img src={character.image} alt={character.name} />
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
