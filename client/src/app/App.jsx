import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { Router } from '@reach/router';
import React from 'react';

import { StoreProvider } from '../common';
import AnonymousRoute from './AnonymousRoute';
import AuthenticatedRoute from './AuthenticatedRoute';
import theme from './theme';
import ToastMessages from './ToastMessages';

const GetStartedPage = React.lazy(() => import('../getStarted'));
const OptionsInterface = React.lazy(() => import('../optionsInterface'));

const App = () => (
  <StoreProvider>
    <ThemeProvider theme={theme}>
      <>
        <CssBaseline />
        <Router>
          <AnonymousRoute component={GetStartedPage} path="/start" />
          <AuthenticatedRoute component={OptionsInterface} path="/" />
        </Router>
        <ToastMessages />
      </>
    </ThemeProvider>
  </StoreProvider>
);

export default App;
