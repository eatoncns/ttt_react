import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Board.css';

function Space(props) {
  return (
    <button className='btn cell btn-cell' onClick={() => props.handleClick()}>{props.mark}</button>
  );
}

class Board extends Component {

  renderElements(numElements, contents) {
    var elements = [];
    for (var i = 0; i < numElements; i++) {
      elements.push(contents(i));
    }
    return elements;
  }

  renderSpace(index) {
    return (
      <Space key={index} mark={this.props.marks[index]} handleClick={() => this.props.handleClick(index)} />
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
    const spaces = this.renderElements(size, (i) => this.renderSpace(i));
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
  handleClick: PropTypes.func.isRequired
};

Board.propTypes = {
  marks: PropTypes.arrayOf(PropTypes.string),
  handleClick: PropTypes.func.isRequired
};

export {Space};
export default Board;
