import React from 'react';
import { List } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

import Combatant from './Combatant';

const ActionBar = () => <div>Action Bar</div>;

const CombatList = ({ children }) =>
  <List>
    <Subheader>Combat List</Subheader>
    <Divider />
    {children && children}
    <Divider />
  </List>;

const CombatComponent = () =>
  <div>
    Combat Component
    <ActionBar />
    <CombatList>
      <Combatant
        name="Aragorn"
        ac={16}
        hp={{ max: 30, current: 10 }}
        image="https://avatarfiles.alphacoders.com/922/92296.jpg"
      />
      <Combatant
        name="Legolas"
        ac={19}
        hp={{ max: 55, current: 54 }}
        image="http://orig14.deviantart.net/e1c5/f/2011/087/7/f/legolas_avatar_by_angelprincess101-d3conn4.png"
      />
      <Combatant
        name="Gimli"
        ac={11}
        hp={{ max: 75, current: 14 }}
        image="https://68.media.tumblr.com/avatar_b4d8059d2a39_128.png"
      />
    </CombatList>
  </div>;

export default CombatComponent;
