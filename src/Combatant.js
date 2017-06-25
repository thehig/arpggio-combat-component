import React from 'react';
import PropTypes from 'prop-types';

class Combatant extends React.Component {
  static propTypes = {
    name: PropTypes.string,
  };

  static defaultProps = {
    name: 'Unknown',
  };

  render() {
    const { name } = this.props;
    return (
      <div>Banana {name}</div>
    );
  }
}

export default Combatant;
