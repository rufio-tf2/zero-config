import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { LocationProvider, Redirect, Router } from '@reach/router';
import React from 'react';

import { StoreProvider, useRouter } from '../common';
import Global from './Global';
import BaseLayout from './Layout';
import theme from './theme';

const KeyboardOptions = React.lazy(() => import('../keyboardOptions'));
const MouseOptions = React.lazy(() => import('../mouseOptions'));
const DefaultPage = React.lazy(() => import('./DefaultPage'));

const Route = ({
  component: Component,
  layout: Layout = BaseLayout,
  ...props
}) => {
  return (
    <Layout>
      <Component {...props} />
    </Layout>
  );
};

const App = () => {
  const { history } = useRouter();

  return (
    <StoreProvider>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <LocationProvider history={history}>
          <Router>
            <Redirect from="/" noThrow to="/keyboard" />
            <Route component={KeyboardOptions} path="/keyboard" />
            <Route component={MouseOptions} path="/mouse" />
            <Route component={DefaultPage} default path="/404" />
          </Router>
        </LocationProvider>
        <Global />
      </MuiThemeProvider>
    </StoreProvider>
  );
};

export default App;
