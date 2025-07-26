import React from 'react';
import './StartPage.css';
import logo from '../assets/img/logo.png';
import { motion } from 'framer-motion';
 

const StartPage = ({ startGame }) => {
  return (
    <div className="start-page">
      <motion.div
        className="start-page-card"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <img src={logo} alt="Arcane Logo" className="logo" />
        <h1 className="game-title">Arcane Memory Game</h1>
        <div className="difficulty-buttons">
          <button
            className="arcane-button easy-btn"
            onClick={() => startGame('easy')}
            aria-label="Start Easy Game"
          >
            Easy
          </button>
          <button
            className="arcane-button medium-btn"
            onClick={() => startGame('medium')}
            aria-label="Start Medium Game"
          >
            Medium
          </button>
          <button
            className="arcane-button difficult-btn"
            onClick={() => startGame('difficult')}
            aria-label="Start Difficult Game"
          >
            Difficult
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default StartPage;
