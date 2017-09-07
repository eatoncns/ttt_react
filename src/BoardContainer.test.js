import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import BoardContainer from './BoardContainer';
import Board from './Board';

describe('<BoardContainer />', () => {

  it('renders a board', () => {
    const boardContainer = shallow(<BoardContainer dimension={4} />);
    const boardComponents = boardContainer.find(Board);
    expect(boardComponents).toHaveLength(1);
  });

});
