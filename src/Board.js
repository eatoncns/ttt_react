import React, { Component } from 'react';
import './Board.css';

function Space(props) {
  return (
    <button className='btn cell btn-cell' onClick={() => props.handleClick()}></button>
  );
}

class Board extends Component {

  buildBlah(dimension, contents) {
    var elements = [];
    for (var i = 0; i < dimension; i++) {
      elements.push(contents(i));
    }
    return elements;

  }
  renderSpaces(dimension) {
    return this.buildBlah(dimension, (i) => <Space key={i} />)
  }

  renderRows(dimension) {
    return this.buildBlah(dimension, (i) => 
      <div key={i} className={'row'}>{this.renderSpaces(dimension)}</div>
    );
  }

  render() {
    return (
      <div className="board">
        {this.renderRows(this.props.dimension)}
      </div>
    );
  }
}

export {Space};
export default Board;
