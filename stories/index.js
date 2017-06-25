import React from 'react';

/* eslint-disable import/no-unresolved, import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import { muiTheme } from 'storybook-addon-material-ui';
/* eslint-enable import/no-unresolved, import/no-extraneous-dependencies */

import ArpggioCombatComponent from '../src/ArpggioCombatComponent';
import Combatant from '../src/Combatant';

import Card from '../src/dnd/Card';
import Container from '../src/dnd/Container';

storiesOf('ArpggioCombatComponent', module)
  .addDecorator(muiTheme())
  .add('No-Props', () => <ArpggioCombatComponent action={action} />)
  ;

storiesOf('React Drag and Drop', module)
  .addDecorator(muiTheme())
  .add('Card', () => <Card />)
  .add('Container', () => <Container />)
  ;

storiesOf('Combatant', module)
  .addDecorator(muiTheme())
  .addDecorator(withKnobs)
  .add('No-Props', () => <Combatant />)
  .add('Props', () => (
    <Combatant
      name={text('Name', 'Aragorn')}
      hp={{
        current: number('Current HP', 50),
        max: number('Maximum HP', 100),
        temporary: number('Temporary HP', 15),
      }}
      ac={number('Armor Class', 15)}
    />
  ))
  ;
