import MuiLink from '@material-ui/core/Link';
import { Link as RouterLink } from '@reach/router';
import React from 'react';

const CollisionLink = React.forwardRef((props, ref) => (
  <RouterLink ref={ref} {...props} />
));

function Link({ children, to, ...rest }) {
  return (
    <MuiLink component={CollisionLink} to={to} {...rest}>
      {children}
    </MuiLink>
  );
}

export default Link;
