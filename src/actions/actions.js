import { UPDATE_ALL_WAYPOINTS, ADD_WAYPOINT, REMOVE_WAYPOINT, SELECT_WAYPOINT, UPDATE_MESSAGE_TO_USER } from '../constants';
import api from '../api';

export const updateAllWaypoints = () => {
    return dispatch => {
        api.getAllWaypoints().then(waypoints => {
            dispatch({
                type: UPDATE_ALL_WAYPOINTS,
                waypoints
            });
        });
    };
};

export const addWaypoint = waypoint => {
    return dispatch => {
        api.addWaypoint(waypoint).then(() => {
            dispatch({
                type: ADD_WAYPOINT,
                newWaypoint: waypoint
            });
        }).catch((err) => {
            dispatch({
                type: UPDATE_MESSAGE_TO_USER,
                messageToUser: err.message
            });
        });
    };
};

export const removeWaypoint = waypoint => {
    return dispatch => {
        api.removeWaypoint(waypoint).then(() => {
            dispatch({
                type: REMOVE_WAYPOINT,
                waypointToRemove: waypoint
            });
        });
    };
};

export const getSelectedWaypoint = () => {
    return dispatch => {
        api.getSelectedWaypoint().then( waypoint => {
            dispatch({
                type: SELECT_WAYPOINT,
                selectedWaypoint: waypoint
            });
        });
    };
};

export const selectWaypoint = waypoint => {
    return dispatch => {
        api.selectWaypoint(waypoint).then(() => {
            dispatch({
                type: SELECT_WAYPOINT,
                selectedWaypoint: waypoint
            });
        });
    };
};

export const updateMessageToUser = (messageToUser) => ({
    type: UPDATE_MESSAGE_TO_USER,
    messageToUser
});