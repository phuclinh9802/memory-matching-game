import './App.css';
import React from 'react';
import Pika from './pika.png'; // 

/*
    first - do 2 cards

*/
function App() {
  return (
    <div className="App">
      <div className="container">
        <div id="card">
          <button><img src={Pika} /></button>
        </div>
        <div id="card">
          <button><img src={Pika} /></button>
        </div>
        <div id="card">
          <button><img src={Pika} /></button>
        </div>
        <div id="card">
          <button><img src={Pika} /></button>
        </div>

      </div>
    </div>
  );
}

export default App;
