import React from 'react';

/* eslint-disable import/no-unresolved, import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { action, decorateAction } from '@storybook/addon-actions';
import {
  withKnobs,
  text,
  array,
  number,
  object,
  boolean,
} from '@storybook/addon-knobs';

import { muiTheme } from 'storybook-addon-material-ui';
/* eslint-enable import/no-unresolved, import/no-extraneous-dependencies */

import EyeIcon from 'material-ui/svg-icons/image/remove-red-eye';
import { ListItem } from 'material-ui/List';
import Toggle from 'material-ui/Toggle';

import Combatant from '../src/Combatant';

// Remove the synthetic event and return the value
const synthAction = decorateAction([args => args.slice(1)]);

const combatantStories = storiesOf('Combatant', module)
  .addDecorator(muiTheme())
  .addDecorator(withKnobs);

combatantStories.add('no props', () => <Combatant />);

combatantStories.add('default (name, hp, ac)', () =>
  <Combatant
    name={text('name', 'Aragorn')}
    hp={{
      current: number('current', 20),
      max: number('max', 20),
    }}
    ac={number('ac', 10)}
    editable={boolean('editable', false)}
  />
);

combatantStories.add('with image', () =>
  <Combatant
    name={text('name', 'Aragorn')}
    image={text('image', 'https://avatarfiles.alphacoders.com/922/92296.jpg')}
    hp={{
      current: number('current', 15),
      max: number('max', 20),
    }}
    ac={number('ac', 10)}
    editable={boolean('editable', false)}
  />
);

combatantStories.add('active', () =>
  <Combatant
    name={text('name', 'Aragorn')}
    image={text('image', 'https://avatarfiles.alphacoders.com/922/92296.jpg')}
    hp={{
      current: number('current', 15),
      max: number('max', 20),
    }}
    ac={number('ac', 10)}
    editable={boolean('editable', false)}
    active={boolean('active', true)}
  />
);

combatantStories.add('with notes (string array)', () =>
  <Combatant
    name={text('name', 'Aragorn')}
    image={text('image', 'https://avatarfiles.alphacoders.com/922/92296.jpg')}
    hp={{
      current: number('current', 10),
      max: number('max', 20),
    }}
    ac={number('ac', 10)}
    editable={boolean('editable', false)}
    notes={array('notes', ['DC18 Hidden', 'Prone'])}
  />
);

combatantStories.add('note with trigger (end)', () =>
  <Combatant
    name={text('name', 'Aragorn')}
    image={text('image', 'https://avatarfiles.alphacoders.com/922/92296.jpg')}
    hp={{
      current: number('current', 5),
      max: number('max', 20),
    }}
    ac={number('ac', 10)}
    editable={boolean('editable', false)}
    notes={[
      object('note', {
        text: 'Blinded',
        until: {
          turn: 3,
        },
      }),
    ]}
  />
);

combatantStories.add('note with trigger (start)', () =>
  <Combatant
    name={text('name', 'Aragorn')}
    image={text('image', 'https://avatarfiles.alphacoders.com/922/92296.jpg')}
    hp={{
      current: number('current', 1),
      max: number('max', 20),
    }}
    ac={number('ac', 10)}
    editable={boolean('editable', false)}
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
);

combatantStories.add('supports override of styling', () =>
  <Combatant
    name={text('name', 'Aragorn')}
    hp={{
      current: number('current', 15),
      max: number('max', 20),
    }}
    ac={number('ac', 10)}
    editable={boolean('editable', false)}
    notes={array('notes', ['DC18 Hidden', 'Prone'])}
    styles={object('styles', {
      avatar: {
        display: 'none',
      },
      chipWrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-end',
      },
    })}
  />
);

combatantStories.add('editable uses slider for hp', () =>
  <Combatant
    name={text('name', 'Aragorn')}
    hp={{
      current: number('current', 20),
      max: number('max', 20),
    }}
    ac={number('ac', 10)}
    editable={boolean('editable', true)}
    actions={{
      // Remove the synthetic event and return the value
      onChangeHealth: synthAction('onChangeHealth'),
    }}
  />
);

combatantStories.add('editable uses chipInput for notes', () =>
  <Combatant
    name={text('name', 'Aragorn')}
    hp={{
      current: number('current', 20),
      max: number('max', 20),
    }}
    ac={number('ac', 10)}
    editable={boolean('editable', true)}
    notes={array('notes', ['A', 'B', 'C'])}
    actions={{
      onChangeHealth: synthAction('onChangeHealth'),
      onRequestAddChip: action('onRequestAddChip'),
      onRequestDeleteChip: action('onRequestDeleteChip'),
    }}
  />
);

combatantStories.add('editable & nested items', () =>
  <Combatant
    name={text('name', 'Aragorn')}
    hp={{
      current: number('current', 20),
      max: number('max', 20),
    }}
    ac={number('ac', 10)}
    editable={boolean('editable', true)}
    active={boolean('active', true)}
    notes={array('notes', [])}
    actions={{
      onChangeHealth: synthAction('onChangeHealth'),
      onRequestAddChip: action('onRequestAddChip'),
      onRequestDeleteChip: action('onRequestDeleteChip'),
    }}
    nestedItems={[
      <ListItem
        secondaryText="Visible to Players"
        rightToggle={<Toggle />}
        onTouchTap={action('onToggleVisibility')}
      />,
    ]}
  />
);
