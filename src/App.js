import './style.css';
import { CharactersList } from './components/CharactersList';

const characters = require('./data/characters.json');

function App() {
  console.log((characters));

  return (
    <>
      <h1>Marvel Characters</h1>
      <CharactersList characters={characters} />
    </>
  );
}

export default App;
