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

  it ('renders dimension spaces in each row', () => {
    const row = board.find('div.row').first();
    expect(row.find(Space)).toHaveLength(dimension);
  });
});

describe('<Space />', () => {
  let mark;
  let handleClick;
  let space;

  beforeEach(() => {
    mark = 'X';
    handleClick = jest.fn();
    space = shallow(<Space mark={mark} handleClick={handleClick}/>);
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
