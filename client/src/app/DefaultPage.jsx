import React from 'react';

import { Button, useRouter } from '../common';

const DefaultPage = () => {
  const router = useRouter();
  return (
    <div>
      <h4>Default Page</h4>
      <Button onClick={() => console.log('router', router)} variant="contained">
        Log Router
      </Button>
    </div>
  );
};

export default DefaultPage;
