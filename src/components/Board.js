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

  renderSpace(index, gameOver, winningSpaces) {
    const winningSpace = (winningSpaces.indexOf(index) !== -1);
    return (
      <Space key={index} 
             mark={this.props.marks[index]}
             handleClick={() => this.props.handleClick(index)}
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
    const size = this.props.marks.length;
    const dimension = Math.sqrt(size);
    const gameOver = ResultLogic.isGameOver(this.props.marks);
    const winningSpaces = ResultLogic.winningSpaces(this.props.marks);
    const spaces = this.renderElements(size, (i) => this.renderSpace(i, gameOver, winningSpaces));
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
  marks: PropTypes.arrayOf(PropTypes.string),
  handleClick: PropTypes.func.isRequired
};

export {Space};
export default Board;
