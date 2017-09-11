import React from 'react';
import PropTypes from 'prop-types';
import { ResultLogic } from './ResultLogic'

function Result(props) {
  if (!ResultLogic.isGameOver(props.marks))
  {
    return null;
  }
  const message = ResultLogic.isDrawn(props.marks) 
    ? "It's a draw!" 
    : ResultLogic.winningMark(props.marks) + " wins! Congrats!"; 

  return(
    <p>{message}</p>
  );
}

Result.propTypes = {
  marks: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Result;
