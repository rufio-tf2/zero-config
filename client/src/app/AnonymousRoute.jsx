import { Redirect } from '@reach/router';
import React from 'react';

import { useSetup } from '../common';
import AnonymousLayout from './AnonymousLayout';

const AnonymousRoute = ({
  component: Component,
  layout: Layout = AnonymousLayout,
  ...props
}) => {
  const { hasValidSetup } = useSetup();

  if (hasValidSetup) {
    return <Redirect from="" noThrow to="/" />;
  }

  return (
    <Layout>
      <Component {...props} />
    </Layout>
  );
};

export default AnonymousRoute;
