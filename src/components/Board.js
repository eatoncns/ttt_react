import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ResultLogic } from 'ttt/ResultLogic'
import './Board.css';

function Space(props) {
  const disabled = (props.mark !== '' || props.gameOver);
  let className = 'btn cell btn-cell';
  if (props.winningSpace) {
    className += ' winning-cell';
  }
  return (
    <button className={className} disabled={disabled} onClick={() => props.handleClick()}>{props.mark}</button>
  );
}

class Board extends Component {

  renderElements(numElements, contents) {
    let elements = [];
    for (let i = 0; i < numElements; i++) {
      elements.push(contents(i));
    }
    return elements;
  }

  renderSpace(index, winningSpaces) {
    const mark = this.props.boardState.marks[index];
    const handleClick = () => this.props.handleClick(index);
    const gameOver = this.props.boardState.gameOver;
    const winningSpace = (winningSpaces.indexOf(index) !== -1);
    return (
      <Space key={index} 
             mark={mark}
             handleClick={handleClick}
             gameOver={gameOver}
             winningSpace={winningSpace} />
    );
  }

  renderRow(index, dimension, spaces) {
      const rowStart = index*dimension;
      const rowEnd = rowStart + dimension;
      return (<div key={index} className={'row'}>{spaces.slice(rowStart, rowEnd)}</div>);
  }

  render() {
    const marks = this.props.boardState.marks;
    const size = marks.length;
    const dimension = Math.sqrt(size);
    const winningSpaces = ResultLogic.winningSpaces(marks);
    const spaces = this.renderElements(size, (i) => this.renderSpace(i, winningSpaces));
    const rows = this.renderElements(dimension, (i) => this.renderRow(i, dimension, spaces));
    return (
      <div className="board">
        {rows}
      </div>
    );
  }
}

Space.propTypes = {
  mark: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  gameOver: PropTypes.bool.isRequired,
  winningSpace: PropTypes.bool.isRequired
};

Board.propTypes = {
  boardState: PropTypes.shape({
    marks: PropTypes.arrayOf(PropTypes.string).isRequired,
    gameOver: PropTypes.bool.isRequired
  }).isRequired,
  handleClick: PropTypes.func.isRequired
};

export {Space};
export default Board;
