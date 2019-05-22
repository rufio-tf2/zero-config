import { Redirect } from '@reach/router';
import React from 'react';

import { hasValidSetup, useStore } from '../common';
import AnonymousLayout from './AnonymousLayout';

const AnonymousRoute = ({
  component: Component,
  layout: Layout = AnonymousLayout,
  ...props
}) => {
  const { state } = useStore();

  if (hasValidSetup(state.setup)) {
    return <Redirect from="" noThrow to="/" />;
  }

  return (
    <Layout>
      <Component {...props} />
    </Layout>
  );
};

export default AnonymousRoute;
