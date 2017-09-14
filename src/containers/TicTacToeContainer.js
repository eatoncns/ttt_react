import React, { Component } from 'react';
import History from 'components/History';
import BoardContainer from 'containers/BoardContainer'

class TicTacToeContainer extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1>Tic-Tac-Toe</h1>
          <BoardContainer dimension={3} />
        </div>
        <History />
      </div>
    );
  }
}

export default TicTacToeContainer;
