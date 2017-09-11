import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Board from './Board';
import Result from './Result';
import * as BoardState from './BoardState';

class BoardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = BoardState.init(props.dimension); 
  }

  render() {
    const setMark = (index) => this.setState(BoardState.update(this.state, index));
    return (
      <div>
        <Board marks={ this.state.marks } handleClick={ setMark } />
        <Result marks={ this.state.marks }/>
      </div>
    );
  }
}

BoardContainer.propTypes = {
  dimension: PropTypes.number
};

export default BoardContainer;
