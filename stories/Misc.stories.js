import React from 'react';

/* eslint-disable import/no-unresolved, import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { muiTheme } from 'storybook-addon-material-ui';
/* eslint-enable import/no-unresolved, import/no-extraneous-dependencies */

import ArpggioCombatComponent from '../src/ArpggioCombatComponent';

// import Card from '../src/dnd/Card';
import Container from '../src/dnd/Container';
import Reorderable from '../src/reorderable/index';

const { ReorderableList, ReorderableListItem } = Reorderable;

console.log('Reorderable', ReorderableList);

storiesOf('ArpggioCombatComponent', module)
  .addDecorator(muiTheme())
  .add('No-Props', () => <ArpggioCombatComponent action={action} />)
  ;

storiesOf('React Drag and Drop', module)
  .addDecorator(muiTheme())
  // .add('Card', () => <Card />)
  .add('Container', () => <Container />)
  ;

storiesOf('Reorderable List', module)
  .addDecorator(muiTheme())
  .add('Reorderable', () => (
    <ReorderableList>
      <ReorderableListItem primaryText="1" />
      <ReorderableListItem primaryText="2" />
      <ReorderableListItem primaryText="3" />
      <ReorderableListItem primaryText="4" />
    </ReorderableList>
  ))
  ;
