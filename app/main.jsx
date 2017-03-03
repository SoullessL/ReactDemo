import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBarMain from './AppBar.jsx';
import StepperRequest from './Stepper.jsx';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const App = () => (
  <div>
    <MuiThemeProvider>
      <AppBarMain />
    </MuiThemeProvider>
    <MuiThemeProvider>
      <StepperRequest />
    </MuiThemeProvider>
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);