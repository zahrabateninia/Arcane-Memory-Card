import React, { Fragment, useState } from 'react';
import CardGrid from '../components/CardGrid';
import GameOver from '../components/GameOver';
import characterData from '../data/characters';
import ScoreBoard from '../components/ScoreBoard';
import './PlayGamePage.css';
import { AnimatePresence, motion } from 'framer-motion';

const PlayGamePage = ({ difficulty, restartGame }) => {
  const [gameOver, setGameOver] = useState(false);
  const [didWin, setDidWin] = useState(false);
  const [round, setRound] = useState(1);
  const [bestScore, setBestScore] = useState(0);

  const handleGameOver = (result) => {
    setDidWin(result === 'win');
    setGameOver(true);

    const score = round - 1;
    if (score > bestScore) {
      setBestScore(score);
    }
  };

  const handleRestart = () => {
    setGameOver(false);
    setDidWin(false);
    setRound(1); // reset round
    restartGame(); // back to StartPage
  };

  
  return (
    <div className="play-game-page">
      <AnimatePresence mode="wait">
        {!gameOver && (
          <motion.div
            key="game"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            <ScoreBoard score={round - 1} bestScore={bestScore} />
            <CardGrid
              difficulty={difficulty}
              characters={characterData}
              round={round}
              setRound={setRound}
              onGameOver={handleGameOver}
            />
          </motion.div>
        )}

        {gameOver && (
          <motion.div
            key="gameOver"
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            exit={{ opacity: 0}}
            transition={{ duration: 0.5 }}
          >
            <GameOver
              didWin={didWin}
              onRestart={handleRestart}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PlayGamePage;
