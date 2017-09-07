import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Board from './Board.js'

class BoardContainer extends Component {
  
  handleClick(i) {
     console.log(i); 
  }

  render() {
    return React.createElement(Board, {dimension: this.props.dimension, handleClick: (i) => this.handleClick(i)})
  }
}

BoardContainer.propTypes = {
  dimension: PropTypes.number
}

export default BoardContainer;
