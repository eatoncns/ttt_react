import React from 'react';
import { shallow } from 'enzyme';
import History from 'components/History';
import Collapsible from 'react-collapsible';

describe('<History />', () => {

  it('renders a collapsible paragraph', () => {
    const historyComponent = shallow(<History />);
    const collapsibles = historyComponent.find(Collapsible); 
    expect(collapsibles.first().find('p')).toHaveLength(1);
  });

});
