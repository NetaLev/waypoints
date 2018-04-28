import React, { Component } from 'react';
import MapContainer from './containers/MapContainer';
import AddWaypointFormContainer from './containers/AddWaypointFormContainer';
import WaypointsContainer from './containers/WaypointsContainer';
import './App.css';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="sidebar">
          <AddWaypointFormContainer />
          <WaypointsContainer />
        </div>
        <MapContainer
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div className='loadingElementStyle' />}
          containerElement={<div className='containerElementStyle' />}
          mapElement={<div className='mapElementStyle' />}
        />
      </React.Fragment>
    );
  }
}

export default App;
