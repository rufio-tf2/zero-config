import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import React from 'react';

import { StoreProvider } from '../common';
import AuthenticatedLayout from './AuthenticatedLayout';
import theme from './theme';
import ToastMessages from './ToastMessages';

const OptionsInterface = React.lazy(() => import('../optionsInterface'));

const App = () => (
  <StoreProvider>
    <MuiThemeProvider theme={theme}>
      <>
        <CssBaseline />
        <AuthenticatedLayout>
          <OptionsInterface />
        </AuthenticatedLayout>
        <ToastMessages />
      </>
    </MuiThemeProvider>
  </StoreProvider>
);

export default App;
