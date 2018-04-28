import { combineReducers } from 'redux';

import messageToUser from './message-reducer';
import waypoints from './waypoints-reducer';
import selectedWaypoint from './select-waypoint-reducer';

export default combineReducers({
  /*consistent with store data*/
  messageToUser,
  waypoints,
  selectedWaypoint
});
