import React from 'react';
import PropTypes from 'prop-types';

import Paper from 'material-ui/Paper';
import LinearProgress from 'material-ui/LinearProgress';
import Slider from 'material-ui/Slider';
import CircularProgress from 'material-ui/CircularProgress';


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
      <li>
        Notes:
        <ul>
          {notes.map((note) => {
            if (typeof note === 'string') return <li>{note}</li>;
            return (
              <li key={note.text}>
                {note.text}
                {note.until &&
                  ` until ${note.until.startOfTurn ? ' start' : ' end'} of turn ${note.until.turn}`
                }
              </li>
            );
          })}
        </ul>
      </li>
    );
  }

  getStatus({ current, max }) {
    const percentageHealth = current / max;
    if (percentageHealth >= 0.9) return { status: 'Healthy', color: 'green' };
    if (percentageHealth >= 0.5) return { status: 'Stable', color: 'yellow' };
    if (percentageHealth >= 0.2) return { status: 'Bloodied', color: 'red' };
    return { status: 'Critical', color: 'grey' };
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
      <Paper>
        <ul>
          <li>Name: {name}</li>
          <li>Hp as linear progress <LinearProgress mode="determinate" min={0} max={max} value={current} color={color} /></li>
          <li>Hp as circular progress <CircularProgress mode="determinate" min={0} max={max} value={current} color={color} /></li>
          <li>Hp as Slider <Slider min={0} max={max} value={current} color={color} step={1} /></li>

          <li>Armor Class: {ac}</li>
          {notes && this.renderNotes(notes)}
        </ul>
      </Paper>
    );
  }
}

export default Combatant;
