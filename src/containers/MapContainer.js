import { connect } from 'react-redux';
import Map from '../components/Map/Map';

const mapStateToProps = ( {waypoints, selectedWaypoint} ) => {
  return { waypoints, selectedWaypoint } 
};

export default connect(mapStateToProps)(Map);