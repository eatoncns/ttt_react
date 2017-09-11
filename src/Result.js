import React from 'react';
import PropTypes from 'prop-types';
import { ResultLogic } from './ResultLogic';

function Result(props) {
  if (!ResultLogic.isGameOver(props.marks))
  {
    return null;
  }
  const message = ResultLogic.isDrawn(props.marks) 
    ? "It's a draw!" 
    : ResultLogic.winningMark(props.marks) + " wins! Congrats!"; 

  return(
    <div>
      <p>{message}</p>
      <button className={"btn btn-default"}>New Game</button>
    </div>
  );
}

Result.propTypes = {
  marks: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Result;
