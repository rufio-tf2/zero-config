import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import React from 'react';

import Box from './Box';
import Text from './Text';
import { ReactComponent as GameLogo } from './tf2-logo.svg'; // TODO: Get much smaller version

const GlobalNav = ({ children, title }) => (
  <AppBar position="static">
    <Toolbar>
      <Box alignItems="center" color="inherit" display="flex">
        <GameLogo height="10%" width="10%" />
        <Text as="small" color="inherit" ml={1} variant="caption">
          v{process.env.REACT_APP_VERSION}
        </Text>
        {!!title && (
          <Text as="h2" color="inherit" ml={3} variant="h6">
            {title}
          </Text>
        )}
      </Box>
      <Box
        alignItems="center"
        display="flex"
        flex="1"
        justifyContent="flex-end"
      >
        {children}
      </Box>
    </Toolbar>
  </AppBar>
);

export default GlobalNav;
