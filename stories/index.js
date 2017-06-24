import React from 'react';
import FlatButton from 'material-ui/FlatButton';

/* eslint-disable import/no-unresolved, import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Button, Welcome } from '@storybook/react/demo';
import { muiTheme } from 'storybook-addon-material-ui';
import ArpggioCombatComponent from '../src/ArpggioCombatComponent';
/* eslint-enable import/no-unresolved, import/no-extraneous-dependencies */


storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Material-ui', module)
  .addDecorator(muiTheme())
  .add('FlatButton', () => <FlatButton label="Default" onTouchTap={action('tapped')} />)
  .add('ArpggioCombatComponent', () => <ArpggioCombatComponent />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

