import React, { Component } from 'react';

class BusInfo extends Component {

  render() {

    let busCount = this.props.buses.length

    return (
      <div className="alert alert-success" role="alert">
        There are {busCount} buses traveling on this route. If you're lucky, there might be one coming!
      </div>
    );
  }
}

export default BusInfo;
