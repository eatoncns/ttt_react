import React, { Component } from 'react';
import './Board.css';

function Space(props) {
  return (
    <button className='btn cell btn-cell'></button>
  );
}

class Row extends Component {

  renderSpaces(dimension) {
    var spaces = [];
    for (var i = 0; i < dimension; i++) {
      spaces.push(<Space key={i} />);
    }
    return spaces;
  }

  render() {
    return (
      <div className="row">
        {this.renderSpaces(this.props.dimension)}
      </div>
    );
  }
}

class Board extends Component {

  renderRows(dimension) {
    var rows = [];
    for (var i = 0; i < dimension; i++) {
      rows.push(<Row key={i} dimension={dimension} />);
    }
    return rows; 
  }

  render() {
    return (
      <div className="board">
        {this.renderRows(this.props.dimension)}
      </div>
    );
  }
}

export default Board;
