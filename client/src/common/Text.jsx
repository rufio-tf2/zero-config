import MuiTypography from '@material-ui/core/Typography';
import { styled } from '@material-ui/styles';
import {
  borders,
  compose,
  display,
  flexbox,
  palette,
  spacing,
  typography,
} from '@material-ui/system';

import withComponentAs from './withComponentAs';

const AsMuiTypography = withComponentAs('p')(MuiTypography);

const Text = styled(AsMuiTypography)(
  compose(
    borders,
    display,
    flexbox,
    palette,
    spacing,
    typography,
  ),
);

export default Text;
