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

  // TODO: Handle bad request in Node app and back message in json
  getSeptaData(route){
    fetch(`/septa_client/${route}`)
      .then(res => res.json())
      .then(this.checkResponse.bind(this))
      .then(buses => this.setState({ buses }))
  }

  handleSubmit(e){
    if(this.refs.route.value === ""){
      alert("You must enter a route number to see buses")
    } else if(/\D/.test(this.refs.route.value)) {
      alert("Please enter numbers only")
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
      var noBuses = <NoBuses />
    }

    return (
      <div>
        <div className="collapse navbar-collapse septa-navbar">
          <form onSubmit={this.handleSubmit.bind(this)} className="navbar-form navbar-left">
            <div className="form-group">
              <span className="">Enter your route / bus number: </span>
              <input type="text" ref="route" className="form-control bus-number-area" placeholder="Bus Number"/>
            </div>
            <input type="submit" value="Find buses" className="btn btn-default"/>
          </form>
        </div>
        <div className="container">
          { noBuses }
          { busInfo }
          { philaMap }
        </div>
      </div>
    );
  }
}

BusGetter.propTypes = {
  handleSubmit: PropTypes.func,
  getSeptaData: PropTypes.func
}

export default BusGetter;
