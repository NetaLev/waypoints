import localforage from 'localforage';
import { any, isEqual, isEmpty } from 'underscore';
import { messageToUser } from './constants';

/*TODO (optional): add localforage errors handling*/

window.localforage = localforage;

const getAllWaypoints = async () => {
    const waypoints = await localforage.getItem('waypoints');
    if (!waypoints || isEmpty(waypoints)) {
        const defaultWaypoints = [];
        localforage.setItem('waypoints', defaultWaypoints);
        return defaultWaypoints;
    }
    return waypoints;
};


const getSelectedWaypoint = async () => {
    let selectedWaypoint = await localforage.getItem('selectedWaypoint');
    if (!selectedWaypoint || isEmpty(selectedWaypoint)) {
        const defaultSelectedWaypoint = { latitude: 0, longitude: 0 };
        localforage.setItem('selectedWaypoint', defaultSelectedWaypoint);
        return defaultSelectedWaypoint;
    }
    return selectedWaypoint;
};

export default {
    async addWaypoint(newWaypoint) {
        const waypoints = await getAllWaypoints();
        /*TODO: refactor: move any gist to seperate deepContains function in a custom utils library*/
        if (any(waypoints, function(waypoint){ return isEqual(waypoint, newWaypoint); })) {
            throw Error(messageToUser.WAYPOINT_ALREADY_LISTED);
        }
        localforage.setItem('waypoints', [...waypoints, newWaypoint]);
        return newWaypoint;
    },

    async getAllWaypoints() {
        return await getAllWaypoints();
    },

    async getSelectedWaypoint() {
        return await getSelectedWaypoint();
    },

    async removeWaypoint(waypointToDelete) {
        const waypoints = await getAllWaypoints();
        localforage.setItem('waypoints', waypoints.filter(waypoint => !isEqual(waypointToDelete, waypoint)));
        return waypointToDelete;
    },

    async selectWaypoint(waypoint) {
        localforage.setItem('selectedWaypoint', waypoint);
        return waypoint;
    }

};
