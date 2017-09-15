import React, { Component } from 'react';
import History from 'components/History';
import BoardContainer from 'containers/BoardContainer'

class TicTacToeContainer extends Component {
  constructor(props) {
    super(props);
    const games = [{timestamp: "14/09/2017, 09:45:48",
                    result: "X win",
                    finalMarks: ['X','X','X','O','O','','','','']}, 
                   {timestamp: "14/09/2017, 10:00:54",
                    result: "O win",
                    finalMarks: ['O','O','O','X','X','','X','','']}]; 
    this.state = { games: games };
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
