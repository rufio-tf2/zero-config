import React, { useCallback, useState } from 'react';

import { Box, Button, Text, useSetup } from '../common';
import GamePathDialog from '../gamePath';

const OptionsInterface = () => {
  const { clearSetup, hasValidSetup, setup } = useSetup();
  const [dialogOpen, setDialogOpen] = useState(!hasValidSetup);

  const handleClose = useCallback(() => {
    setDialogOpen(false);
  }, [setDialogOpen]);

  return (
    <Box>
      <Text as="h3">Options</Text>
      <Text>Game path: {setup.gamePath}</Text>
      <Button onClick={clearSetup}>Clear Settings</Button>
      <Button onClick={() => setDialogOpen(true)}>Open Dialog</Button>
      <GamePathDialog onClose={handleClose} open={dialogOpen} />
    </Box>
  );
};

export default OptionsInterface;
