import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Card.css';
import cardBack from '../assets/img/backCard.webp'; 
import flipSound from '../assets/audio/flipcard.mp3';

const Card = ({ character, onClick, round }) => {
  const [flipped, setFlipped] = useState(false);
  const audioRef = useRef(new Audio(flipSound));

  useEffect(() => {
    // Reset flip state after a small delay to flip back
    setFlipped(false);
    const timer = setTimeout(() => {
      setFlipped(true);
      audioRef.current.play(); // Play audio on flip
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
