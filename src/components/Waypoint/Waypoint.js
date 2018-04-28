import React from 'react';
import './Waypoint.css'

const Waypoint = ({data}) => {
  return (
    <div className="waypoint">
      {/* TODO: add functionality with redux */}
      <span className="x-close" role="img" aria-label="close">&#x274C;</span>
      <div className="waypoint-data">{`${data.latitude}, ${data.longitude}`}</div>
    </div>
  );
};

export default Waypoint;