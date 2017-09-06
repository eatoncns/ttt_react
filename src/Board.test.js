import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Board, { Row, Space } from './Board';

describe('<Board />', () => {
  it ('renders dimension rows', () => {
    const board = shallow(<Board dimension={4}/>);
    expect(board.find(Row)).toHaveLength(4);
  });
});

describe('<Row />', () => {
  let row;

  beforeEach(() => {
    row = shallow(<Row dimension={4}/>);
  })

  it ('renders a row div', () => {
    expect(row.find('div.row')).toHaveLength(1);
  });

  it ('renders dimension spaces', () => {
    expect(row.find(Space)).toHaveLength(4);
  });
});

describe('<Space />', () => {
  it ('renders a button', () => {
    const space = shallow(<Space />);
    expect(space.find('button')).toHaveLength(1);
  })
})
