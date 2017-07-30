import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BusGetter extends Component {

  state = {busses: []}

  getSeptaData(route){
    fetch(`/septa_client/${route}`)
      .then(res => res.json())
      .then(busses => this.setState({ busses }));
  }

  handleSubmit(e){
    if(this.refs.route.value === ""){
      alert("A route is required!")
    } else {
      this.getSeptaData(this.refs.route.value);
    }
      e.preventDefault();
  };

  render() {
    return (
      <div>
        <h3>Find a bus!</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>What route are you taking?</label>
            <input type="text" ref="route" />
          </div>
          <input type="submit" value="submit" />
        </form>
        <div>
          {this.state.busses.map(bus =>
            <div key={bus.trip}>{bus.VehicleID}</div>
          )}
        </div>
      </div>
    );
  }
}

BusGetter.propTypes ={
  directions: PropTypes.array,
}

export default BusGetter;
