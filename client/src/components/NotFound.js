import React, { Component } from 'react';

class NotFound extends Component {

  render() {
    return (
      <div>
        <div className="alert alert-danger" role="alert">
          <h1>
            Status 404. The Septa website must be down.
          </h1>
        </div>
      </div>
    );
  }
}

export default NotFound;