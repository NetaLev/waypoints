import { SELECT_WAYPOINT } from '../constants';

export default function(state = {latitude: 0, longitude: 0} /*selectedWaypoint*/, action) {
  if (action.type === SELECT_WAYPOINT) {
    return action.selectedWaypoint;
  }

  return state;
}
