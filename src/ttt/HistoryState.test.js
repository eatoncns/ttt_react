import { HistoryState } from './HistoryState.js';

describe('HistoryState', () => {
  let initialState;

  beforeEach(() => {
    initialState = HistoryState.init();
  });

  describe('#init', () => {
    it('initialises empty games', () => {
      expect(initialState.games).toEqual([]);
    });
  });
  
  describe('#update', () => {
    it('updates games with new final state', () => {
      const finalMarks = ['X','X','X','O','O','','','',''];
      const dateTime = '2017-09-19T09:13:04.000Z';
      const updatedState = HistoryState.update(initialState, finalMarks, dateTime);
      const expectedGame = {
        timestamp: dateTime,
        result: "X win",
        finalMarks: finalMarks
      };
      expect(updatedState.games[0]).toEqual(expectedGame);
    });
  });
});
