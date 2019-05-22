import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { navigate } from '@reach/router';
import React from 'react';

import Box from './Box';
import ButtonMenu from './ButtonMenu';
import IconButton from './IconButton';
import Text from './Text';
import { ReactComponent as TF2Logo } from './tf2-logo.svg';
import Tooltip from './Tooltip';

const GlobalNavIconLink = ({ href, icon: Icon, label }) => (
  <Tooltip title={label}>
    <IconButton
      aria-label={label}
      color="inherit"
      onClick={() => navigate(href)}
    >
      <Icon />
    </IconButton>
  </Tooltip>
);

const GlobalNavIconMenu = ({ children, icon: Icon, label }) => (
  <Tooltip title={label}>
    <ButtonMenu aria-label={label} color="inherit" icon={Icon}>
      {children}
    </ButtonMenu>
  </Tooltip>
);

const GlobalNav = ({ children, title }) => (
  <AppBar position="sticky">
    <Toolbar>
      <Box alignItems="center" color="inherit" display="flex">
        <TF2Logo height="10%" width="10%" />
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

GlobalNav.IconLink = GlobalNavIconLink;
GlobalNav.IconMenu = GlobalNavIconMenu;
GlobalNav.IconMenu.Item = ButtonMenu.Item;

export default GlobalNav;
