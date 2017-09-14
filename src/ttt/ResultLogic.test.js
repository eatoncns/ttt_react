import { ResultLogic } from './ResultLogic';

describe('ResultLogic', () => {
  let emptyBoard;
  let drawnBoard;
  let wonBoard;
  let inProgressBoard;

  beforeEach(() => {
    emptyBoard = Array(9).fill('');
    drawnBoard = ['X','X','O','O','O','X','X','X','O'];
    wonBoard = ['X','X','X','O','O','X','X','O','O'];
    inProgressBoard = ['X','O','X','','','','','',''];
  });

  describe('#isGameOver', () => {
    it('returns false for empty board', () => {
      expect(ResultLogic.isGameOver(emptyBoard)).toBe(false);
    });

    it('returns true when game is drawn', () => {
      expect(ResultLogic.isGameOver(drawnBoard)).toBe(true);
    });

    it('returns true when game is won', () => {
      expect(ResultLogic.isGameOver(wonBoard)).toBe(true);
    });

    it('returns false when game is in progress', () => {
      expect(ResultLogic.isGameOver(inProgressBoard)).toBe(false);
    });
  });

  describe('#isDrawn', () => {
    it('returns true for drawn board', () => {
      expect(ResultLogic.isDrawn(drawnBoard)).toBe(true);
    }); 

    it('returns false for won board', () => {
      expect(ResultLogic.isDrawn(wonBoard)).toBe(false);
    });

    it('returns false when game is in progress', () => {
      expect(ResultLogic.isDrawn(inProgressBoard)).toBe(false);
    });
  });

  describe('#winningMark', () => {
    it('returns winning mark from won board', () => {
      expect(ResultLogic.winningMark(wonBoard)).toBe('X');
    });

    it('returns null when there is no winner', () => {
      expect(ResultLogic.winningMark(inProgressBoard)).toBeNull();
    });
  });

  describe('#winningSpaces', () => {
    it('returns empty array for in progress board', () => {
      expect(ResultLogic.winningSpaces(inProgressBoard)).toEqual([]);
    });

    it('returns empty array for drawn board', () => {
      expect(ResultLogic.winningSpaces(drawnBoard)).toEqual([]);
    });

    it('returns winningSpaces from won board', () => {
      expect(ResultLogic.winningSpaces(wonBoard)).toEqual([0, 1, 2]);
    });
  });
});
