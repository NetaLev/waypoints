import localforage from 'localforage';
import { contains, isEqual } from 'underscore';
import { messageToUser } from './constants';

/*todo: maybe add localforage errors handling*/

window.localforage = localforage;

const getAllWaypoints = async () => {
    const waypoints = await localforage.getItem('waypoints');
    if (!waypoints) await localforage.setItem('waypoints', []);
    return waypoints || [];
};

const getSelectedWaypoint = async () => {
    const selectedWaypoint = await localforage.getItem('selectedWaypoint');
    if (!selectedWaypoint) await localforage.setItem('selectedWaypoint', {});
    return selectedWaypoint || { latitude: 0, longitude: 0 }; /*return is not necessary*/
};

export default {
    async addWaypoint(newWaypoint) {
        const waypoints = await getAllWaypoints();
        if (contains(waypoints, newWaypoint)) {
            throw Error(messageToUser.WAYPOINT_ALREADY_LISTED);
        }
        /*await*/localforage.setItem('waypoints', [...waypoints, newWaypoint]);
        return newWaypoint; /*return is not necessary*/
    },

    async getAllWaypoints() {
        return await getAllWaypoints();
    },

    async getSelectedWaypoint() {
        return await getSelectedWaypoint();
    },

    async removeWaypoint(waypointToDelete) {
        const waypoints = await getAllWaypoints();
        /*check if works*/
        /*await*/localforage.setItem('waypoints', waypoints.filter(waypoint => !isEqual(waypointToDelete, waypoint)));
        return waypointToDelete; /*return is not necessary*/
    },

    async selectWaypoint(waypoint) {
        /*await*/localforage.setItem('selectedWaypoint', waypoint);
        return waypoint; /*return is not necessary*/
    }

};
