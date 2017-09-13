import React from 'react';
import { shallow } from 'enzyme';
import HistoryComponent from 'components/HistoryComponent';
import Collapsible from 'react-collapsible';

describe('<HistoryComponent />', () => {

  it('renders a collapsible paragraph', () => {
    const historyComponent = shallow(<HistoryComponent />);
    const collapsibles = historyComponent.find(Collapsible); 
    expect(collapsibles.first().find('p')).toHaveLength(1);
  });

});
