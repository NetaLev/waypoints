import React, { Component } from 'react';
import './Waypoint.css'

class Waypoint extends Component {
  handleWaypointXCloseClick = (waypointToRemove) => (e) => {
    this.props.removeWaypoint(waypointToRemove);
  }

  handleWaypointClick = (selectedWaypoint) => (e) => {
    this.props.selectWaypoint(selectedWaypoint);
  }

  render() {
    const { data } = this.props;
    return (
      <div className="waypoint" onClick={this.handleWaypointClick(data)}>
        <span
          onClick={this.handleWaypointXCloseClick(data)}
          className="x-close"
          role="img"
          aria-label="close">
          &#x274C;
        </span>
        <div className="waypoint-data">{`${data.latitude}, ${data.longitude}`}</div>
      </div>
    );
  }
};

export default Waypoint;