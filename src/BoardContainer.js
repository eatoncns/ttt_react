import React, { Component } from 'react';
import Board from './Board.js'

class BoardContainer extends Component {
  
  handleClick() {
      
  }

  render() {
    return (
      <Board dimension={this.props.dimension} handleClick={() => this.handleClick()}/>
    );
  }
}

export default BoardContainer;
