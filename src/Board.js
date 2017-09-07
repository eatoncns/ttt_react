import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Board.css';

function Space(props) {
  return (
    <button className='btn cell btn-cell' onClick={() => props.handleClick()}></button>
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
      <Space key={index} handleClick={() => this.props.handleClick(index)} />
    );
  }

  renderRow(index, dimension, spaces) {
      const rowStart = index*dimension;
      const rowEnd = rowStart + dimension;
      return (<div key={index} className={'row'}>{spaces.slice(rowStart, rowEnd)}</div>);
  }

  render() {
    const dimension = this.props.dimension;
    const size = dimension * dimension;
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
  handleClick: PropTypes.func.isRequired
};

Board.propTypes = {
  dimension: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired
};

export {Space};
export default Board;
