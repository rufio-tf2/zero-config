import React, { useCallback, useState } from 'react';

import { useGameData } from '../common';
import { GamePathDialog } from '../gamePath';
import ToastMessages from './ToastMessages';

const Global = () => {
  const { hasValidSetup } = useGameData(); // eslint-disable-line no-unused-vars
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleCloseDialog = useCallback(() => {
    setDialogOpen(false);
  }, []);

  return (
    <>
      <GamePathDialog onClose={handleCloseDialog} open={isDialogOpen} />
      <ToastMessages />
    </>
  );
};

export default Global;
