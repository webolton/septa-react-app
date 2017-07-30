import React, { Component } from 'react';

class NoBuses extends Component {

  render() {
    return (
      <div>
        <div className="alert alert-danger" role="alert">
          No buses were Found! Either the route number was wrong, or you're walkin'.
        </div>
      </div>
    );
  }
}

export default NoBuses;