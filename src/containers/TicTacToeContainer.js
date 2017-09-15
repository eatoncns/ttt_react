import React, { Component } from 'react';
import History from 'components/History';
import BoardContainer from 'containers/BoardContainer';
import { HistoryState } from 'ttt/HistoryState';

class TicTacToeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = HistoryState.init();
  }

  onGameOver(finalMarks) {
    const nextState = HistoryState.update(this.state, finalMarks, dateTimeNow);
    this.setState({nextState});
  }

  dateTimeNow() {
    return (new Date().toLocaleDateString('en-GB'));
  }

  render() {
    return (
      <div>
        <div className="container">
          <h1>Tic-Tac-Toe</h1>
          <BoardContainer dimension={3} />
        </div>
        <History games={this.state.games} />
      </div>
    );
  }
}

export default TicTacToeContainer;
