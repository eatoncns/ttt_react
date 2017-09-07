import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
import BoardContainer from './BoardContainer';

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  describe('component rendering', () => {
    let app;
    let boardContainers;

    beforeEach(() => {
      app = shallow(<App />);
      boardContainers = app.find(BoardContainer);
    })
    
    it ('renders a board container', () => {
      expect(boardContainers).toHaveLength(1);
    });

    it ('passes a dimension to board container', () => {
      expect(boardContainers.first().prop('dimension')).toBeDefined(); 
    });
  });
});
