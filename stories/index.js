import React from 'react';

/* eslint-disable import/no-unresolved, import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { muiTheme } from 'storybook-addon-material-ui';
/* eslint-enable import/no-unresolved, import/no-extraneous-dependencies */

import ArpggioCombatComponent from '../src/ArpggioCombatComponent';

storiesOf('ArpggioCombatComponent', module)
  .addDecorator(muiTheme())
  .add('No-Props', () => <ArpggioCombatComponent action={action} />)
  ;
