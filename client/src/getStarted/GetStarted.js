import React from 'react';

import { Button, setHasSetup, useStore } from '../common';

const GetStarted = () => {
  const { dispatch } = useStore();
  return (
    <Button
      onClick={() => {
        dispatch(setHasSetup(true));
      }}
    >
      GetStarted
    </Button>
  );
};

export default GetStarted;
