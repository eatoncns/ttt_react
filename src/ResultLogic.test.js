import { ResultLogic } from './ResultLogic';

describe('ResultLogic', () => {
  describe('#isGameOver', () => {
    it('returns false for empty board', () => {
      const size = 9;
      const board = Array(size).fill('');
      expect(ResultLogic.isGameOver(board)).toBe(false);
    });

    it('returns true when game is drawn', () => {
      const drawn_board = ['X','X','O','O','O','X','X','X','O'];
      expect(ResultLogic.isGameOver(drawn_board)).toBe(true);
    });

    it('returns true when game is won', () => {
      const won_board = ['X','X','X','O','O','','','',''];
      expect(ResultLogic.isGameOver(won_board)).toBe(true);
    });

    it('returns false when game is in progress', () => {
      const in_progress_board = ['X','O','X','','','','','',''];
      expect(ResultLogic.isGameOver(in_progress_board)).toBe(false);
    });
  });
});
