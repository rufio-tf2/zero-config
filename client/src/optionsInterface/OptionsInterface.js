import React, { useCallback, useState } from 'react';

import {
  Box,
  Button,
  GlobalNav,
  Text,
  useDrawer,
  useGameData,
  useMeta,
  useStore,
} from '../common';
import GamePathDialog from '../gamePath';

const OptionsInterface = () => {
  const { clearMeta } = useMeta();
  const { clearGame, game, hasValidSetup } = useGameData(); // eslint-disable-line
  const { selectedOption } = useDrawer();
  const [dialogOpen, setDialogOpen] = useState(false);
  const { state } = useStore();

  const handleClose = useCallback(() => {
    setDialogOpen(false);
  }, [setDialogOpen]);

  return (
    <Box>
      <GlobalNav title={selectedOption.label} />
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
        <Button onClick={() => console.log(state)} variant="contained">
          Log State
        </Button>
        <GamePathDialog onClose={handleClose} open={dialogOpen} />
      </Box>
    </Box>
  );
};

export default OptionsInterface;
