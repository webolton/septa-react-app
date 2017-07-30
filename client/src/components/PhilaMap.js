import React, {Component} from 'react';
import PropTypes from 'prop-types';
import GoogleMap from 'google-map-react';
import SeptaMarker from './SeptaMarker.js';

class PhilaMap extends Component {

  directionHelper(direction){
    return direction.replace( /([A-Z])/g, " $1" );
  }

  static defaultProps = {
    center: [39.9516757, -75.1608584],
    zoom: 13,
  };

  render() {
    let busMarkers;
    if(this.props.busses.length > 0){
      busMarkers = this.props.busses.map(bus => {
        return (
          <SeptaMarker lat={bus.lat} lng={bus.lng} text={this.directionHelper(bus.Direction)} key={bus.VehicleID} bus={bus}/>
        )
      })
    }

    return (
      <div style={{width: '100%', height: '900px'}}>
        <GoogleMap
          bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_MAPS_KEY}}
          center={this.props.center}
          zoom={this.props.zoom}>
          {busMarkers}
        </GoogleMap>
      </div>
    );
  }
}

PhilaMap.propTypes = {
  center: PropTypes.array,
  zoom: PropTypes.number,
};

export default PhilaMap;