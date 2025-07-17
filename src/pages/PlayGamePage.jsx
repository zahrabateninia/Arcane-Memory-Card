// src/pages/PlayGamePage.jsx
import React, { useState } from 'react';
import CardGrid from '../components/CardGrid';
import GameOver from '../components/GameOver';
import characterData from '../data/characters';

const PlayGamePage = ({ difficulty, restartGame }) => {
  const [gameOver, setGameOver] = useState(false);
  const [didWin, setDidWin] = useState(false);

  const handleGameOver = (won) => {
    setDidWin(won);
    setGameOver(true);
  };

  const handleRestart = () => {
    setGameOver(false);
    setDidWin(false);
    restartGame(); // Back to StartPage
  };

  return (
    <div className="play-game-page">
      {!gameOver && (
        <CardGrid
          difficulty={difficulty}
          characters={characterData}
          onGameOver={handleGameOver}
        />
      )}

      {gameOver && (
        <GameOver
          didWin={didWin}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
};

export default PlayGamePage;
