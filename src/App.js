import React, { Component } from 'react';
import Board from './Board.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Tic-Tac-Toe</h1>
        <div className="container">
          <Board dimension={3} />
        </div>
      </div>
    );
  }
}

export default App;
