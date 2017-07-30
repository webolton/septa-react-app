import React, { Component } from 'react';
import NotInService from './NotInService'

class NoBuses extends Component {

  render() {
    return (
      <div>
        <div className="alert alert-danger" role="alert">
          No buses were Found! Either the route number was wrong, or you're walkin'.
        </div>
        <NotInService />
      </div>
    );
  }
}

export default NoBuses;