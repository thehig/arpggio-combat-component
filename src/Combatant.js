import React from 'react';
import PropTypes from 'prop-types';

import Paper from 'material-ui/Paper';
import Chip from 'material-ui/Chip';


import { GridList, GridTile } from 'material-ui/GridList';
import { List, ListItem } from 'material-ui/List';

import Avatar from 'material-ui/Avatar';
import LinearProgress from 'material-ui/LinearProgress';

import Badge from 'material-ui/Badge';
import ArmorClassIcon from 'material-ui/svg-icons/action/verified-user';

// Colors http://www.material-ui.com/#/customization/colors
import {
  green400 as healthy,
  lightGreen400 as stable,
  amber500 as bloodied,
  red500 as critical,
} from 'material-ui/styles/colors';

const styles = {
  list: {
  },
  listItem: {
  },
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

class Combatant extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    hp: PropTypes.shape({
      current: PropTypes.number.isRequired,
      max: PropTypes.number.isRequired,
      temporary: PropTypes.number.isRequired,
    }).isRequired,
    ac: PropTypes.number.isRequired,
    notes: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.shape({
          text: PropTypes.string.isRequired,
          until: PropTypes.shape({
            turn: PropTypes.number.isRequired,
            startOfTurn: PropTypes.bool,
          }),
        }),
      ]),
    ),
  };

  static defaultProps = {
    name: 'Unknown',
    hp: {
      current: 0,
      max: 0,
      temporary: 0,
    },
    ac: 0,
    notes: [],
  };

  constructor(props) {
    super(props);
    this.renderNotes = this.renderNotes.bind(this);
  }

  renderNotes(notes) {
    if (!notes || !notes.length) return <div />;

    return (
      <div style={styles.wrapper} >
        {notes.map((note) => {
          if (typeof note === 'string') return <Chip style={styles.chip}>{note}</Chip>;
          return (
            <Chip style={styles.chip}>
              {note.text}
              {note.until &&
                ` until ${note.until.startOfTurn ? ' start' : ' end'} of turn ${note.until.turn}`
              }
            </Chip>
          );
        })}
      </div>
    );
    


    // return (
    //   <Chip>Text</Chip>
    // );
    // return (
    //   <li>
    //     Notes:
    //     <ul>
    //     </ul>
    //   </li>
    // );
  }

  getStatus({ current, max }) {
    const percentageHealth = current / max;
    if (percentageHealth >= 0.9) return { status: 'Healthy', color: healthy };
    if (percentageHealth >= 0.5) return { status: 'Stable', color: stable };
    if (percentageHealth >= 0.2) return { status: 'Bloodied', color: bloodied };
    return { status: 'Critical', color: critical };
  }

  render() {
    const {
      name,
      hp: {
        current,
        max,
        temporary,
      },
      ac,
      notes,
    } = this.props;

    const { color } = this.getStatus({ current, max });

    return (
      <List
        style={styles.list}
      >
        <ListItem
          secondaryText={`${name} [${current}/${max}]`}
          leftAvatar={<Avatar />}
          style={styles.listItem}
        >
          <LinearProgress mode="determinate" min={0} max={max} value={current} color={color} />
          {notes && this.renderNotes(notes)}
        </ListItem>

        {/*
        <ListItem>
          <GridTile title={name} ><Avatar /></GridTile>
            <GridTile title={`${current}/${max}`} ></GridTile>
            <GridTile title="Armor" ><Badge badgeContent={ac} primary><ArmorClassIcon /></Badge></GridTile>
        </ListItem>
        */}
      </List>
    );
  }
}

export default Combatant;
