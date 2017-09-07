import * as BoardState from './BoardState';

describe ('BoardState', () => {
  let dimension;

  beforeEach(() => {
    dimension = 3;
  });
  
  describe('#init', () => {
    it ('initialises an empty board', () => {
      expect(BoardState.init(dimension)).toEqual({marks:['', '', '', '', '', '', '', '', '']});  
    }); 
  });

  describe('#update', () => {
    it ('updates the board marks', () => {
      const boardState = BoardState.init(dimension);
      const index = 3;
      const mark = 'X'; 
      expect(BoardState.update(boardState, index, mark)).toEqual({marks: ['', '', '', 'X', '', '', '', '', '']});
    });
  });

});
