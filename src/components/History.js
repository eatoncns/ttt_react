import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Collapsible from 'react-collapsible';
import Board from 'components/Board';
import './History.css';

function HistoryRow(props) {
  const game = props.game;
  const boardState = {marks: game.finalMarks, gameOver: true};
  const noop = () => null;
  return (
    <div className="history-row">
      <div>{props.localise(game.timestamp)}</div>
      <div>{game.result}</div>
      <Collapsible trigger="Final board"> 
        <Board boardState={boardState} handleClick={noop} />
      </Collapsible>
    </div>
  );
}

class History extends Component {
  render() {
    const localise = (timestamp) => new Date(timestamp).toLocaleString();
    const historyRows = this.props.games.map((game, index) => <HistoryRow key={index}
                                                                          game={game}
                                                                          localise={localise} />);
    return (
      <Collapsible trigger="Previous games">
        {historyRows} 
      </Collapsible>
    );
  }
}

const gamePropType = PropTypes.shape({
  timestamp: PropTypes.string.isRequired,
  result: PropTypes.string.isRequired,
  finalMarks: PropTypes.arrayOf(PropTypes.string).isRequired
});

History.propTypes = {
  games: PropTypes.arrayOf(gamePropType).isRequired
};

HistoryRow.propTypes = {
  game: gamePropType.isRequired,
  localise: PropTypes.func.isRequired
};

export { HistoryRow };
export default History;
