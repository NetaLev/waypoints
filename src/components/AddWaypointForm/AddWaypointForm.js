import React from 'react';
import './AddWaypointForm.css';

const AddWaypointForm = (props) => {
    return (
        <form>
            <input type="text" name="waypoint" placeholder="put latitude, longitude points" />
            <input type="submit" value="Save" />
        </form>
    );
};
export default AddWaypointForm;