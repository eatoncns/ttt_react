import React, { Component } from 'react';
import BoardContainer from './BoardContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Tic-Tac-Toe</h1>
        <BoardContainer dimension={3} />
      </div>
    );
  }
}

export default App;
