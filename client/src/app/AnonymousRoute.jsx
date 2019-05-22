import { Redirect } from '@reach/router';
import React from 'react';

import { useSession } from '../common';
import AnonymousLayout from './AnonymousLayout';

const AnonymousRoute = ({
  component: Component,
  layout: Layout = AnonymousLayout,
  ...props
}) => {
  const { session } = useSession();

  if (session) {
    return <Redirect from="" noThrow to="/" />;
  }

  return (
    <Layout>
      <Component {...props} />
    </Layout>
  );
};

export default AnonymousRoute;
