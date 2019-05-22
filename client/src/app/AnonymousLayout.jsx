import React, { Suspense } from 'react';

import { Box, GlobalNav, LoadingIndicator } from '../common';

const AnonymousLayout = ({ children }) => (
  <Box display="flex" flexDirection="column" height="100vh">
    <GlobalNav title="Zero Config" />
    <Suspense
      fallback={
        <Box as="main" display="flex" justifyContent="center" my={10}>
          <LoadingIndicator />
        </Box>
      }
    >
      <Box flex="1 1 auto">{children}</Box>
    </Suspense>
  </Box>
);

export default AnonymousLayout;
