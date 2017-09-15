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
    let dummyDateTime = () => '14/09/2017, 09:45:48';

    it('updates games with new final state', () => {
      const finalMarks = ['X','X','X','O','O','','','',''];
      const updatedState = HistoryState.update(initialState, finalMarks, dummyDateTime);
      const expectedGame = {
        timestamp: "14/09/2017, 09:45:48",
        result: "X win",
        finalMarks: ['X','X','X','O','O','','','','']
      };
      expect(updatedState.games[0]).toEqual(expectedGame);
    });
  });
});
