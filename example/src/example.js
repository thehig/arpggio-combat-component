const React = require('react');
const ReactDOM = require('react-dom');
/* eslint-disable import/no-unresolved, import/no-extraneous-dependencies */
const ArpggioCombatComponent = require('arpggio-combat-component');
/* eslint-enable import/no-unresolved, import/no-extraneous-dependencies */

const App = React.createClass({
  render() {
    return (
      <div>
        <ArpggioCombatComponent />
      </div>
    );
  },
});

ReactDOM.render(<App />, document.getElementById('app'));
