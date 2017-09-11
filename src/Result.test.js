import React from 'react';
import { shallow } from 'enzyme';
import Result from './Result';

describe('<Result />', () => {
  it('does not render for in progress game', () => {
    const marks = ['X', '','','O','','','','',''];
    const result = shallow(<Result marks={ marks } />);
    expect(result.find('p')).toHaveLength(0);
  });

  xit('renders a winning message for won game', () => {
    const marks = ['X','X','X','O','O','','','',''];
    const result = shallow(<Result marks={ marks } />);
    expect(result.find('p').text()).toContain('X wins');
  });

  xit('renders result message for drawn game', () => {
    const marks = ['X','X','O','O','O','X','X','X','O']; 
    const result = shallow(<Result marks={ marks } />);
    expect(result.find('p').text()).toContain('drawn');
  });
});
