import React from 'react';
import PropTypes from 'prop-types';

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

    return (
      <ul>
        <li>Name: {name}</li>
        <li>Hp:
          <ul>
            <li>Current: {current}</li>
            <li>Max: {max}</li>
            <li>Temporary: {temporary}</li>
          </ul>
        </li>
        <li>Armor Class: {ac}</li>
        {notes && this.renderNotes(notes)}
      </ul>
    );
  }
}

export default Combatant;
