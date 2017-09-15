import React from 'react';
import Collapsible from 'react-collapsible';
import { shallow } from 'enzyme';
import History, { HistoryRow } from 'components/History';
import Board from 'components/Board';

describe('<History />', () => {

  it('renders a collapsible HistoryRows', () => {
    const games = [{timestamp: "14/09/2017, 09:45:48",
                    result: "X win",
                    finalMarks: ['X','X','X','O','O','','','','']}, 
                   {timestamp: "14/09/2017, 10:00:54",
                    result: "O win",
                    finalMarks: ['O','O','O','X','X','','X','','']}]; 
    const historyComponent = shallow(<History games={games}/>);
    const collapsibles = historyComponent.find(Collapsible); 
    expect(collapsibles.first().find(HistoryRow)).toHaveLength(2);
  });

});

describe('HistoryRow />', () => {
  let game;
  let historyRow;
  let rowDiv;

  beforeEach(() => {
    game = {timestamp: "14/09/2017, 09:45:48",             
            result: "X win",
            finalMarks: ['X','X','X','O','O','','','','']};
    historyRow = shallow(<HistoryRow game={game} />)
    rowDiv = historyRow.find('.history-row');
  });

  it('renders game timestamp', () => {
    expect(rowDiv.text()).toEqual(expect.stringContaining('14/09/2017, 09:45:48'));
  });

  it('renders game result', () => {
    expect(rowDiv.text()).toEqual(expect.stringContaining('X win'));
  });

  it('renders collapsible final board', () => {
    const collapsibles = rowDiv.find(Collapsible);
    expect(collapsibles.first().find(Board)).toHaveLength(1);
  });
});
