import { Redirect } from '@reach/router';
import React from 'react';

import { hasValidSetup, useStore } from '../common';
import AuthenticatedLayout from './AuthenticatedLayout';

const AuthenticatedRoute = ({
  component: Component,
  layout: Layout = AuthenticatedLayout,
  ...props
}) => {
  const { state } = useStore();

  if (!hasValidSetup(state.setup)) {
    return <Redirect from="" noThrow to="/start" />;
  }

  return (
    <Layout>
      <Component {...props} />
    </Layout>
  );
};

export default AuthenticatedRoute;
