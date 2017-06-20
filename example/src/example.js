var React = require('react');
var ReactDOM = require('react-dom');
var ArpggioCombatComponent = require('arpggio-combat-component');

var App = React.createClass({
	render () {
		return (
			<div>
				<ArpggioCombatComponent />
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
