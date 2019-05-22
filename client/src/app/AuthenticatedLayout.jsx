// import { navigate } from '@reach/router';
import React, { Suspense } from 'react';

import { Box, GlobalNav, LoadingIndicator } from '../common';

const AuthenticatedLayout = ({ children }) => {
  return (
    <>
      <GlobalNav title="Zero Config" />
      <Suspense
        fallback={
          <Box as="main" display="flex" justifyContent="center" my={10}>
            <LoadingIndicator />
          </Box>
        }
      >
        {children}
      </Suspense>
    </>
  );
};

export default AuthenticatedLayout;
