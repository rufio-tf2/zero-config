import React from 'react';

import { Button, setSetup, useStore } from '../common';

const GetStarted = () => {
  const { dispatch } = useStore();
  const setTF2Path = () => {
    dispatch(
      setSetup({
        tf2Path: 'this/is/a/path',
      }),
    );
  };

  return <Button onClick={setTF2Path}>GetStarted</Button>;
};

export default GetStarted;
