import React, { Component } from 'react';
import History from 'components/History';
import BoardContainer from 'containers/BoardContainer';
import { HistoryState } from 'ttt/HistoryState';

class TicTacToeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = HistoryState.init();
    this.endpoint = 'http://ttt-history-dev.eu-west-2.elasticbeanstalk.com/history';
  }

  componentDidMount() {
    fetch(this.endpoint).then((response) => this.checkResponse(response))
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
      return HistoryState.update(state, game.board, game.timestamp); 
    }, this.state);
    this.setState(newState);
  }

  onGameOver(finalMarks) {
    const timestamp = this.dateTimeNow();
    this.setState(HistoryState.update(this.state, finalMarks, timestamp));
    this.pushGameToBackend(finalMarks, timestamp);
  }

  pushGameToBackend(finalMarks, timestamp) {
    fetch(this.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        timestamp: timestamp,
        board: finalMarks
      })
    });
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
