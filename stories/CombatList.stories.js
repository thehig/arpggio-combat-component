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
import { ListItem } from 'material-ui/List';
import Toggle from 'material-ui/Toggle';

import CombatList from '../src/CombatList';
import Combatant from '../src/Combatant';

// Remove the synthetic event and return the value
const synthAction = decorateAction([args => args.slice(1)]);

const ourHeroes = [
  {
    name: 'Aragorn',
    ac: 16,
    hp: { max: 30, current: 10 },
    image: 'https://avatarfiles.alphacoders.com/922/92296.jpg',
  },
  {
    name: 'Legolas',
    ac: 19,
    hp: { max: 55, current: 54 },
    image: 'http://orig14.deviantart.net/e1c5/f/2011/087/7/f/legolas_avatar_by_angelprincess101-d3conn4.png',
  },
  {
    name: 'Gimli',
    ac: 11,
    hp: { max: 75, current: 14 },
    image: 'https://68.media.tumblr.com/avatar_b4d8059d2a39_128.png',
  },
];

const combatantStories = storiesOf('CombatList', module)
  .addDecorator(muiTheme())
  .addDecorator(withKnobs);

combatantStories.add('our heroes', () => (
  <CombatList>
    {ourHeroes.map(hero => <Combatant {...hero} />)}
  </CombatList>
));

combatantStories.add('current turn', () => (
  <CombatList>
    <Combatant
      editable={boolean('aragorn editable', false)}
      active={boolean('aragorn active', true)}
      name="Aragorn"
      ac={16}
      hp={{ max: 30, current: 10 }}
      image="https://avatarfiles.alphacoders.com/922/92296.jpg"
    />
    <Combatant
      editable={boolean('legolas editable', false)}
      active={boolean('legolas active', false)}
      name="Legolas"
      ac={19}
      hp={{ max: 55, current: 54 }}
      image="http://orig14.deviantart.net/e1c5/f/2011/087/7/f/legolas_avatar_by_angelprincess101-d3conn4.png"
      nestedItems={[
        <ListItem
          secondaryText="Visible to Players"
          rightToggle={<Toggle onToggle={action('onToggleVisibility')} />}
        />,
      ]}
    />
    <Combatant
      editable={boolean('gimli editable', false)}
      active={boolean('gimli active', false)}
      name="Gimli"
      ac={11}
      hp={{ max: 75, current: 14 }}
      image="https://68.media.tumblr.com/avatar_b4d8059d2a39_128.png"
    />
  </CombatList>
));
