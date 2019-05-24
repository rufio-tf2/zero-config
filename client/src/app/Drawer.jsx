import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
import MuiDrawer from '@material-ui/core/Drawer';
import React, { useCallback, useMemo, useState } from 'react';

import {
  Box,
  CodeIcon,
  ExpandLessIcon,
  ExpandMoreIcon,
  FormatLineSpacingIcon,
  IconButton,
  identity,
  isEmpty,
  List,
  mapValues,
  Text,
  Tooltip,
  useMeta,
  useRouter,
  VerticalAlignTopIcon,
} from '../common';
import { ReactComponent as GameLogo } from '../images/tf2-logo.svg'; // TODO: Get much smaller version
import routes from './routes';

const DrawerSection = ({ children, disabled, label, open, onClick }) => {
  return (
    <React.Fragment>
      <List dense>
        <List.Item button disabled={disabled} onClick={onClick}>
          <List.ItemText primary={label} />
          {!disabled && open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </List.Item>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" dense disablePadding>
            {children}
          </List>
        </Collapse>
      </List>
      <Divider />
    </React.Fragment>
  );
};

const DrawerItem = ({ label, selected, onClick }) => {
  return (
    <List.Item button onClick={onClick} pl={4} selected={selected}>
      <List.ItemText primary={label} />
    </List.Item>
  );
};

const Drawer = ({ className, paperClasses }) => {
  const { title, version } = useMeta();
  const { location, navigate } = useRouter();
  const [openSections, setOpenSections] = useState(
    routes.reduce((acc, section) => ({ ...acc, [section.id]: true }), {}),
  );

  const isCurrentSection = useCallback(
    sectionId => {
      const section = routes[sectionId];
      return section.routes.some(route => route.path === location.pathname);
    },
    [location.pathname],
  );

  const someSectionsExpanded = useMemo(
    () => Object.values(openSections).some(identity),
    [openSections],
  );

  const handleToggleAllSections = useCallback(() => {
    setOpenSections(mapValues(openSections, () => !someSectionsExpanded));
  }, [openSections, someSectionsExpanded]);

  const handleCollapseOthers = useCallback(() => {
    setOpenSections(
      mapValues(openSections, (_, sectionId) => isCurrentSection(sectionId)),
    );
  }, [isCurrentSection, openSections]);

  const handleToggleSectionState = useCallback(
    id => {
      setOpenSections({
        ...openSections,
        [id]: !openSections[id],
      });
    },
    [openSections],
  );

  return (
    <MuiDrawer
      anchor="left"
      classes={{
        paper: paperClasses,
      }}
      className={className}
      variant="permanent"
    >
      <Box alignItems="center" display="flex">
        <GameLogo height="45%" width="45%" />
        <Box>
          <Text as="h6" display="inline-block" variant="h6">
            {title}
          </Text>
          <Text as="small" color="inherit" variant="caption">
            {version}
          </Text>
        </Box>
      </Box>
      <Divider />
      <List.Subheader display="flex" justifyContent="flex-end">
        <Tooltip enterDelay={500} title="Show Selected">
          <IconButton onClick={handleCollapseOthers} size="small">
            <CodeIcon />
          </IconButton>
        </Tooltip>
        <Tooltip
          enterDelay={500}
          title={`${someSectionsExpanded ? 'Collapse' : 'Expand'} All`}
        >
          <IconButton edge="end" onClick={handleToggleAllSections} size="small">
            {someSectionsExpanded ? (
              <VerticalAlignTopIcon />
            ) : (
              <FormatLineSpacingIcon />
            )}
          </IconButton>
        </Tooltip>
      </List.Subheader>
      <Divider />
      {routes.map(section => (
        <DrawerSection
          disabled={isEmpty(section.routes)}
          key={section.id}
          label={section.label}
          onClick={() => handleToggleSectionState(section.id)}
          open={openSections[section.id]}
        >
          {section.routes.map(route => (
            <DrawerItem
              key={route.id}
              label={route.label}
              onClick={() => navigate(route.path)}
              selected={route.path === location.pathname}
            />
          ))}
        </DrawerSection>
      ))}
    </MuiDrawer>
  );
};

export default Drawer;
