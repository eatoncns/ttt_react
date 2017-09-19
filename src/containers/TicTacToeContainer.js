import React, { Component } from 'react';
import History from 'components/History';
import BoardContainer from 'containers/BoardContainer';
import { HistoryState } from 'ttt/HistoryState';
import { HistoryApi } from 'ttt/HistoryApi';

class TicTacToeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = HistoryState.init();
  }

  componentDidMount() {
      HistoryApi.getHistory().then((history) => this.populateInitialState(history))
                             .catch((error) => console.log(error.message));
  }

  populateInitialState(history) {
    const games = history.games;
    const newState = games.reduce((state, game) => {
      return HistoryState.update(state, game.board, game.timestamp); 
    }, this.state);
    this.setState(newState);
  }

  onGameOver(finalMarks) {
    const timestamp = this.dateTimeNow();
    this.setState(HistoryState.update(this.state, finalMarks, timestamp));
    HistoryApi.updateHistory(finalMarks, timestamp);
  }

  dateTimeNow() {
    return (new Date().toISOString());
  }

  render() {
    return (
      <div>
        <div className="container">
          <h1>Tic-Tac-Toe</h1>
          <BoardContainer dimension={3}
                          onGameOver={ (finalMarks) => this.onGameOver(finalMarks) } />
        </div>
        <History games={this.state.games} />
      </div>
    );
  }
}

export default TicTacToeContainer;
