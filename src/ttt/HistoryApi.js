export const HistoryApi = (function() {
  const me = {};

  const endpoint = 'http://ttt-history-dev.eu-west-2.elasticbeanstalk.com/history';

  me.getHistory = () => { 
    return fetch(endpoint).then((response) => checkResponse(response));
  };

  me.updateHistory = (board, timestamp) => {
    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        timestamp: timestamp,
        board: board
      })
    });
  };

  const checkResponse = (response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Network response was not ok');
  };

  return me;
}());
