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

  it ('renders a board', () => {
    const app = shallow(<App />);
    expect(app.find(BoardContainer)).toHaveLength(1);
  });
});
