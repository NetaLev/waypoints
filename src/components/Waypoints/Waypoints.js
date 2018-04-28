import React from 'react';
import './Waypoints.css';
import Waypoint from '../Waypoint/Waypoint';

// TODO: use https://www.random.org/geographic-coordinates/

const Waypoints = (props) => {

  const waypoints = [{latitude: 1.98171123, longitude: -80.49862321},
    {latitude: 55.98171123, longitude: 7.49862321}];

  return (
    <div>
      {waypoints.map(
        (waypoint, index) =>
        /*INFO: waypoint pair value is unique, therefor will be a great key*/
        <Waypoint 
        key={`${waypoint.latitude}-${waypoint.longitude}`}
        data={waypoint}/>
      )}
    </div>
  );
};

export default Waypoints;