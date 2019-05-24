import MuiGrid from '@material-ui/core/Grid';
import { styled } from '@material-ui/styles';
import {
  compose,
  display,
  flexbox,
  sizing,
  spacing,
} from '@material-ui/system';

const Grid = styled(MuiGrid)(
  compose(
    display,
    flexbox,
    sizing,
    spacing,
  ),
);

export default Grid;
