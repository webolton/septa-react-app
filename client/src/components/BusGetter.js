import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PhilaMap from './PhilaMap'

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

  // TODO: Calculate bounds and send with json from Node app
  // setMapBounds(buses){
  //   boundsHash = {}
  //   busses.forEach(function(bus) {

  //   })
  // }

  render() {

    // if(this.state.busses.length > 0){
    //
    // }
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
        <PhilaMap busses={this.state.busses}/>
      </div>
    );
  }
}

BusGetter.propTypes = {
  handleSubmit: PropTypes.func,
  getSeptaData: PropTypes.func
}

export default BusGetter;
