import React from 'react';
import { motion } from 'framer-motion';
import './Card.css';
import cardBack from '../assets/img/backCard.webp';

const Card = ({ character, onClick, shouldFlip }) => {
  return (
    <motion.div
      className={`card-wrapper ${shouldFlip ? 'flipped' : ''}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
    >
      <div className="character-holder">
        <div className="card-back">
          <img src={cardBack} alt="card back" />
        </div>
        <div className="card-front">
          <img src={character.image} alt={character.name} />
          <p className='character-name'>{character.name}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
