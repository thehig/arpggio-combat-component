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
  };

  static defaultProps = {
    name: 'Unknown',
    hp: {
      current: 0,
      max: 0,
      temporary: 0,
    },
  };

  render() {
    const { name, hp: { current, max, temporary } } = this.props;
    return (
      <div>
        Name: {name}
        Hp:
        <div>
          Current: { current }
          Max: { max }
          Temporary: { temporary }
        </div>
      </div>
    );
  }
}

export default Combatant;
