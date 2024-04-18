import React from 'react';
import './App.css';
import Card from './Components/Card';
import teamData from '../src/Data.js';

function App() {
  return (
    <div className="app">
      <div className="card-container">
        {teamData.map((person) => (
          <Card key={person.id} person={person} />
        ))}
      </div>
    </div>
  );
}

export default App;