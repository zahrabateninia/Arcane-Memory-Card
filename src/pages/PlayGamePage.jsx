import React, { Fragment, useState } from 'react';
import CardGrid from '../components/CardGrid';
import GameOver from '../components/GameOver';
import characterData from '../data/characters';
import ScoreBoard from '../components/ScoreBoard';
import './PlayGamePage.css'

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
      {!gameOver && (
        <Fragment>
          <ScoreBoard score={round - 1} bestScore={bestScore} />
          <CardGrid
            difficulty={difficulty}
            characters={characterData}
            round={round}
            setRound={setRound}
            onGameOver={handleGameOver}
          />
        </Fragment>
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
