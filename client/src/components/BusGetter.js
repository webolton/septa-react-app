import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BusGetter extends Component {

  static defaultProps = {
    directions: [
      "North",
      "South",
      "East",
      "West"
    ]
  }

  handleSubmit(e){
    if(this.refs.route.value === ""){
      alert("A route is required!")
    } else {
      console.log("submitted!!")
    }
      e.preventDefault();
  };

  render() {

    let cardinalDirections = this.props.directions.map(direction => {
      return <option key={direction} value={direction}>{direction}</option>
    })

    return (
      <div>
        <h3>Find a bus!</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>What route are you taking?</label>
            <input type="text" ref="route" />
          </div>
          <div>
            <label>What direction are you traveling?</label><br />
            <select ref="direction">
              {cardinalDirections}
            </select>
          </div>
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

BusGetter.propTypes ={
  directions: PropTypes.array,
}

export default BusGetter;
