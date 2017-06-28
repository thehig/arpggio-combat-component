import { createStore } from 'redux';
import rootReducer from './reducer';
import initialState from './initialState';

/* eslint-disable no-underscore-dangle */
export default function configureStore() {
  const store = createStore(rootReducer, initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  return store;
}
/* eslint-enable */

