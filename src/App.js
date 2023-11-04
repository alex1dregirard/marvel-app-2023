import './style.css';
import { CharactersList } from './components/CharactersList';
import { NumberOfCharacters } from './components/NumberOfCharacters';

const characters = require('./data/characters.json');

function App() {

  return (
    <>
      <h1>Marvel Characters</h1>
      <CharactersList characters={characters} />
      <br />
      <NumberOfCharacters characters={characters} />
    </>
  );
}

export default App;
