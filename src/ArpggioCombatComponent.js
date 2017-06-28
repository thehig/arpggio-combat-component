import React from 'react';

// Action Bar
import AppBar from 'material-ui/AppBar';

// Bottom Navigation
import Paper from 'material-ui/Paper';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import TimelapseIcon from 'material-ui/svg-icons/image/timelapse';
import AccessTimeIcon from 'material-ui/svg-icons/device/access-time';

// Combat List
import { List } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Combatant from './Combatant';

const styles = {
  bottom: {
    paper: {
      // TODO: Make sure nothing on the screen is hidden by this
      position: 'fixed',
      left: '0px',
      bottom: '0px',
      zIndex: 10,
      width: '100%',
    },
    nav: {},
    navItem: {},
  },
};

const ActionBar = () => (
  <AppBar title="Round 1" />
);

const BottomBar = () => (
  <Paper style={styles.bottom.paper}>
    <BottomNavigation style={styles.bottom.nav}>
      <BottomNavigationItem style={styles.bottom.navItem} disabled label="Game Timer 10:15:00"icon={<AccessTimeIcon />} />
      <BottomNavigationItem style={styles.bottom.navItem} disabled label="Round Timer: 10:00"icon={<TimelapseIcon />} />
    </BottomNavigation>
  </Paper>
);

const CombatList = ({ children }) => (
  <List>
    <Subheader>Combat List</Subheader>
    <Divider />
    { children && children }
    <Divider />
  </List>
);

const CombatComponent = () => (
  <div>
    <ActionBar />
    <CombatList>
      <Combatant name="Aragorn" ac={16} hp={{ max: 30, current: 10 }} image="https://avatarfiles.alphacoders.com/922/92296.jpg" />
      <Combatant name="Legolas" ac={19} hp={{ max: 55, current: 54 }} image="http://orig14.deviantart.net/e1c5/f/2011/087/7/f/legolas_avatar_by_angelprincess101-d3conn4.png" />
      <Combatant name="Gimli" ac={11} hp={{ max: 75, current: 14 }} image="https://68.media.tumblr.com/avatar_b4d8059d2a39_128.png" />
      <Combatant name="Aragorn" ac={16} hp={{ max: 30, current: 10 }} image="https://avatarfiles.alphacoders.com/922/92296.jpg" />
      <Combatant name="Legolas" ac={19} hp={{ max: 55, current: 54 }} image="http://orig14.deviantart.net/e1c5/f/2011/087/7/f/legolas_avatar_by_angelprincess101-d3conn4.png" />
      <Combatant name="Gimli" ac={11} hp={{ max: 75, current: 14 }} image="https://68.media.tumblr.com/avatar_b4d8059d2a39_128.png" />
      <Combatant name="Aragorn" ac={16} hp={{ max: 30, current: 10 }} image="https://avatarfiles.alphacoders.com/922/92296.jpg" />
      <Combatant name="Legolas" ac={19} hp={{ max: 55, current: 54 }} image="http://orig14.deviantart.net/e1c5/f/2011/087/7/f/legolas_avatar_by_angelprincess101-d3conn4.png" />
      <Combatant name="Gimli" ac={11} hp={{ max: 75, current: 14 }} image="https://68.media.tumblr.com/avatar_b4d8059d2a39_128.png" />
      <Combatant name="Aragorn" ac={16} hp={{ max: 30, current: 10 }} image="https://avatarfiles.alphacoders.com/922/92296.jpg" />
      <Combatant name="Legolas" ac={19} hp={{ max: 55, current: 54 }} image="http://orig14.deviantart.net/e1c5/f/2011/087/7/f/legolas_avatar_by_angelprincess101-d3conn4.png" />
      <Combatant name="Gimli" ac={11} hp={{ max: 75, current: 14 }} image="https://68.media.tumblr.com/avatar_b4d8059d2a39_128.png" />
      <Combatant name="Aragorn" ac={16} hp={{ max: 30, current: 10 }} image="https://avatarfiles.alphacoders.com/922/92296.jpg" />
      <Combatant name="Legolas" ac={19} hp={{ max: 55, current: 54 }} image="http://orig14.deviantart.net/e1c5/f/2011/087/7/f/legolas_avatar_by_angelprincess101-d3conn4.png" />
      <Combatant name="Gimli" ac={11} hp={{ max: 75, current: 14 }} image="https://68.media.tumblr.com/avatar_b4d8059d2a39_128.png" />
      <Combatant name="Aragorn" ac={16} hp={{ max: 30, current: 10 }} image="https://avatarfiles.alphacoders.com/922/92296.jpg" />
      <Combatant name="Legolas" ac={19} hp={{ max: 55, current: 54 }} image="http://orig14.deviantart.net/e1c5/f/2011/087/7/f/legolas_avatar_by_angelprincess101-d3conn4.png" />
      <Combatant name="Gimli" ac={11} hp={{ max: 75, current: 14 }} image="https://68.media.tumblr.com/avatar_b4d8059d2a39_128.png" />
      <Combatant name="Aragorn" ac={16} hp={{ max: 30, current: 10 }} image="https://avatarfiles.alphacoders.com/922/92296.jpg" />
      <Combatant name="Legolas" ac={19} hp={{ max: 55, current: 54 }} image="http://orig14.deviantart.net/e1c5/f/2011/087/7/f/legolas_avatar_by_angelprincess101-d3conn4.png" />
      <Combatant name="Gimli" ac={11} hp={{ max: 75, current: 14 }} image="https://68.media.tumblr.com/avatar_b4d8059d2a39_128.png" />
      <Combatant name="Aragorn" ac={16} hp={{ max: 30, current: 10 }} image="https://avatarfiles.alphacoders.com/922/92296.jpg" />
      <Combatant name="Legolas" ac={19} hp={{ max: 55, current: 54 }} image="http://orig14.deviantart.net/e1c5/f/2011/087/7/f/legolas_avatar_by_angelprincess101-d3conn4.png" />
      <Combatant name="Gimli" ac={11} hp={{ max: 75, current: 14 }} image="https://68.media.tumblr.com/avatar_b4d8059d2a39_128.png" />
      <Combatant name="Aragorn" ac={16} hp={{ max: 30, current: 10 }} image="https://avatarfiles.alphacoders.com/922/92296.jpg" />
      <Combatant name="Legolas" ac={19} hp={{ max: 55, current: 54 }} image="http://orig14.deviantart.net/e1c5/f/2011/087/7/f/legolas_avatar_by_angelprincess101-d3conn4.png" />
      <Combatant name="Gimli" ac={11} hp={{ max: 75, current: 14 }} image="https://68.media.tumblr.com/avatar_b4d8059d2a39_128.png" />
    </CombatList>
    <BottomBar />
  </div>
);

export default CombatComponent;
