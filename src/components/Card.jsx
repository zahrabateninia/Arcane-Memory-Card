import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import './Card.css';
import cardBack from '../assets/img/backCard.webp';

const Card = ({ character, onClick, isFlipped }) => {

  return (
    <motion.div
      className={`card-wrapper ${isFlipped ? 'flipped' : ''}`}
      onClick={onClick}
    >
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.4}
        glareColor="#ffffff"
        glarePosition="bottom"
        glareBorderRadius="1rem"
        className="tilt-wrapper"
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
        scale={1.01}
        transitionSpeed={1000}
      >
        <div className="character-holder">
          <div className="card-back">
            <img src={cardBack} alt="card back" />
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
