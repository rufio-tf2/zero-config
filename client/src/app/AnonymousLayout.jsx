import React, { Suspense } from 'react';

import { Box, GlobalNav, LoadingIndicator } from '../common';

const AnonymousLayout = ({ children }) => (
  <>
    <GlobalNav />
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

export default AnonymousLayout;
