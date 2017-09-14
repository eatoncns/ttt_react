import React from 'react';
import { shallow } from 'enzyme';
import TicTacToeContainer from './TicTacToeContainer'
import History from 'components/History';
import BoardContainer from 'containers/BoardContainer'

describe('<TicTacToeContainer />', () => {
  let ttt;

  beforeEach(() => {
    ttt = shallow(<TicTacToeContainer />);
  });

  it ('renders a board container', () => {
    const boardContainers = ttt.find(BoardContainer);
    expect(boardContainers).toHaveLength(1);
  });

  it('renders game history component', () => {
    const historyComponents = ttt.find(History);
    expect(historyComponents).toHaveLength(1);
  });
});
