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

  it ('renders a board container', () => {
    const app = shallow(<App />);
    const boardContainers = app.find(BoardContainer);
    expect(boardContainers).toHaveLength(1);
  });
});
