import MuiTextField from '@material-ui/core/TextField';
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

const TextField = styled(MuiTextField)(
  compose(
    borders,
    display,
    flexbox,
    palette,
    spacing,
    typography,
  ),
);

export default TextField;
