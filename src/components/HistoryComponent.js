import React, { Component } from 'react';
import Collapsible from 'react-collapsible';
import './History.css';

class HistoryComponent extends Component {
  render() {
    return (
      <Collapsible trigger="Previous games">
        <p>Previous games will appear here!</p>
      </Collapsible>
    );
  }
}

export default HistoryComponent;
