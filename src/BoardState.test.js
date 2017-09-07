import * as BoardState from './BoardState';

describe ('BoardState', () => {
  let dimension;

  beforeEach(() => {
    dimension = 3;
  });
  
  describe('#init', () => {
    it ('initialises an empty board', () => {
      expect(BoardState.init(dimension).marks).toEqual(['', '', '', '', '', '', '', '', '']);
    }); 

    it ('sets first player to X', () => {
      expect(BoardState.init(dimension).currentPlayer).toEqual('X');
    });
  });

  describe('#update', () => {
    let boardState;
    let index;

    beforeEach(() => {
      boardState = BoardState.init(dimension);
      index = 3;
    })

    it ('updates the board marks', () => {
      expect(BoardState.update(boardState, index).marks).toEqual(['', '', '', 'X', '', '', '', '', '']);
    });

    it ('switches the current player', () => {
      const newBoardState = BoardState.update(boardState, index);
      expect(newBoardState.currentPlayer).toEqual('O');  
      expect(BoardState.update(newBoardState, index+1).currentPlayer).toEqual('X');
    });
  });

});
