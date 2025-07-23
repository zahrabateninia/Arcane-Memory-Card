import { useEffect, useState } from 'react';
import LoadingPage from './pages/LoadingPage';
import StartPage from './pages/StartPage';
import PlayGamePage from './pages/PlayGamePage';
import charactersData from './data/characters'; 
import { AnimatePresence } from 'framer-motion';

const STAGES = { 
  LOADING: 'loading',
  START: 'start',
  PLAY: 'play',
};

function App() {
  const [characters, setCharacters] = useState([]);
  const [stage, setStage] = useState(STAGES.LOADING);
  const [difficulty, setDifficulty] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCharacters(charactersData);
      setStage(STAGES.START);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  const handleStartGame = (selectedDifficulty) => {
    setDifficulty(selectedDifficulty);
    setStage(STAGES.PLAY); 
  };

  const handleRestartGame = () => {
    setStage(STAGES.PLAY);
  };

  const handleStartOver = () =>{
    setStage(STAGES.START)
  }

  const renderStage = () => {
    switch(stage){
      case STAGES.LOADING: 
        return <LoadingPage key='loading' />
      case STAGES.START:
        return <StartPage  key='start' startGame={handleStartGame} />
      case STAGES.PLAY:
        return <PlayGamePage 
                  key='play'
                  difficulty={difficulty} 
                  characters={characters}
                  restartGame={handleRestartGame}
                  backToStart={handleStartOver}
               />
      default:
        return null;
    }
  }

  return (
      <AnimatePresence mode="wait">
          {renderStage()}
      </AnimatePresence>
  );
}

export default App;
