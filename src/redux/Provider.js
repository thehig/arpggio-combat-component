// https://medium.com/ingenious/storybook-meets-redux-6ab09a5be346
import React from 'react';

import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './store';

const store = configureStore();

export default function Provider({ story }) {
  return (
    <ReduxProvider store={store}>
      {story}
    </ReduxProvider>
  );
}
