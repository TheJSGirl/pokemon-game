import React from 'react';
import Pokedex from './Pokedex';
import PokeGame from './PokeGame';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Pokecard
        id={4}
        name="Charmander"
        type="fire"
        base_experince={62}
      />       */}
      {/* <Pokedex /> */}
      <PokeGame />
    </div>
  );
}

export default App;
