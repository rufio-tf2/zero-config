import { navigate } from '@reach/router';
import React, { useCallback, useState } from 'react';

import {
  Box,
  Button,
  GlobalNav,
  Text,
  useGameData,
  useMeta,
  useRouter,
  useStore,
} from '../common';
import { GamePathDialog } from '../gamePath';

const KeyboardOptions = () => {
  const { clearMeta } = useMeta();
  const { clearGame, game, hasValidSetup } = useGameData(); // eslint-disable-line
  const { history, source } = useRouter();
  const [dialogOpen, setDialogOpen] = useState(false);
  const { state } = useStore();

  const handleClose = useCallback(() => {
    setDialogOpen(false);
  }, [setDialogOpen]);

  return (
    <Box>
      <GlobalNav title="Keyboard" />
      <Box p={3}>
        <Text>Game path: {game.path}</Text>
        <Button onClick={clearMeta} variant="contained">
          Clear Meta
        </Button>
        <Button onClick={clearGame} variant="contained">
          Clear Game
        </Button>
        <Button onClick={() => setDialogOpen(true)} variant="contained">
          Open Dialog
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
        <GamePathDialog onClose={handleClose} open={dialogOpen} />
      </Box>
    </Box>
  );
};

export default KeyboardOptions;
