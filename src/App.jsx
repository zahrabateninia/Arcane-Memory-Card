import { useEffect, useState } from 'react';
import LoadingPage from './pages/LoadingPage';
import StartPage from './pages/StartPage';
import PlayGamePage from './pages/PlayGamePage';
import AudioToggleButton from './components/AudioToggleButton'; 
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
  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = () => setIsMuted(prev => !prev);

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

  const handleStartOver = () => {
    setStage(STAGES.START);
  };

  const renderStage = () => {
    switch(stage) {
      case STAGES.LOADING: 
        return <LoadingPage key="loading" />;
      case STAGES.START:
        return (
          <StartPage  
            key="start"
            startGame={handleStartGame}
            isMuted={isMuted}
            toggleMute={toggleMute}
          />
        );
      case STAGES.PLAY:
        return (
          <PlayGamePage 
            key="play"
            difficulty={difficulty}
            characters={characters}
            restartGame={handleRestartGame}
            backToStart={handleStartOver}
            isMuted={isMuted}
            toggleMute={toggleMute}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <AudioToggleButton isMuted={isMuted} toggleMute={toggleMute} />
      
      <AnimatePresence mode="wait">
        {renderStage()}
      </AnimatePresence>
    </>
  );
}

export default App;
