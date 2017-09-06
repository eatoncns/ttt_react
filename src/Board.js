import React, { Component } from 'react'

function Space(props) {
  return (
    <button></button>
  );
}

function Row(props) {
  var spaces = [];
  for (var i = 0; i < props.dimension; i++) {
    spaces.push(<Space key={i} />);
  }
  return (
    <div className="row">
      {spaces}
    </div>
  );
}

class Board extends Component {
  render() {
    const dimension = this.props.dimension;
    var rows = [];
    for (var i = 0; i < dimension; i++) {
      rows.push(<Row key={i} dimension={dimension} />);
    }
    return (
      <div className="board">
        {rows}
      </div>
    );
  }
}

export default Board;
