import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Board from './Board'
import * as BoardState from './BoardState'

class BoardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = BoardState.init(props.dimension); 
  }

  render() {
    const setMark = (index) => this.setState(BoardState.update(this.state, index, 'X'));
    return React.createElement(Board, {marks: this.state.marks, handleClick: setMark});
  }
}

BoardContainer.propTypes = {
  dimension: PropTypes.number
}

export default BoardContainer;
