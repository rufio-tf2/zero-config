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
import GamePath from '../gamePath';

const Base = () => {
  const { installBaseConfig } = useBaseConfig();
  const { game, setGamePath } = useGameData();
  const [tabIndex, setTabIndex] = useState(0);
  const { showMessage } = useToast();

  const handleChangeTab = useCallback((event, newIndex) => {
    setTabIndex(newIndex);
  }, []);

  const handleSetGamePath = useCallback(
    path => {
      setGamePath(path);
    },
    [setGamePath],
  );

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
        <Box mb={1}>
          <GamePath.Title game={game} />
          <Text mb={1}>
            This will be your main folder, within steamapps/common
          </Text>
          <GamePath.Input
            game={game}
            onChange={handleSetGamePath}
            placeholder="Click to select your game folder"
            value={game.path || ''}
          />
        </Box>
        <Button
          color="primary"
          disabled={!game.path}
          ml={1}
          onClick={handleInstall}
          variant="contained"
        >
          Install
        </Button>
      </Box>
    </Box>
  );
};

export default Base;
