import React, { Component } from 'react';
import { messageToUser } from '../../constants';
import { toNumber } from 'underscore.string';
import './AddWaypointForm.css';

class AddWaypointForm extends Component {

    handleSubmit = (e) => {
        const rawInput = this.input.value;
        e.preventDefault();
        if (!rawInput.trim()) {
            return;
        }
        try {
            const newWaypoint = this.parseInput(rawInput);
            this.props.addWaypoint(newWaypoint);
            this.input.value = '';
        }
        catch(err) {
            this.props.updateMessageToUser(err.message);
        }
    }

    parseInput = (input) => {
        let inputParts = input.split(',');
        if (inputParts.length === 1 || inputParts.length > 2) {
            throw Error(messageToUser.INVALID_WAYPOINT_INPUT);
        }
        inputParts = inputParts.map(part => toNumber(part, 8));
        if (isNaN(inputParts[0]) || isNaN(inputParts[1])) {
            throw Error(messageToUser.INVALID_WAYPOINT_INPUT);
        }
        const validLatitude = Math.abs(inputParts[0]) <= 85;
        const validLongitude = Math.abs(inputParts[1]) <= 180;
        if (!validLatitude || !validLongitude) {
            throw Error(messageToUser.INVALID_WAYPOINT_INPUT);
        }
        return {latitude: inputParts[0], longitude: inputParts[1]};
    }

    render() {
        const { messageToUser } = this.props;
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    ref={(input) => this.input = input}
                    type="text"
                    name="waypoint"
                    placeholder="put latitude, longitude points" />
                <input type="submit" value="Save" />
                {messageToUser!== '' && <div className="message-to-user">{messageToUser}</div>}
            </form>
        );
    };
}
export default AddWaypointForm;