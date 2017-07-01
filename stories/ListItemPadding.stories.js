import React from 'react';

/* eslint-disable import/no-unresolved, import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { muiTheme } from 'storybook-addon-material-ui';
/* eslint-enable import/no-unresolved, import/no-extraneous-dependencies */

import { List, ListItem } from 'material-ui/List';
import EyeIcon from 'material-ui/svg-icons/image/remove-red-eye';
import Slider from 'material-ui/Slider';
import Divider from 'material-ui/Divider';

import MyListItem from '../src/muiListItem';

storiesOf('List Item Padding', module)
  .addDecorator(muiTheme())
  // .add('Card', () => <Card />)
  .add('Normal List Item', () => (
    <List>
        <ListItem primaryText="Normal List Item" />
        <Divider />
        <ListItem primaryText="With a Right Icon" rightIcon={<EyeIcon />} />
        <Divider />
        <ListItem primaryText="With a slider (full width by default)"><Slider /></ListItem>
        <Divider />
        <ListItem primaryText="With a slider and right icon (Note padding-right)" rightIcon={<EyeIcon />}><Slider /></ListItem>
        <Divider />
        <ListItem primaryText="With a slider and nested items (Note padding-right)" nestedItems={[<EyeIcon />]}><Slider /></ListItem>
    </List>
  ))
  .add('Updated List Item', () => (
    <List>
        <MyListItem primaryText="Normal List Item" />
        <Divider />
        <MyListItem primaryText="With a Right Icon" rightIcon={<EyeIcon />} />
        <Divider />
        <MyListItem primaryText="With a slider (full width by default)"><Slider /></MyListItem>
        <Divider />
        <MyListItem primaryText="With a slider and right icon (Note padding-right)" rightIcon={<EyeIcon />}><Slider /></MyListItem>
        <Divider />
        <MyListItem primaryText="With a slider and nested items (Note padding-right)" nestedItems={[<EyeIcon />]}><Slider /></MyListItem>
    </List>
  ));

