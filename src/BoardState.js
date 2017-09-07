export const init = (dimension) => ({ currentPlayer: 'X', marks: Array(dimension*dimension).fill('') });

export const update = (boardState, index) => {
  const newBoardMarks = boardState.marks.slice();
  newBoardMarks[index] = boardState.currentPlayer;
  const newCurrentPlayer = boardState.currentPlayer === 'X' ? 'O' : 'X'; 
  return { currentPlayer: newCurrentPlayer, marks: newBoardMarks };
};
