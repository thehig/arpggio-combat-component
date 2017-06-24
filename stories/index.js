import React from 'react';
import FlatButton from 'material-ui/FlatButton';

/* eslint-disable import/no-unresolved, import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { muiTheme } from 'storybook-addon-material-ui';
import ArpggioCombatComponent from '../src/ArpggioCombatComponent';
/* eslint-enable import/no-unresolved, import/no-extraneous-dependencies */

// storiesOf('Material-ui', module)
//   .addDecorator(muiTheme())
//   .add('FlatButton', () => <FlatButton label="Default" onTouchTap={action('tapped')} />)
//   ;

storiesOf('ArpggioCombatComponent', module)
  .addDecorator(muiTheme())
  .add('No-Props', () => <ArpggioCombatComponent />)
  ;
