import React from 'react';

/* eslint-disable import/no-unresolved, import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, array, number, object, boolean } from '@storybook/addon-knobs';

import { muiTheme } from 'storybook-addon-material-ui';
/* eslint-enable import/no-unresolved, import/no-extraneous-dependencies */

import Combatant from '../src/Combatant';

const combatantStories = storiesOf('Combatant', module)
  .addDecorator(muiTheme())
  .addDecorator(withKnobs);

combatantStories.add('no props', () => <Combatant />);

combatantStories.add('default (name, hp, ac)', () => (
  <Combatant
    name={text('name', 'Aragorn')}
    hp={{
      current: number('current', 20),
      max: number('max', 20),
    }}
    ac={number('ac', 10)}
  />
));

combatantStories.add('with image', () => (
  <Combatant
    name={text('name', 'Aragorn')}
    image={text('image', 'https://avatarfiles.alphacoders.com/922/92296.jpg')}
    hp={{
      current: number('current', 15),
      max: number('max', 20),
    }}
    ac={number('ac', 10)}
  />
));

combatantStories.add('with notes (string array)', () => (
  <Combatant
    name={text('name', 'Aragorn')}
    image={text('image', 'https://avatarfiles.alphacoders.com/922/92296.jpg')}
    hp={{
      current: number('current', 10),
      max: number('max', 20),
    }}
    ac={number('ac', 10)}
    notes={array('notes', ['DC18 Hidden', 'Prone'])}
  />
));

combatantStories.add('note with trigger (end)', () => (
  <Combatant
    name={text('name', 'Aragorn')}
    image={text('image', 'https://avatarfiles.alphacoders.com/922/92296.jpg')}
    hp={{
      current: number('current', 5),
      max: number('max', 20),
    }}
    ac={number('ac', 10)}
    notes={[
      object('note', {
        text: 'Blinded',
        until: {
          turn: 3,
        },
      }),
    ]}
  />
));


combatantStories.add('note with trigger (start)', () => (
  <Combatant
    name={text('name', 'Aragorn')}
    image={text('image', 'https://avatarfiles.alphacoders.com/922/92296.jpg')}
    hp={{
      current: number('current', 1),
      max: number('max', 20),
    }}
    ac={number('ac', 10)}
    notes={[
      object('note', {
        text: 'Stunned',
        until: {
          turn: 3,
          startOfTurn: true,
        },
      }),
    ]}
  />
));

/*

combatantStories.add('notes can be strings', () => (
  <Combatant
    name={text('Name', 'Aragorn')}
    hp={{
      current: number('Current HP', 50),
      max: number('Maximum HP', 100),
      temporary: number('Temporary HP', 15),
    }}
    ac={number('Armor Class', 15)}
    notes={array('Notes', ['One', 'Two'])}
  />
));

combatantStories.add('notes can have until.turn', () => (
  <Combatant
    name={text('Name', 'Aragorn')}
    hp={{
      current: number('Current HP', 50),
      max: number('Maximum HP', 100),
      temporary: number('Temporary HP', 15),
    }}
    ac={number('Armor Class', 15)}
    notes={[
      object('Note', {
        text: 'Prone',
        until: {
          turn: 1,
        },
      }),
    ]}
  />
));

combatantStories.add('note.until start or end of turn', () => (
  <Combatant
    name={text('Name', 'Aragorn')}
    hp={{
      current: number('Current HP', 50),
      max: number('Maximum HP', 100),
      temporary: number('Temporary HP', 15),
    }}
    ac={number('Armor Class', 15)}
    notes={[
      object('Note', {
        text: 'Prone',
        until: {
          turn: 1,
          startOfTurn: true,
        },
      }),
    ]}
  />
));
*/