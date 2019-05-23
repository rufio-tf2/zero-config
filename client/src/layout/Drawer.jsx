import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
import MuiDrawer from '@material-ui/core/Drawer';
import React, { useCallback, useMemo, useState } from 'react';

import {
  Box,
  ExpandLessIcon,
  ExpandMoreIcon,
  FilterListIcon,
  IconButton,
  identity,
  keyBy,
  List,
  mapValues,
  stubTrue,
  Text,
  Tooltip,
  useDrawer,
  useMeta,
  VerticalAlignTopIcon,
} from '../common';
import { ReactComponent as GameLogo } from '../images/tf2-logo.svg'; // TODO: Get much smaller version

const Section = ({ children, label, open, onClick }) => {
  return (
    <React.Fragment>
      <List dense>
        <List.Item button onClick={onClick}>
          <List.ItemText primary={label} />
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
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

const Item = ({ label, onClick, selected }) => {
  return (
    <List.Item button onClick={onClick} pl={4} selected={selected}>
      <List.ItemText primary={label} />
    </List.Item>
  );
};

const Drawer = ({ className, paperClasses }) => {
  const { title, version } = useMeta();
  const { sections, selectedId, setDrawerSelectedId } = useDrawer();
  const [sectionStates, setSectionStates] = useState(
    mapValues(keyBy(sections, 'id'), stubTrue),
  );

  const someSectionsExpanded = useMemo(
    () => Object.values(sectionStates).some(identity),
    [sectionStates],
  );

  console.log('sectionStates', sectionStates);

  const handleToggleAllSections = useCallback(() => {
    setSectionStates(mapValues(sectionStates, () => !someSectionsExpanded));
  }, [sectionStates, someSectionsExpanded]);

  const handleToggleSectionState = useCallback(
    id => {
      setSectionStates({
        ...sectionStates,
        [id]: !sectionStates[id],
      });
    },
    [sectionStates],
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
      <List.Subheader display="flex" justifyContent="flex-end">
        <Tooltip
          enterDelay={500}
          title={`${someSectionsExpanded ? 'Collapse' : 'Expand'} All`}
        >
          <IconButton edge="end" onClick={handleToggleAllSections} size="small">
            {someSectionsExpanded ? (
              <VerticalAlignTopIcon />
            ) : (
              <FilterListIcon />
            )}
          </IconButton>
        </Tooltip>
      </List.Subheader>
      <Divider />
      {sections.map(section => (
        <Section
          key={section.label}
          label={section.label}
          onClick={() => handleToggleSectionState(section.id)}
          open={sectionStates[section.id]}
          section={section}
        >
          {section.items.map(item => (
            <Item
              key={item.id}
              label={item.label}
              onClick={() => setDrawerSelectedId(item.id)}
              selected={item.id === selectedId}
            />
          ))}
        </Section>
      ))}
    </MuiDrawer>
  );
};

export default Drawer;
