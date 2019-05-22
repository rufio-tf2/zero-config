import React, { useCallback, useState } from 'react';

import { Box, Button, Text, TextField, useSetup, useStore } from '../common';
import SetupCard from './SetupCard';

const GetStarted = () => {
  const { setSetup, setup } = useSetup();
  const [inputGamePath, setInputGamePath] = useState('');
  const { state } = useStore();

  const handleSetGamePath = useCallback(
    event => {
      setInputGamePath(event.target.value);
    },
    [setInputGamePath],
  );

  const confirmSetup = useCallback(() => {
    setSetup({
      ...setup,
      gamePath: inputGamePath,
    });
  }, [inputGamePath, setSetup, setup]);

  return (
    <Box m={4}>
      <SetupCard title={`Select your ${state.game.fullName} folder`}>
        <Text>This will be your main folder, within steamapps/common</Text>
        <TextField
          fullWidth
          id="game-path"
          mt={2}
          onChange={handleSetGamePath}
          value={inputGamePath}
          variant="outlined"
        />
      </SetupCard>
      <Box display="flex" justifyContent="flex-end" mt={2}>
        <Button
          aria-label="Finish Setup"
          color="primary"
          onClick={confirmSetup}
          size="large"
          variant="contained"
        >
          Finish Setup
        </Button>
      </Box>
    </Box>
  );
};

export default GetStarted;
