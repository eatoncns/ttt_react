export const init = (dimension) => ({ marks: Array(dimension*dimension).fill('') });

export const update = (boardState, index, value) => {
  const newBoardMarks = boardState.marks.slice();
  newBoardMarks[index] = value;
  return { marks: newBoardMarks };
};
