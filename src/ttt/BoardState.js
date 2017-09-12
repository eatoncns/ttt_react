export const BoardState = (function() {
  const me = {};

  me.init = (dimension) => ({ marks: Array(dimension*dimension).fill('') });

  me.update = (boardState, index) => {
    const newBoardMarks = boardState.marks.slice();
    newBoardMarks[index] = currentPlayer(boardState);
    return { marks: newBoardMarks };
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


