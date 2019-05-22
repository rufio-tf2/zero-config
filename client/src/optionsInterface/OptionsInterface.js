import React from 'react';

import { Box, Button, Text, useSetup } from '../common';

const OptionsInterface = () => {
  const { clearSetup, setup } = useSetup();

  return (
    <Box>
      <Text as="h3">Options</Text>
      <Text>{setup.gamePath}</Text>
      <Button onClick={clearSetup}>Clear Settings</Button>
    </Box>
  );
};

export default OptionsInterface;
