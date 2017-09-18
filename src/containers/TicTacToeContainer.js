import React, { Component } from 'react';
import History from 'components/History';
import BoardContainer from 'containers/BoardContainer';
import { HistoryState } from 'ttt/HistoryState';

class TicTacToeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = HistoryState.init();
  }

  componentDidMount() {
    const endpoint = 'http://ttt-history-dev.eu-west-2.elasticbeanstalk.com/history';
    fetch(endpoint).then((response) => this.checkResponse(response))
                   .then((responseJson) => this.populateInitialState(responseJson))
                   .catch((error) => console.log(error.message));
  }

  checkResponse(response) {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Network response was not ok');
  }

  populateInitialState(responseJson) {
    const games = responseJson.games;
    const newState = games.reduce((state, game) => {
      return HistoryState.update(state, game.board, () => game.timestamp); 
    }, this.state);
    this.setState(newState);
  }

  onGameOver(finalMarks) {
    this.setState(HistoryState.update(this.state, finalMarks, this.dateTimeNow));
  }

  dateTimeNow() {
    return (new Date().toLocaleString('en-GB'));
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
