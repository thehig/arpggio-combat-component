import React from 'react';
import PropTypes from 'prop-types';

class Combatant extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    hp: PropTypes.shape({
      current: PropTypes.number,
      max: PropTypes.number,
      temporary: PropTypes.number,
    }),
    ac: PropTypes.number,
  };

  static defaultProps = {
    name: 'Unknown',
    hp: {
      current: 0,
      max: 0,
      temporary: 0,
    },
    ac: 0,
  };

  render() {
    const {
      name,
      hp: {
        current,
        max,
        temporary,
      },
      ac,
    } = this.props;

    return (
      <ul>
        <li>Name: {name}</li>
        <li>Hp:
          <ul>
            <li>Current: { current }</li>
            <li>Max: { max }</li>
            <li>Temporary: { temporary }</li>
          </ul>
        </li>
        <li>Armor Class: { ac }</li>
      </ul>
    );
  }
}

export default Combatant;
