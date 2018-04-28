import { UPDATE_ALL_WAYPOINTS, ADD_WAYPOINT, REMOVE_WAYPOINT } from '../constants';
import { isEqual } from 'underscore';

export default function(state = [] /*waypoints*/, action) {
  if (action.type === UPDATE_ALL_WAYPOINTS) {
    return action.waypoints;
  }

  if (action.type === ADD_WAYPOINT) {
    return [ ...state, action.newWaypoint ];
  }

  if (action.type === REMOVE_WAYPOINT) {
    return state.filter(waypoint => !isEqual(action.waypointToRemove, waypoint));
  }

  return state;
}
