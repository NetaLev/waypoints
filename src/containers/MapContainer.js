import { connect } from 'react-redux';
import Map from '../components/Map/Map';

const mapStateToProps = ( {waypoints, selectedWaypoint}, {googleMapURL, loadingElement, containerElement, mapElement} ) => {
  return { waypoints, selectedWaypoint, googleMapURL, loadingElement, containerElement, mapElement };
};

export default connect(mapStateToProps)(Map);