import React, { Component } from 'react';
import './Waypoints.css';
import Waypoint from '../Waypoint/Waypoint';

/*TODO: feature: add scroller*/
class Waypoints extends Component {
  
  render() {
    const { waypoints, removeWaypoint, selectWaypoint } = this.props;

    return (
      <div>
        {waypoints.map(
          (waypoint, index) =>
            /*INFO: waypoint pair value is unique, therefor will be a great key*/
            <Waypoint
              selectWaypoint= {selectWaypoint}
              removeWaypoint = {removeWaypoint}
              key={`${waypoint.latitude}-${waypoint.longitude}`}
              data={waypoint} />
        )}
      </div>
    );
  }

}

export default Waypoints;