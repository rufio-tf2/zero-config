import { Redirect } from '@reach/router';
import React from 'react';

import { useSetup } from '../common';
import AuthenticatedLayout from './AuthenticatedLayout';

const AuthenticatedRoute = ({
  component: Component,
  layout: Layout = AuthenticatedLayout,
  ...props
}) => {
  const { hasValidSetup } = useSetup();

  if (!hasValidSetup) {
    return <Redirect from="" noThrow to="/start" />;
  }

  return (
    <Layout>
      <Component {...props} />
    </Layout>
  );
};

export default AuthenticatedRoute;
