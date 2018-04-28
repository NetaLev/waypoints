import { SELECT_WAYPOINT } from '../constants';

/*TODO: fix bug: selected point is still saved even if the waypoint was removed*/
export default function(state = {latitude: 0, longitude: 0} /*selectedWaypoint*/, action) {
  if (action.type === SELECT_WAYPOINT) {
    return action.selectedWaypoint;
  }
  return state;
}
