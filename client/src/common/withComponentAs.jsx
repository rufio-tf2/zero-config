import React from 'react';

import { getComponentDisplayName } from './util';

const withComponentAs = defaultAs => BaseComponent => {
  const EnhancedComponent = ({ as = defaultAs, ...props }) => (
    <BaseComponent as={as} component={as} {...props} />
  );

  EnhancedComponent.displayName = `withComponentAs(${getComponentDisplayName(
    BaseComponent,
  )})`;

  return EnhancedComponent;
};

export default withComponentAs;
