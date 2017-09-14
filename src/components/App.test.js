import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
import BoardContainer from 'containers/BoardContainer';
import History from 'components/History';

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
      const historyComponents = app.find(History);
      expect(historyComponents).toHaveLength(1);
    });

  });

});
