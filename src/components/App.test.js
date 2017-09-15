import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
import TicTacToeContainer from 'containers/TicTacToeContainer';

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it ('renders a tic-tac-toe container', () => {
    const app = shallow(<App />);
    const tttContainers = app.find(TicTacToeContainer);
    expect(tttContainers).toHaveLength(1);
  });
});
