import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AddWaypointForm from '../components/AddWaypointForm/AddWaypointForm';

import { updateMessageToUser, addWaypoint } from '../actions/actions';

const mapStateToProps = ( { messageToUser } ) => {
  return { messageToUser } 
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateMessageToUser,
    addWaypoint
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(AddWaypointForm);