import { ResultLogic } from 'ttt/ResultLogic'

export const HistoryState = (function() {
  const me = {};

  me.init = () => {
    return { games: [] };
  };

  me.update = (state, newMarks, dateTimeFunction)  => {
    const updatedGames = state.games.slice();
    const newGame = {
      timestamp: dateTimeFunction(),
      result: resultFrom(newMarks),
      finalMarks: newMarks
    };
    updatedGames.push(newGame);
    return { games: updatedGames };
  };

  const resultFrom = (marks) => {
    if (ResultLogic.isDrawn(marks))
    {
      return "Draw";
    }
    return (ResultLogic.winningMark(marks) + " win");
  };

  return me;
}());
