import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import reducers from '../reducers';
import storeInit from './store';

import { updateAllWaypoints, getSelectedWaypoint } from '../actions/actions';

const middleware = [thunk];
const enhancers = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  storeInit,
  composeEnhancers(applyMiddleware(...middleware), ...enhancers),
);

store.dispatch(updateAllWaypoints());
store.dispatch(getSelectedWaypoint());

export default store;