import React, { Component } from 'react';
import Board from './Board.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Tic-Tac-Toe</h1>
        <Board dimension={3} />
      </div>
    );
  }
}

export default App;
