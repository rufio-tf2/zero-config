import { Redirect } from '@reach/router';
import React from 'react';

import { useStore } from '../common';
import AnonymousLayout from './AnonymousLayout';

const AnonymousRoute = ({
  component: Component,
  layout: Layout = AnonymousLayout,
  ...props
}) => {
  const { state } = useStore();

  if (state.hasSetup) {
    return <Redirect from="" noThrow to="/" />;
  }

  return (
    <Layout>
      <Component {...props} />
    </Layout>
  );
};

export default AnonymousRoute;
