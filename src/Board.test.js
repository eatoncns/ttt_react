import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Board, { Space } from './Board';

describe('<Board />', () => {
  let board;

  beforeEach(() => {
    board = shallow(<Board dimension={4}/>);
  });

  it ('renders dimension rows', () => {
    expect(board.find('div.row')).toHaveLength(4);
  });

  it ('renders dimension^2 spaces', () => {
    expect(board.find(Space)).toHaveLength(16);
  });
});

describe('<Space />', () => {
  it ('renders a button', () => {
    const space = shallow(<Space />);
    expect(space.find('button')).toHaveLength(1);
  });

  it ('calls given handler when button clicked', () => {
    const handleClick = jest.fn();
    const space = shallow(<Space handleClick={handleClick}/>);
    space.find('button').simulate('click');
    expect(handleClick).toHaveBeenCalled();
  });
})
