import React from 'react';
import PropTypes from 'prop-types';

// Theme Accessor
import muiThemeable from 'material-ui/styles/muiThemeable';

import Avatar from 'material-ui/Avatar';

// Non-editable
import LinearProgress from 'material-ui/LinearProgress';
import Chip from 'material-ui/Chip';

// Editable
import Slider from 'material-ui/Slider';
import ChipInput from 'material-ui-chip-input';

// Nested Items
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

// Icons
import ActiveIcon from 'material-ui/svg-icons/action/grade';


// Colors http://www.material-ui.com/#/customization/colors
import {
  green400 as healthy,
  lightGreen400 as stable,
  amber500 as bloodied,
  red500 as critical,
  lightBlue200 as activeBackground,
} from 'material-ui/styles/colors';

// Local Imports
import ListItem from './muiListItem';

class Combatant extends React.Component {
  static propTypes = {
    editable: PropTypes.bool,
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
    styles: PropTypes.object,
    actions: PropTypes.shape({
      onChangeHealth: PropTypes.func,
      onRequestAddChip: PropTypes.func,
      onRequestDeleteChip: PropTypes.func,
    }),
    active: PropTypes.bool,
    nestedItems: PropTypes.arrayOf(PropTypes.node),
    muiTheme: PropTypes.object.isRequired,
  };

  static defaultProps = {
    editable: false,
    name: 'Unnamed',
    image: null,
    hp: {
      current: 0,
      max: 0,
    },
    tempHp: null,
    ac: 0,
    notes: [],
    styles: {
      listItem: {},
      avatar: {},
      hp: {},
      slider: {
        width: '90%',
      },
      chip: {
        margin: 4,
      },
      chipWrapper: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      chipInput: {},
    },
    actions: {
      onChangeHealth: () => {},
      onRequestAddChip: () => {},
      onRequestDeleteChip: () => {},
    },
    active: false,
    nestedItems: null,
  };

  constructor(props) {
    super(props);

    this.getStatus = this.getStatus.bind(this);
    this.getStyle = this.getStyle.bind(this);
    this.createAvatar = this.createAvatar.bind(this);
    this.createHpBar = this.createHpBar.bind(this);
    this.renderNotes = this.renderNotes.bind(this);
  }

  componentWillReceiveProps(newProps) {
    /* eslint-disable no-param-reassign */

    // Max Hp: max >= 0
    newProps.hp.max = Math.max(0, newProps.hp.max);

    // Current Hp: 0 <= current <= max
    newProps.hp.current = Math.max(
      0,
      Math.min(newProps.hp.current, newProps.hp.max),
    );

    /* eslint-enable no-param-reassign */
  }

  getStatus() {
    const { hp: { current, max } } = this.props;

    const percentageHealth = current / max;
    if (percentageHealth >= 0.9) return { status: 'Healthy', color: healthy };
    if (percentageHealth >= 0.5) return { status: 'Stable', color: stable };
    if (percentageHealth >= 0.2) return { status: 'Bloodied', color: bloodied };
    return { status: 'Critical', color: critical };
  }

  getStyle(key) {
    const { styles } = this.props;

    // If this key is in the instance styles, return that style
    const styleProvided = Object.prototype.hasOwnProperty.call(styles, key);
    if (styleProvided) return styles[key];

    // If this key is in the default styles, return that style
    const defaultProvided = Object.prototype.hasOwnProperty.call(
      Combatant.defaultProps.styles,
      key,
    );
    if (defaultProvided) return Combatant.defaultProps.styles[key];

    console.warn(
      `Combatant attempted to access unrecognised styles.key: ${key}`,
    );
    return null;
  }

  createAvatar() {
    const { image, name } = this.props;

    return image
      ? <Avatar style={this.getStyle('avatar')} src={image} />
      : <Avatar style={this.getStyle('avatar')}>
          {name[0].toUpperCase()}
        </Avatar>;
  }

  createHpBar() {
    const {
      editable,
      hp: { max, current },
      actions: { onChangeHealth },
    } = this.props;

    const { color } = this.getStatus({ hp: { max, current } });
    if (editable) {
      return (
        <Slider
          step={1}
          min={0}
          max={max}
          value={current}
          color={color}
          onChange={onChangeHealth}
          style={this.getStyle('slider')}
        />
      );
    }
    return (
      <LinearProgress
        style={this.getStyle('hp')}
        mode="determinate"
        min={0}
        max={max}
        value={current}
        color={color}
      />
    );
  }

  renderNotes() {
    const {
      notes,
      editable,
      actions: { onRequestAddChip, onRequestDeleteChip },
    } = this.props;

    // Show the notes if we are editable, or there are notes
    if (!editable && (!notes || !notes.length || notes.length === 0))
      return <div />;

    const noteStrings = notes.map(
      note =>
        typeof note === 'string'
          ? note
          : `${note.text}${note.until &&
              ` until ${note.until.startOfTurn
                ? ' start'
                : ' end'} of turn ${note.until.turn}`}`,
    );

    return editable
      ? <ChipInput
          fullWidth
          value={noteStrings}
          onRequestAdd={onRequestAddChip}
          onRequestDelete={onRequestDeleteChip}
          style={this.getStyle('chipInput')}
        />
      : <div style={this.getStyle('chipWrapper')}>
          {noteStrings.map(note =>
            <Chip style={this.getStyle('chip')} key={note}>
              {note}
            </Chip>,
          )}
        </div>;
  }

  render() {
    const {
      name,
      hp: { current, max },
      ac,
      styles,
      active,
      editable,
      nestedItems,
      muiTheme: {
        palette: {
          accent2Color,
        },
      },
    } = this.props;

    const listProps = {
      secondaryText: `${name} [${current}/${max}] AC(${ac})`,
      leftAvatar: this.createAvatar(),
      style: styles.listItem,
    };

    if (active) {
      // Show the active icon **Conflicts with Expander**
      listProps.backgroundColor = accent2Color;
      // Change the colors to secondary app color
    }

    if (editable && nestedItems !== null) {
      listProps.nestedItems = [...nestedItems, <Divider />];
      listProps.initiallyOpen = true;
    }

    return (
      <ListItem {...listProps}>
        {this.createHpBar()}
        {this.renderNotes()}
      </ListItem>
    );
  }
}

export default muiThemeable()(Combatant);
