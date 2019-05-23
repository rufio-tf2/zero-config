import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import React from 'react';

import { Box, Text } from '../common';

const GlobalNav = ({ className, title }) => {
  return (
    <AppBar className={className} position="static">
      <Toolbar>
        <Box alignItems="center" color="inherit" display="flex">
          {!!title && (
            <Text as="h2" color="inherit" ml={3} variant="h6">
              {title}
            </Text>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default GlobalNav;
