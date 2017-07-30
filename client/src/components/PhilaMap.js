
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import GoogleMap from 'google-map-react';
import SeptaMarker from './SeptaMarker.js';

class PhilaMap extends Component {

  static defaultProps = {
    center: [39.9516757, -75.1608584],
    zoom: 15
  };

  render() {
    return (
      <div style={{width: '100%', height: '400px'}}>
        <GoogleMap
          bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_MAPS_KEY}}
          center={this.props.center}
          zoom={this.props.zoom}>
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