import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PhilaMap from './PhilaMap'
import NoBuses from './NoBuses'
import BusInfo from './BusInfo'

class BusGetter extends Component {

  state = {buses: []}

  checkResponse(res){
    if(res.length === 0){
      this.setState({no_buses: true })
      this.setState({buses: [] })
      return res
    } else {
      this.setState({no_buses: false })
      return res
    }
  }

  getSeptaData(route){
    fetch(`/septa_client/${route}`)
      .then(res => res.json())
      .then(this.checkResponse.bind(this))
      .then(buses => this.setState({ buses }))
  }

  handleSubmit(e){
    if(this.refs.route.value === ""){
      alert("A route number is required!")
    } else if(/\D/.test(this.refs.route.value)) {
      alert("Only numbers premitted!")
    } else {
      this.getSeptaData(this.refs.route.value);
    }
      e.preventDefault();
  };

  // TODO: Calculate bounds and send with json from Node app
  // setMapBounds(buses){
  //   boundsHash = {}
  //   buses.forEach(function(bus) {

  //   })
  // }

  render() {

    if(this.state.buses.length > 0){
      var philaMap = <PhilaMap buses={this.state.buses}/>
      var busInfo = <BusInfo buses={this.state.buses}/>
    }

    if(this.state.no_buses === true){
      console.log("No Buses")
      var noBuses = <NoBuses />
    }

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
        { noBuses }
        { busInfo }
        { philaMap }
      </div>
    );
  }
}

BusGetter.propTypes = {
  handleSubmit: PropTypes.func,
  getSeptaData: PropTypes.func
}

export default BusGetter;
