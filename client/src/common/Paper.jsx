import MuiPaper from '@material-ui/core/Paper';
import { styled } from '@material-ui/styles';
import {
  compose,
  display,
  flexbox,
  positions,
  sizing,
  spacing,
} from '@material-ui/system';

import withComponentAs from './withComponentAs';

const AsMuiPaper = withComponentAs('div')(MuiPaper);

const Paper = styled(AsMuiPaper)(
  compose(
    display,
    flexbox,
    positions,
    sizing,
    spacing,
  ),
);

export default Paper;
