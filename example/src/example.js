import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

/* eslint-disable import/no-unresolved, import/no-extraneous-dependencies, import/extensions */
import ArpggioCombatComponent from 'arpggio-combat-component';
/* eslint-enable import/no-unresolved, import/no-extraneous-dependencies, import/extensions */

class App extends React.Component {
  componentWillMount() {
    try {
      injectTapEventPlugin();
    } catch (e) {
        // No-op
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <ArpggioCombatComponent />
      </MuiThemeProvider>
    );
  }
}

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(<App />, document.getElementById('app'));
