import React from 'react';
import { List, ListItem } from 'material-ui/List';
// import ContentInbox from 'material-ui/svg-icons/content/inbox';
// import ActionGrade from 'material-ui/svg-icons/action/grade';
// import ContentSend from 'material-ui/svg-icons/content/send';
// import ContentDrafts from 'material-ui/svg-icons/content/drafts';
// import Divider from 'material-ui/Divider';
// import ActionInfo from 'material-ui/svg-icons/action/info';
/*
const ListExampleSimple = ({ action }) => (
  <div>
    <List>
      <ListItem onTouchTap={action('ContentInbox')} primaryText="Inbox" leftIcon={<ContentInbox />} />
      <ListItem onTouchTap={action('ActionGrade')} primaryText="Starred" leftIcon={<ActionGrade />} />
      <ListItem onTouchTap={action('ContentSend')} primaryText="Sent mail" leftIcon={<ContentSend />} />
      <ListItem onTouchTap={action('ContentDrafts')} primaryText="Drafts" leftIcon={<ContentDrafts />} />
      <ListItem onTouchTap={action('ContentInbox')} primaryText="Inbox" leftIcon={<ContentInbox />} />
    </List>
    <Divider />
    <List>
      <ListItem primaryText="All mail" rightIcon={<ActionInfo />} />
      <ListItem primaryText="Trash" rightIcon={<ActionInfo />} />
      <ListItem primaryText="Spam" rightIcon={<ActionInfo />} />
      <ListItem primaryText="Follow up" rightIcon={<ActionInfo />} />
    </List>
  </div>
);
export default ListExampleSimple;
*/

const Player = ({ name }) => (
  <div>Player {name}</div>
);

const ActionBar = () => (
  <div>Action Bar</div>
);

const CombatList = ({ children }) => (
  <div>
    Combat List
    { children && children }
  </div>
);

const CombatComponent = () => (
  <div>
    Combat Component
    <ActionBar />
    <CombatList>
      <Player name="Andrew" />
      <Player name="Brian" />
      <Player name="Charlie" />
    </CombatList>
  </div>
);

export default CombatComponent;
