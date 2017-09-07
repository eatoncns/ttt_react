import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Board, { Space } from './Board';

describe('<Board />', () => {
  let dimension;
  let board;

  beforeEach(() => {
    dimension = 4;
    const handleClick = jest.fn();
    board = shallow(<Board dimension={dimension} handleClick={handleClick}/>);
  });

  it ('renders dimension rows', () => {
    expect(board.find('div.row')).toHaveLength(dimension);
  });

  it ('renders dimension^2 spaces', () => {
    expect(board.find(Space)).toHaveLength(dimension*dimension);
  });

  it ('passes click handler to spaces', () => {
    expect(board.find(Space).first().prop('handleClick')).toBeDefined();
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
