import { useEffect, useState } from 'react';
import LoadingPage from './pages/LoadingPage';
import StartPage from './pages/StartPage';
import PlayGamePage from './pages/playGamePage';
import charactersData from './data/characters.json'; 

// we have 3 pages so three stages 
const STAGES ={ 
  'LOADING': 'loading',
  'START': 'start',
  'PLAY': 'play',
}

function App() {
  const [characters, setCharacters] = useState([]);
  const [stage, setStage] = useState(STAGES.LOADING);
  const [difficulty, setDifficulty] = useState(null)

  // Simulate fetching data
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCharacters(charactersData)
      setStage(STAGES.START)
    }, 2000)

    return () => clearTimeout(timeout)
  }, [])

  
  const handleStartGame = (selectedDifficulty) => {
    setDifficulty(selectedDifficulty)
    setStage(STAGES.GAME)
  }

  // render conditionally
  const renderStage = () => {
    switch(stage){
      case STAGES.LOADING: 
        return <LoadingPage />
      case STAGES.START:
        return <StartPage startGame={handleStartGame} />
      case STAGES.PLAY:
        return <PlayGamePage difficulty={difficulty} characters={characters} />
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
