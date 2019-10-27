import React from 'react';
import './App.css';
import CharacterInfo from './components/CharacterInfo';
import Stats from './components/Stats';

function App() {
  const stats = [
    {
      "name": "Fuerza",
      "value": 16
    },
    {
      "name": "Destreza",
      "value": 12
    },
    {
      "name": "Constitución",
      "value": 15
    },
    {
      "name": "Inteligencia",
      "value": 10
    },
    {
      "name": "Sabiduría",
      "value": 15
    },
    {
      "name": "Carisma",
      "value": 15
    },
  ]

  return (
    <div className="App">
      <div className="container">
        <CharacterInfo name={"Peluchin"} class={"Paladin"} level={1} exp={82}/>
        <Stats stats={stats}/>
      </div>
    </div>
  );
}

export default App;
