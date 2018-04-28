import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Waypoints from '../components/Waypoints/Waypoints';
import { removeWaypoint, selectWaypoint } from '../actions/actions';

const mapStateToProps = ( { waypoints } ) => {
  return { waypoints } 
};

/*TODO: refactor: consider splitting to another container for each waypoint*/ 
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    removeWaypoint,
    selectWaypoint
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Waypoints);