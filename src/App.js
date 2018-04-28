import React, { Component } from 'react';
import Map from './components/Map/Map';
import AddWaypointForm from './components/AddWaypointForm/AddWaypointForm';
import Waypoints from './components/Waypoints/Waypoints';
import './App.css';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="sidebar">
          <AddWaypointForm />
          <Waypoints />
        </div>
        <Map
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
