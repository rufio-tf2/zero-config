import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
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

let source = createMemorySource('/');
let history = createHistory(source);

const GetStartedPage = React.lazy(() => import('../getStarted'));
const OptionsInterface = React.lazy(() => import('../optionsInterface'));

const App = () => (
  <StoreProvider>
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  </StoreProvider>
);

export default App;
