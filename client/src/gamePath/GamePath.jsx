import { remote } from 'electron';
import React, { useCallback, useRef, useState } from 'react';

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

const GamePathInput = ({ game, label, onChange, placeholder, value }) => {
  const [isInputLocked, setInputLocked] = useState(false);
  const inputEl = useRef(null);

  const handleSelectDirectory = useCallback(
    fileDirs => {
      try {
        if (fileDirs) {
          const gamePath = fileDirs[0];
          onChange(gamePath);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setInputLocked(false);
        inputEl.current.focus();
      }
    },
    [onChange],
  );

  const handleInputClick = useCallback(() => {
    if (!isInputLocked) {
      setInputLocked(true);
      openDirectoryDialog(handleSelectDirectory);
    }
  }, [handleSelectDirectory, isInputLocked]);

  return (
    <TextField
      autoFocus
      disabled={isInputLocked}
      fullWidth
      helperText={`(Default Windows) C:\\Program Files (x86)\\Steam\\steamapps\\common\\${
        game.fullName
      }`}
      id="game-path"
      inputProps={{ readOnly: true, style: { cursor: 'pointer' } }}
      inputRef={inputEl}
      label={label}
      onChange={onChange}
      onClick={handleInputClick}
      placeholder={placeholder}
      required
      value={value}
      variant="outlined"
    />
  );
};

GamePath.Input = GamePathInput;
GamePath.Title = GamePathTitle;

export default GamePath;
