import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import './Map.css';

const Map = (props) => {
  const selectedWaypoint= {latitude: 0, longitude: 0};
  const waypoints = [{ latitude: 1.98171123, longitude: -80.49862321 },
  { latitude: 55.98171123, longitude: 7.49862321 }];

  return (
    <GoogleMap
      defaultZoom={3}
      defaultCenter={{ lat: selectedWaypoint.latitude, lng: selectedWaypoint.longitude }}
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

