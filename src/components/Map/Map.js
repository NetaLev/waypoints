import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import './Map.css';

const Map = (props) => {
  const { waypoints, selectedWaypoint } = props;

  return (
    <GoogleMap
      defaultZoom={3}
      defaultCenter={{ lat: 0, lng: 0 }}
      center={{ lat: selectedWaypoint.latitude, lng: selectedWaypoint.longitude }}
    >
      {waypoints.map(
        (waypoint, index) =>
          <Marker
            key={`${waypoint.latitude}-${waypoint.longitude}`}
            position={{ lat: waypoint.latitude, lng: waypoint.longitude }}
          />
      )}
    </GoogleMap>
  );
};

export default withScriptjs(withGoogleMap(Map));

