import { styled } from '@material-ui/styles';
import {
  borders,
  compose,
  display,
  flexbox,
  palette,
  positions,
  shadows,
  sizing,
  spacing,
  typography,
} from '@material-ui/system';
import React from 'react';

import { overflow } from './styleFunctions';

const AsComponent = ({ as: Component = 'div', ...props }) => (
  <Component {...props} />
);

const Box = styled(AsComponent)(
  compose(
    borders,
    display,
    flexbox,
    overflow,
    palette,
    positions,
    shadows,
    sizing,
    spacing,
    typography,
  ),
);

export default Box;
