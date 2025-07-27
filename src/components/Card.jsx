import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import './Card.css';
import cardBack from '../assets/img/backCard.webp';

const Card = ({ character, onClick, isFlipped }) => {
  return (
    <motion.div
      onClick={onClick}
      className={`card-wrapper ${isFlipped ? 'flipped' : ''}`}
      initial={{ rotateY: 90, opacity: 0 }}
      animate={{ rotateY: 0, opacity: 1 }}
      exit={{ rotateY: 90, opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.6}
        glareColor="#ffffff"
        glarePosition="bottom"
        glareBorderRadius="1rem"
        className="tilt-wrapper"
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        scale={1.01}
        transitionSpeed={1000}
      >
        <div className={`character-holder ${isFlipped ? 'flipped' : ''}`}>
          <div className="card-back">
            <img src={cardBack} alt="Card Back" />
          </div>
          <div className="card-front">
            <img src={character.image} alt={character.name} />
            <p className="character-name">{character.name}</p>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

export default Card;
