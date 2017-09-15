import React from 'react';
import { shallow } from 'enzyme';
import Result from './Result';

describe('<Result />', () => {
  let marks;
  let gameOver;
  let boardState;
  let handleClick;
  
  beforeEach(() => {
    marks = ['X','X','O','O','O','X','X','X','O']; 
    boardState = {marks: marks, gameOver: true};
    handleClick = jest.fn();
  });

  it('does not render for in progress game', () => {
    marks = ['X', '','','O','','','','',''];
    boardState = {marks: marks, gameOver: false};
    const result = shallow(<Result boardState={ boardState } handleClick={ handleClick }/>);
    expect(result.find('p')).toHaveLength(0);
    expect(result.find('input')).toHaveLength(0);
  });

  it('renders a winning message for won game', () => {
    marks = ['X','X','X','O','O','','','',''];
    boardState = {marks: marks, gameOver: true};
    const result = shallow(<Result boardState={ boardState } handleClick={ handleClick }/>);
    expect(result.find('p').text()).toContain('X wins');
  });

  it('renders result message for drawn game', () => {
    const result = shallow(<Result boardState={ boardState } handleClick={ handleClick }/>);
    expect(result.find('p').text()).toContain('draw');
  });

  it('renders a new game button when game is over', () => {
    const result = shallow(<Result boardState={ boardState } handleClick={ handleClick }/>);
    expect(result.find('button').text()).toBe('New Game'); 
  });

  it('calls handleClick when button is pressed', () => {
    const result = shallow(<Result boardState={ boardState } handleClick={ handleClick }/>);
    result.find('button').simulate('click');
    expect(handleClick).toHaveBeenCalled(); 
  });
});
