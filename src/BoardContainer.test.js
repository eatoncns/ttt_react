import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import BoardContainer from './BoardContainer';
import Board from './Board';

describe('<BoardContainer />', () => {
  let dimension;
  let boardContainer;
  let boardComponents;

  beforeEach(() => {
    dimension = 4;
    boardContainer = shallow(<BoardContainer dimension={dimension} />);
    boardComponents = boardContainer.find(Board);
  });
  
  it('renders a board', () => {
    expect(boardComponents).toHaveLength(1);
  });

  it ('passes dimension to board component', () => {
    expect(boardComponents.first().prop('dimension')).toEqual(dimension);
  });

  it ('passes a click handler to board', () => {
    expect(boardComponents.first().prop('handleClick')).toBeDefined();
  });
});
