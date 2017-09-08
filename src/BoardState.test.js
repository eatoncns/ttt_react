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

    it ('alternates between players', () => {
      const s1 = BoardState.update(boardState, index);
      const s2 = BoardState.update(s1, index+1);
      const s3 = BoardState.update(s2, index+2);
      expect(s3.marks).toEqual(['', '', '', 'X', 'O', 'X', '', '', '']);
    });
  });

});
