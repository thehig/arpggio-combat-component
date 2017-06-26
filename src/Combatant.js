import React from 'react';
import PropTypes from 'prop-types';

import Chip from 'material-ui/Chip';
import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import LinearProgress from 'material-ui/LinearProgress';

// Colors http://www.material-ui.com/#/customization/colors
import {
  green400 as healthy,
  lightGreen400 as stable,
  amber500 as bloodied,
  red500 as critical,
} from 'material-ui/styles/colors';

const styles = {
  listItem: {
  },
  chip: {
    margin: 4,
  },
  chipWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

class Combatant extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    hp: PropTypes.shape({
      current: PropTypes.number.isRequired,
      max: PropTypes.number.isRequired,
    }).isRequired,
    tempHp: PropTypes.shape({
      current: PropTypes.number.isRequired,
      max: PropTypes.number.isRequired,
    }),
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
    name: 'Unnamed',
    image: null,
    hp: {
      current: 0,
      max: 0,
    },
    tempHp: null,
    ac: 0,
    notes: [],
  };

  constructor(props) {
    super(props);

    this.getStatus = this.getStatus.bind(this);
    this.createAvatar = this.createAvatar.bind(this);
    this.createHpBar = this.createHpBar.bind(this);
    this.renderNotes = this.renderNotes.bind(this);
  }

  componentWillReceiveProps(newProps) {
    /* eslint-disable no-param-reassign */

    // Max Hp: max >= 0
    newProps.hp.max = Math.max(0, newProps.hp.max);

    // Current Hp: 0 <= current <= max
    newProps.hp.current = Math.max(0, Math.min(newProps.hp.current, newProps.hp.max));

    /* eslint-enable no-param-reassign */
  }

  getStatus({ current, max }) {
    const percentageHealth = current / max;
    if (percentageHealth >= 0.9) return { status: 'Healthy', color: healthy };
    if (percentageHealth >= 0.5) return { status: 'Stable', color: stable };
    if (percentageHealth >= 0.2) return { status: 'Bloodied', color: bloodied };
    return { status: 'Critical', color: critical };
  }

  createAvatar({ image, name }) {
    return image ? <Avatar src={image} /> : <Avatar>{name[0].toUpperCase()}</Avatar>;
  }

  createHpBar({ max, current, color }) {
    return <LinearProgress mode="determinate" min={0} max={max} value={current} color={color} />;
  }

  renderNotes(notes) {
    if (!notes || !notes.length) return <div />;

    return (
      <div style={styles.chipWrapper} >
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
  }

  render() {
    const {
      name,
      image,
      hp: {
        current,
        max,
      },
      ac,
      notes,
    } = this.props;

    const { color } = this.getStatus({ current, max });

    return (
      <ListItem
        secondaryText={`${name} [${current}/${max}] AC(${ac})`}
        leftAvatar={this.createAvatar({ image, name })}
        style={styles.listItem}
      >
        {this.createHpBar({ max, current, color })}
        {notes && this.renderNotes(notes)}
      </ListItem>
    );
  }
}

export default Combatant;
