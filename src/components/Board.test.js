import React from 'react';
import { shallow } from 'enzyme';
import Board, { Space } from './Board';

describe('<Board />', () => {
  let dimension;
  let marks;
  let board;

  beforeEach(() => {
    dimension = 3;
    marks = Array(dimension*dimension).fill('');
    const handleClick = jest.fn();
    board = shallow(<Board marks={marks} handleClick={handleClick}/>);
  });

  it ('renders dimension rows', () => {
    expect(board.find('div.row')).toHaveLength(dimension);
  });

  it ('renders dimension spaces in each row', () => {
    const row = board.find('div.row').first();
    expect(row.find(Space)).toHaveLength(dimension);
  });
});

describe('<Space />', () => {
  let mark;
  let handleClick;
  let space;
  let gameOver;

  beforeEach(() => {
    mark = 'X';
    handleClick = jest.fn();
    gameOver = false;
    space = shallow(<Space mark={mark} handleClick={handleClick} gameOver={gameOver}/>);
  });

  it ('renders a button', () => {
    expect(space.find('button')).toHaveLength(1);
  });

  it ('sets button text to mark', () => {
    expect(space.find('button').text()).toEqual(mark);
  });

  it ('calls given handler when button clicked', () => {
    space.find('button').simulate('click');
    expect(handleClick).toHaveBeenCalled();
  });
})
