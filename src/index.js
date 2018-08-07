import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Root from './Root';

const theme = createMuiTheme();

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Root />
    </MuiThemeProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
