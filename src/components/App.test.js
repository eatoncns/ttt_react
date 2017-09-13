import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
import BoardContainer from 'containers/BoardContainer';
import HistoryComponent from 'components/HistoryComponent';

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  describe('component rendering', () => {
    let app;

    beforeEach(() => {
      app = shallow(<App />);
    });

    it ('renders a board container', () => {
      const boardContainers = app.find(BoardContainer);
      expect(boardContainers).toHaveLength(1);
    });

    it('renders game history component', () => {
      const historyComponents = app.find(HistoryComponent);
      expect(historyComponents).toHaveLength(1);
    });

  });

});
