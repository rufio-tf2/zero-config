import Snackbar from '@material-ui/core/Snackbar';
import React from 'react';

import { useToast } from '../common';

const ToastMessages = ({ autoHideDuration = 5000 }) => {
  const { hideMessage, message } = useToast();
  const isOpen = !!message;
  const handleClose = (event, reason) => {
    if (reason !== 'clickaway') {
      hideMessage();
    }
  };

  return (
    <Snackbar
      anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
      autoHideDuration={autoHideDuration}
      ContentProps={{ 'aria-describedby': 'toast-message' }}
      key={message}
      message={<span id="toast-message">{message}</span>}
      onClose={handleClose}
      open={isOpen}
    />
  );
};

export default ToastMessages;
