import React, { Component } from 'react';
import Board from './Board.js'

class BoardContainer extends Component {
  
  handleClick(i) {
     console.log(i); 
  }

  render() {
    return React.createElement(Board, {dimension: this.props.dimension, handleClick: (i) => this.handleClick(i)})
  }
}

export default BoardContainer;
