import React from 'react';

/* eslint-disable import/no-unresolved, import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
// import { withKnobs, text, array, number, object, boolean } from '@storybook/addon-knobs';

import { muiTheme } from 'storybook-addon-material-ui';
/* eslint-enable import/no-unresolved, import/no-extraneous-dependencies */

import ArpggioCombatComponent from '../src/ArpggioCombatComponent';
import Provider from '../src/redux/store';


storiesOf('ArpggioCombatComponent', module)
  .addDecorator(muiTheme())
  .addDecorator(story => <Provider story={story()} />)
  .add('No Props', () => <ArpggioCombatComponent />)
  ;