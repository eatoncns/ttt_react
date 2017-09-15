import React from 'react';
import PropTypes from 'prop-types';
import { ResultLogic } from 'ttt/ResultLogic';
import './Result.css';

function Result(props) {
  if (!props.boardState.gameOver)
  {
    return null;
  }
  const marks = props.boardState.marks;
  const message = ResultLogic.isDrawn(marks) 
    ? "It's a draw!" 
    : ResultLogic.winningMark(marks) + " wins! Congrats!"; 

  return(
    <div className="result">
      <p>{message}</p>
      <button className={"btn btn-default"} onClick={props.handleClick}>New Game</button>
    </div>
  );
}

Result.propTypes = {
  boardState: PropTypes.shape({
    marks: PropTypes.arrayOf(PropTypes.string).isRequired,
    gameOver: PropTypes.bool.isRequired
  }).isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Result;
