export const ResultLogic = (function() {
  const me = {};

  me.isGameOver = function(board) {
    return (winningLinePresent(board) || allSpacesTaken(board));
  }

  me.isDrawn = function(board) {
    return (allSpacesTaken(board) && !winningLinePresent(board));
  }

  me.winningMark = function(board) {
    const winningLine = lines(board).find(line => isWinningLine(board, line));
    if (winningLine !== undefined) {
      return board[winningLine[0]];
    }
    return null;
  }

  function winningLinePresent(board) {
    return lines(board).some(line => isWinningLine(board, line));  
  }

  function lines(board) {
    const dimension = dimensionOf(board);
    const rows = rowsFrom(dimension);
    const columns = columnsFrom(rows);
    const diagonals = diagonalsFrom(rows);
    return [...rows, ...columns, ...diagonals];
  }

  function rowsFrom(dimension) {
    const spaces = range(dimension*dimension);
    var rows = [];
    for (var rowIndex = 0; rowIndex < spaces.length; rowIndex += dimension) {
      rows.push(spaces.slice(rowIndex, rowIndex + dimension));
    }
    return rows;
  }

  function range(x) {
    return [...Array(x).keys()];
  }

  function columnsFrom(rows) {
    var cols = [];
    for (var colIndex = 0; colIndex < rows.length; colIndex++) {
      const col = rows.map(row => row[colIndex]); 
      cols.push(col);
    }
    return cols;
  }

  function diagonalsFrom(rows) {
    const leftToRight = rows.map((row, rowIndex) => row[rowIndex]);
    const rightToLeft = rows.map((row, rowIndex) => row[rows.length-rowIndex-1]);
    return [leftToRight, rightToLeft];
  }


  function dimensionOf(board) {
    return Math.sqrt(board.length);
  }

  function isWinningLine(board, line) {
    const firstMark = board[line[0]];
    return (firstMark !== '' && line.every(space => board[space] === firstMark));
  }

  function allSpacesTaken(board) {
    const spacesTaken = board.filter(mark => mark !== '').length;
    return (spacesTaken === board.length);
  }

  return me;
}());
