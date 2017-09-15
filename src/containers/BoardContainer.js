import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Board from 'components/Board';
import Result from 'components/Result';
import { BoardState } from 'ttt/BoardState';
import { ResultLogic } from 'ttt/ResultLogic';

class BoardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = BoardState.init(props.dimension); 
  }

  setMark(index) {
    const nextState = BoardState.update(this.state, index);
    if (ResultLogic.isGameOver(nextState.marks)) {
      this.props.onGameOver(nextState.marks);
    }
    this.setState(nextState);
  }

  resetBoard() {
    this.setState(BoardState.init(this.props.dimension));
  }

  render() {
    return (
      <div>
        <Board boardState={ this.state } handleClick={ (index) => this.setMark(index) } />
        <Result boardState={ this.state } handleClick={ () => this.resetBoard() }/>
      </div>
    );
  }
}

BoardContainer.propTypes = {
  dimension: PropTypes.number.isRequired,
  onGameOver: PropTypes.func.isRequired
};

export default BoardContainer;
