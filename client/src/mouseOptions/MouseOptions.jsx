import React, { useCallback, useState } from 'react';

import { Box, Button, GlobalNav, Text, useGameData } from '../common';
import { GamePathDialog } from '../gamePath';

const MouseOptions = props => {
  const { clearGame, game, hasValidSetup } = useGameData(); // eslint-disable-line
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleClose = useCallback(() => {
    setDialogOpen(false);
  }, [setDialogOpen]);

  return (
    <Box>
      <GlobalNav title="Mouse" />
      <Box p={3}>
        <Text>Game path: {game.path}</Text>

        <Button
          onClick={() => console.log('location', props.location)}
          variant="contained"
        >
          Log Route
        </Button>

        <GamePathDialog onClose={handleClose} open={dialogOpen} />
      </Box>
    </Box>
  );
};

export default MouseOptions;
