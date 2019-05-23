// import { navigate } from '@reach/router';
import { makeStyles } from '@material-ui/styles';
import React, { Suspense } from 'react';

import { Box, LoadingIndicator } from '../common';
import Drawer from './Drawer';

const DRAWER_WIDTH = 240;

const useStyles = makeStyles(theme => ({
  content: {
    backgroundColor: theme.palette.background.default,
    flexGrow: 1,
  },
  drawer: {
    flexShrink: 0,
    width: DRAWER_WIDTH,
  },
  drawerPaper: {
    width: DRAWER_WIDTH,
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <Box display="flex">
      <Drawer className={classes.drawer} paperClasses={classes.drawerPaper} />
      <Suspense
        fallback={
          <Box as="main" display="flex" justifyContent="center" my={10}>
            <LoadingIndicator />
          </Box>
        }
      >
        <Box as="main" className={classes.content}>
          {children}
        </Box>
      </Suspense>
    </Box>
  );
};

export default Layout;
