
/*** ACTIONS ***/ 
export const ADD_WAYPOINT = 'ADD_WAYPOINT';
export const REMOVE_WAYPOINT = 'REMOVE_WAYPOINT';
export const SELECT_WAYPOINT = 'SELECT_WAYPOINT';
export const UPDATE_MESSAGE_TO_USER = 'UPDATE_MESSAGE_TO_USE';
export const UPDATE_ALL_WAYPOINTS = 'UPDATE_ALL_WAYPOINTS';

export const messageToUser = {
    WAYPOINT_ALREADY_LISTED: `The waypoint you have entered is already listed.`,
    INVALID_WAYPOINT_INPUT: `Invalid waypoint input. Please enter a waypoints in the following format:
    X, Y ( -90 <= X <= 90 and -180 <= Y <= 180 )`,
};