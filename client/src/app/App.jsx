import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
// import StoredSettings from 'electron-settings';
import React from 'react';

import { StoreProvider } from '../common';
import theme from './theme';
import ToastMessages from './ToastMessages';

// const hasSetup = StoredSettings.has('tf2-folder');
const hasSetup = true;

const GetStartedPage = React.lazy(() => import('../getStarted'));
const OptionsInterface = React.lazy(() => import('../optionsInterface'));

const App = () => (
  <StoreProvider>
    <ThemeProvider theme={theme}>
      <>
        <CssBaseline />
        {hasSetup ? <OptionsInterface /> : <GetStartedPage />}
        <ToastMessages />
      </>
    </ThemeProvider>
  </StoreProvider>
);

export default App;
