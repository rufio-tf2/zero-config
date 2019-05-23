import React, { useCallback, useState } from 'react';

import { Box, Button, GlobalNav, Text, useGameData, useMeta } from '../common';
import GamePathDialog from '../gamePath';

const OptionsInterface = () => {
  const { clearMeta } = useMeta();
  const { clearGame, game, hasValidSetup } = useGameData();
  const [dialogOpen, setDialogOpen] = useState(!hasValidSetup);

  const handleClose = useCallback(() => {
    setDialogOpen(false);
  }, [setDialogOpen]);

  return (
    <Box>
      <GlobalNav title="Options" />
      <Box p={3}>
        <Text as="h3">Options</Text>
        <Text>Game path: {game.path}</Text>
        <Button onClick={clearMeta} variant="contained">
          Clear Meta
        </Button>
        <Button onClick={clearGame} variant="contained">
          Clear Game
        </Button>
        <Button onClick={() => setDialogOpen(dialogOpen)} variant="contained">
          Open Dialog
        </Button>
        <GamePathDialog onClose={handleClose} open={false} />
      </Box>
    </Box>
  );
};

export default OptionsInterface;
