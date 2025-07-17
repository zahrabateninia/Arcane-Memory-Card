import { useEffect, useState } from 'react';
import LoadingPage from './pages/LoadingPage';
import StartPage from './pages/StartPage';
import PlayGamePage from './pages/PlayGamePage';
import charactersData from './data/characters'; 

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
    setDifficulty(null);
    setStage(STAGES.START);
  };

  const renderStage = () => {
    switch(stage){
      case STAGES.LOADING: 
        return <LoadingPage />
      case STAGES.START:
        return <StartPage startGame={handleStartGame} />
      case STAGES.PLAY:
        return <PlayGamePage 
                  difficulty={difficulty} 
                  characters={characters}
                  restartGame={handleRestartGame}
               />
      default:
        return null;
    }
  }

  return (
    <>
      {renderStage()}
    </>
  );
}

export default App;
