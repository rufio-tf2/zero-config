import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import {
  createHistory,
  createMemorySource,
  LocationProvider,
  Router,
} from '@reach/router';
import React from 'react';

import { StoreProvider } from '../common';
import AnonymousRoute from './AnonymousRoute';
import AuthenticatedRoute from './AuthenticatedRoute';
import theme from './theme';
import ToastMessages from './ToastMessages';

const source = createMemorySource('/');
const history = createHistory(source);

const GetStartedPage = React.lazy(() => import('../getStarted'));
const OptionsInterface = React.lazy(() => import('../optionsInterface'));

const App = () => (
  <StoreProvider>
    <MuiThemeProvider theme={theme}>
      <>
        <CssBaseline />
        <LocationProvider history={history}>
          <Router>
            <AnonymousRoute component={GetStartedPage} path="/start" />
            <AuthenticatedRoute component={OptionsInterface} path="/" />
          </Router>
        </LocationProvider>
        <ToastMessages />
      </>
    </MuiThemeProvider>
  </StoreProvider>
);

export default App;
