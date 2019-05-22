import React from 'react';

import { Box, Button, clearSetup, Text, useStore } from '../common';

const OptionsInterface = () => {
  const { dispatch } = useStore();
  const clearSettings = () => {
    dispatch(clearSetup());
  };

  return (
    <Box>
      <Text>Options</Text>
      <Button onClick={clearSettings}>Clear Settings</Button>
    </Box>
  );
};

export default OptionsInterface;
