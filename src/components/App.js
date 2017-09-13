import React, { Component } from 'react';
import HistoryComponent from 'components/HistoryComponent';
import BoardContainer from 'containers/BoardContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Tic-Tac-Toe</h1>
        <HistoryComponent />
        <BoardContainer dimension={3} />
      </div>
    );
  }
}

export default App;
