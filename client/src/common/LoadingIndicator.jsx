import CircularProgress from '@material-ui/core/CircularProgress';
import { styled } from '@material-ui/styles';
import { compose, palette, sizing, spacing } from '@material-ui/system';

const LoadingIndicator = styled(CircularProgress)(
  compose(
    palette,
    sizing,
    spacing,
  ),
);

export default LoadingIndicator;
