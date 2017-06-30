import React from 'react';
import { List } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

const CombatList = ({ children }) =>
  <List>
    {children && children}
  </List>;

export default CombatList;
