import { remote } from 'electron';
import React, { useCallback } from 'react';

import { Box, Text, TextField } from '../common';

const openDirectoryDialog = onSelectDirectory => {
  return remote.dialog.showOpenDialog(
    { properties: ['openDirectory'] },
    onSelectDirectory,
  );
};

const GamePathTitle = ({ game }) => (
  <Text variant="h6">Select your {game.fullName} folder</Text>
);

const GamePath = props => <Box {...props} />;

const GamePathInput = ({ game, onChange, value }) => {
  const handleSelectDirectory = useCallback(
    fileDirs => {
      const gamePath = fileDirs[0];
      onChange(gamePath);
    },
    [onChange],
  );

  return (
    <TextField
      autoFocus
      fullWidth
      helperText={`(Default Windows) C:\\Program Files (x86)\\Steam\\steamapps\\common\\${
        game.fullName
      }`}
      id="game-path"
      label="Click to select your game folder"
      onChange={onChange}
      onClick={() => openDirectoryDialog(handleSelectDirectory)}
      readOnly
      required
      value={value}
      variant="outlined"
    />
  );
};

GamePath.Input = GamePathInput;
GamePath.Title = GamePathTitle;

export default GamePath;
