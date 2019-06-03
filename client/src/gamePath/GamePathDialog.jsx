import React, { useCallback, useState } from 'react';

import {
  Button,
  CloseIcon,
  Dialog,
  IconButton,
  noop,
  useGameData,
} from '../common';
import GamePath from './GamePath';

const GamePathDialog = ({ open = false, onClose = noop }) => {
  const { game, setGamePath } = useGameData();
  const [inputGamePath, setInputGamePath] = useState('');

  const handleSetGamePath = useCallback(
    path => {
      setInputGamePath(path);
    },
    [setInputGamePath],
  );

  const confirmSetup = useCallback(() => {
    setGamePath(inputGamePath);
    onClose();
  }, [inputGamePath, onClose, setGamePath]);

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
        <GamePath.Title game={game} />
        <IconButton aria-label="Close" onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Dialog.Title>
      <Dialog.Content pt={0}>
        <Dialog.ContentText>
          This will be your main folder, within steamapps/common
        </Dialog.ContentText>
        <GamePath.Input
          game={game}
          label="Click to select your game folder"
          onChange={handleSetGamePath}
          value={inputGamePath}
        />
      </Dialog.Content>
      <Dialog.Actions>
        <Button aria-label="Setup Later" onClick={onClose} variant="contained">
          I'll Do It Later
        </Button>
        <Button
          aria-label="Finish Setup"
          color="primary"
          disabled={!inputGamePath}
          onClick={confirmSetup}
          variant="contained"
        >
          Confirm
        </Button>
      </Dialog.Actions>
    </Dialog>
  );
};

export default GamePathDialog;
