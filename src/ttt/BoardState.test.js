import { BoardState } from './BoardState';

describe ('BoardState', () => {
  let dimension;

  beforeEach(() => {
    dimension = 3;
  });
  
  describe('#init', () => {
    it ('initialises an empty board', () => {
      expect(BoardState.init(dimension).marks).toEqual(['', '', '', '', '', '', '', '', '']);
    }); 

    it('initialises game over to false', () => {
      expect(BoardState.init(dimension).gameOver).toEqual(false);
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
      const moveSequence = [index, index+1, index+2];
      const finalState = moveSequence.reduce(BoardState.update, boardState);
      expect(finalState.marks).toEqual(['', '', '', 'X', 'O', 'X', '', '', '']);
    });

    it('updates gameOver when game is in complete state', () => {
      const winningMoveSequence = [0, 3, 1, 4, 2];
      const finalState = winningMoveSequence.reduce(BoardState.update, boardState);
      expect(finalState.gameOver).toEqual(true);
    });

    it('does not update gameOver until game is in complete state', () => {
      const moveSequence = [0, 3, 1, 4];
      const finalState = moveSequence.reduce(BoardState.update, boardState);
      expect(finalState.gameOver).toEqual(false);
    });
  });

});
