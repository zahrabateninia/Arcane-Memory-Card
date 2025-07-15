import { useEffect, useState } from 'react';
import LoadingPage from './pages/LoadingPage';
import StartPage from './pages/StartPage';
import charactersData from './data/characters.json'; 

function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate async data fetch
    const loadCharacters = () => {
      setTimeout(() => {
        setCharacters(charactersData);
        setIsLoading(false);
      }, 1500); // simulate network delay
    };

    loadCharacters();
  }, []);

  return (
    <>
      {isLoading ? <LoadingPage /> : <StartPage characters={characters} />}
    </>
  );
}

export default App;
