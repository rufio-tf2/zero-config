import MuiButton from '@material-ui/core/Button';
import { styled } from '@material-ui/styles';
import { compose, spacing } from '@material-ui/system';
import React from 'react';

import LoadingIndicator from './LoadingIndicator';
import usePastDelay from './usePastDelay';

const StyledButton = styled(MuiButton)(compose(spacing));

const Button = ({ children, loading, size = 'medium', ...props }) => {
  const pastDelay = usePastDelay(loading, 200);
  const indicatorSize = size === 'large' ? 26 : size === 'medium' ? 24 : 22;

  return (
    <StyledButton {...props} size={size}>
      {pastDelay ? (
        <LoadingIndicator color="inherit" size={indicatorSize} />
      ) : (
        children
      )}
    </StyledButton>
  );
};

export default Button;
