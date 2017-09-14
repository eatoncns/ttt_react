import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Collapsible from 'react-collapsible';
import Board from 'components/Board';
import './History.css';

function HistoryRow(props) {
  const game = props.game;
  return (
    <div className="history-row">
      <div>{game.timestamp}</div>
      <div>{game.result}</div>
      <Collapsible trigger="Final board"> 
        <Board marks={game.finalMarks} handleClick={() => null} />
      </Collapsible>
    </div>
  );
}

class History extends Component {
  render() {
    const history = { games: [{timestamp: "14/09/2017, 09:45:48",
                               result: "X win",
                               finalMarks: ['X','X','X','O','O','','','','']}, 
                              {timestamp: "14/09/2017, 10:00:54",
                               result: "O win",
                               finalMarks: ['O','O','O','X','X','','X','','']}] };
    const historyRows = history.games.map((game, index) => <HistoryRow key={index} game={game}/>);
    return (
      <Collapsible trigger="Previous games">
        {historyRows} 
      </Collapsible>
    );
  }
}

HistoryRow.propTypes = {
  game: PropTypes.shape({
    timestamp: PropTypes.string.isRequired,
    result: PropTypes.string.isRequired,
    finalMarks: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
};

export { HistoryRow };
export default History;
