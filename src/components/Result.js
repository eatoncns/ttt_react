import React from 'react';
import PropTypes from 'prop-types';
import { ResultLogic } from 'ttt/ResultLogic';
import './Result.css';

function Result(props) {
  if (!ResultLogic.isGameOver(props.marks))
  {
    return null;
  }
  const message = ResultLogic.isDrawn(props.marks) 
    ? "It's a draw!" 
    : ResultLogic.winningMark(props.marks) + " wins! Congrats!"; 

  return(
    <div className="result">
      <p>{message}</p>
      <button className={"btn btn-default"} onClick={props.handleClick}>New Game</button>
    </div>
  );
}

Result.propTypes = {
  marks: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Result;
