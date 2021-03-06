import React from 'react';
import { shallow } from 'enzyme';
import BoardContainer from './BoardContainer';
import Board from 'components/Board';
import Result from 'components/Result';

describe('<BoardContainer />', () => {
  let boardContainer;

  beforeEach(() => {
    const onGameOver = jest.fn();
    boardContainer = shallow(<BoardContainer dimension={4} 
                                             onGameOver={onGameOver}/>);
  });

  it('renders a board', () => {
    const boardComponents = boardContainer.find(Board);
    expect(boardComponents).toHaveLength(1);
  });

  it('renders a result', () => {
    const resultComponents = boardContainer.find(Result);
    expect(resultComponents).toHaveLength(1);
  });

});
