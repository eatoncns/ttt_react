import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Board from './Board.js'

class BoardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { marks: Array(props.dimension*props.dimension).fill('') }
  }
  
  handleClick(index) {
    const marks = this.state.marks.slice();
    marks[index] = 'X';
    this.setState({ marks: marks });
  }

  render() {
    return React.createElement(Board, {marks: this.state.marks, handleClick: (i) => this.handleClick(i)})
  }
}

BoardContainer.propTypes = {
  dimension: PropTypes.number
}

export default BoardContainer;
