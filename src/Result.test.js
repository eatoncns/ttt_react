import React from 'react';
import { shallow } from 'enzyme';
import Result from './Result';

describe('<Result />', () => {
  it('does not render for in progress game', () => {
    const marks = ['X', '','','O','','','','',''];
    const result = shallow(<Result marks={ marks } />);
    expect(result.find('p')).toHaveLength(0);
    expect(result.find('input')).toHaveLength(0);
  });

  it('renders a winning message for won game', () => {
    const marks = ['X','X','X','O','O','','','',''];
    const result = shallow(<Result marks={ marks } />);
    expect(result.find('p').text()).toContain('X wins');
  });

  it('renders result message for drawn game', () => {
    const marks = ['X','X','O','O','O','X','X','X','O']; 
    const result = shallow(<Result marks={ marks } />);
    expect(result.find('p').text()).toContain('draw');
  });

  it('renders a new game button when game is over', () => {
    const marks = ['X','X','O','O','O','X','X','X','O']; 
    const result = shallow(<Result marks={ marks } />);
    expect(result.find('button').text()).toBe('New Game'); 
  });
});
