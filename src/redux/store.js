import React from 'react';
import { createStore } from 'redux';
import { Provider as ReduxProvider } from 'react-redux';
import Immutable from 'immutable';
import { reducer as setHealth, getHealth } from './setHealth';

// Initial State
export const initialState = Immutable.fromJS({
  combatants: [],
  inProgress: false,
});

// Selectors
export const selectors = {
  getHealth,
};

// Reducers
export const reducers = [
  setHealth,
];

// Merge reducers together
export function rootReducer(state, action) {
  let newState;
  switch (action.type) {
    // Handle cross-topic actions here
    default:
      newState = state;
      break;
  }
  return reducers.reduce((s, r) => r(s, action), newState);
}

// Configure store with redux dev tools
/* eslint-disable no-underscore-dangle */
export function configureStore() {
  const store = createStore(rootReducer, initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  return store;
}
/* eslint-enable */

export default function Provider({ story }) {
  return (
    <ReduxProvider store={configureStore()}>
      {story}
    </ReduxProvider>
  );
}
