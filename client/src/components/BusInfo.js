import React, { Component } from 'react';

class BusInfo extends Component {

  render() {

    let busCount = this.props.buses.length

    return (
      <div>
        There are {busCount} buses traveling on this route.
      </div>
    );
  }
}

export default BusInfo;
