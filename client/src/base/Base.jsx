import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import React, { useCallback, useState } from 'react';

import {
  Box,
  Button,
  Text,
  useBaseConfig,
  useGameData,
  useToast,
} from '../common';
import { GamePathDialog } from '../gamePath';

const Base = () => {
  const { installBaseConfig } = useBaseConfig();
  const { game } = useGameData();
  const [tabIndex, setTabIndex] = useState(0);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const { showMessage } = useToast();

  const handleChangeTab = useCallback((event, newIndex) => {
    setTabIndex(newIndex);
  }, []);

  const handleOpenDialog = useCallback(() => {
    setDialogOpen(true);
  }, []);

  const handleCloseDialog = useCallback(() => {
    setDialogOpen(false);
  }, []);

  const handleInstall = useCallback(() => {
    installBaseConfig().then(() => {
      showMessage('Base config installed.');
    });
  }, [installBaseConfig, showMessage]);

  return (
    <Box>
      <AppBar position="static">
        <Tabs onChange={handleChangeTab} value={tabIndex}>
          <Tab label="Base" />
        </Tabs>
      </AppBar>
      <Box p={3}>
        <Text>Game path: {game.path}</Text>
        <Button onClick={handleOpenDialog} variant="contained">
          Set Path
        </Button>
        <Button
          disabled={!game.path}
          onClick={handleInstall}
          variant="contained"
        >
          Install
        </Button>
        <GamePathDialog onClose={handleCloseDialog} open={isDialogOpen} />
      </Box>
    </Box>
  );
};

export default Base;
