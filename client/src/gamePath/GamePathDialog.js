import { remote } from 'electron';
import React, { useCallback, useState } from 'react';

import {
  Button,
  CloseIcon,
  Dialog,
  IconButton,
  noop,
  Text,
  TextField,
  useSetup,
  useStore,
} from '../common';

const openDirectoryDialog = onSelectDirectory => {
  return remote.dialog.showOpenDialog(
    { properties: ['openDirectory'] },
    onSelectDirectory,
  );
};

const GamePathDialog = ({ open = false, onClose = noop }) => {
  const { setSetup, setup } = useSetup();
  const [inputGamePath, setInputGamePath] = useState('');
  const { state } = useStore();

  const handleSetGamePath = useCallback(
    event => {
      console.log('handleSetGamePath event', event);
      setInputGamePath(event.target.value);
    },
    [setInputGamePath],
  );

  const confirmSetup = useCallback(() => {
    setSetup({
      ...setup,
      gamePath: inputGamePath,
    });
    onClose();
  }, [inputGamePath, onClose, setSetup, setup]);

  const handleSelectDirectory = fileDirs => {
    const gamePath = fileDirs[0];
    setInputGamePath(gamePath);
  };

  return (
    <Dialog
      aria-labelledby="form-dialog-title"
      disableBackdropClick
      disableEscapeKeyDown
      fullWidth
      maxWidth="md"
      onClose={onClose}
      open={open}
    >
      <Dialog.Title
        alignItems="center"
        disableTypography
        display="flex"
        id="form-dialog-title"
        justifyContent="space-between"
        pb={0}
      >
        <Text variant="h6">Select your {state.game.fullName} folder</Text>
        <IconButton aria-label="Close" onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Dialog.Title>
      <Dialog.Content pt={0}>
        <Dialog.ContentText>
          This will be your main folder, within steamapps/common
        </Dialog.ContentText>
        <TextField
          autoFocus
          fullWidth
          helperText={`(Default Windows) C:\\Program Files (x86)\\Steam\\steamapps\\common\\${
            state.game.fullName
          }`}
          id="game-path"
          label="Click to select your game folder"
          onChange={handleSetGamePath}
          onClick={() => openDirectoryDialog(handleSelectDirectory)}
          readOnly
          required
          value={inputGamePath}
          variant="outlined"
        />
      </Dialog.Content>
      <Dialog.Actions>
        <Button
          aria-label="Finish Setup"
          color="primary"
          disabled={!inputGamePath}
          onClick={confirmSetup}
          size="large"
          variant="contained"
        >
          Confirm
        </Button>
      </Dialog.Actions>
    </Dialog>
  );
};

export default GamePathDialog;