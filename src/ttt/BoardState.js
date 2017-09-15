import { ResultLogic } from './ResultLogic.js';

export const BoardState = (function() {
  const me = {};

  me.init = (dimension) => ({ marks: Array(dimension*dimension).fill(''),
                              gameOver: false });

  me.update = (boardState, index) => {
    const newBoardMarks = boardState.marks.slice();
    newBoardMarks[index] = currentPlayer(boardState);
    const isGameOver = ResultLogic.isGameOver(newBoardMarks);
    return { marks: newBoardMarks, gameOver: isGameOver };
  };

  const currentPlayer = (boardState) => {
    const populatedSpaces = boardState.marks.filter((mark) => mark !== '');
    return isEven(populatedSpaces.length) ? 'X' : 'O';
  };

  const isEven = (number) => {
    return (number % 2) === 0;
  };

  return me;
}());


