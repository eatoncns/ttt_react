import React, { Component } from 'react';
import Collapsible from 'react-collapsible';

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
