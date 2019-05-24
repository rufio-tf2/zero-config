import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { navigate } from '@reach/router';
import React, { useCallback, useState } from 'react';

import {
  Box,
  Button,
  // Grid,
  // Paper,
  Text,
  useGameData,
  useMeta,
  useRouter,
  useStore,
} from '../common';

const KeyboardOptions = () => {
  const { clearMeta } = useMeta();
  const { clearGame, game } = useGameData();
  const { history, source } = useRouter();
  const [tabIndex, setTabIndex] = useState(0);
  const { state } = useStore();

  const handleChangeTab = useCallback((event, newIndex) => {
    setTabIndex(newIndex);
  }, []);

  return (
    <Box>
      <AppBar position="static">
        <Tabs onChange={handleChangeTab} value={tabIndex}>
          <Tab label="Communication" />
          <Tab label="Team Fortress" />
          <Tab label="Class-Specific Skills" />
          <Tab label="Combat" />
          <Tab label="Miscellaneous" />
        </Tabs>
      </AppBar>
      <Box p={3}>
        <Text>Game path: {game.path}</Text>
        <Button onClick={clearMeta} variant="contained">
          Clear Meta
        </Button>
        <Button onClick={clearGame} variant="contained">
          Clear Game
        </Button>
        <Button
          onClick={() => {
            console.log('Router', history);
            console.log('source', source);
          }}
          variant="contained"
        >
          Log Router
        </Button>
        <Button onClick={() => console.log(state)} variant="contained">
          Log State
        </Button>
        <Button onClick={() => navigate('/mouse')} variant="contained">
          Navigate Mouse
        </Button>
      </Box>
    </Box>
  );
};

export default KeyboardOptions;
