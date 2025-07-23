import React from 'react';
import './GameOver.css';
import winImg from '../assets/img/powderEkkoDance.webp';
import loseImg from '../assets/img/viCrying.webp';

const GameOver = ({ didWin, onRestart }) => {
  const backgroundImage = didWin ? winImg : loseImg;

  return (
    <div className="game-over-overlay">
      <div
        className="game-over-dialog"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <h2 className='game-over-message'>{didWin ? 'You Won!' : 'You Lost!'}</h2>
        <button className="arcane-button restart-btn" onClick={onRestart}>
          Restart Game
        </button>
      </div>
    </div>
  );
};

export default GameOver;
