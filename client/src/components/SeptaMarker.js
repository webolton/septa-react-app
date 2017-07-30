import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {SeptaMarkerStyles} from './SeptaMarkerStyles.js';
import {SeptaMarkerTextStyles} from './SeptaMarkerTextStyles.js'

class SeptaMarker extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  static defaultProps = {};

  render() {
    return (
     <div style={SeptaMarkerStyles}>
        <div style={SeptaMarkerTextStyles}>
          {this.props.text}
        </div>
     </div>
    );
  }
}

export default SeptaMarker;
