import { UPDATE_MESSAGE_TO_USER } from '../constants';

export default function(state = '' /*messageToUser*/, action) {
  if (action.type === UPDATE_MESSAGE_TO_USER) {
    return action.messageToUser;
  }
  return state;
}
