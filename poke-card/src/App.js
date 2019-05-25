import React from 'react';
import Pokedex from './Pokedex';
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
      <Pokedex />
    </div>
  );
}

export default App;
