import MuiDialog from '@material-ui/core/Dialog';
import MuiDialogActions from '@material-ui/core/DialogActions';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogContentText from '@material-ui/core/DialogContentText';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
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

const Dialog = styled(MuiDialog)(
  compose(
    display,
    flexbox,
    spacing,
  ),
);

const DialogActions = styled(MuiDialogActions)(
  compose(
    display,
    flexbox,
    spacing,
  ),
);

const DialogContent = styled(MuiDialogContent)(
  compose(
    display,
    flexbox,
    spacing,
  ),
);

const DialogContentText = styled(MuiDialogContentText)(
  compose(
    borders,
    display,
    flexbox,
    palette,
    spacing,
    typography,
  ),
);

const DialogTitle = styled(MuiDialogTitle)(
  compose(
    display,
    flexbox,
    spacing,
  ),
);

Dialog.Actions = DialogActions;
Dialog.Content = DialogContent;
Dialog.ContentText = DialogContentText;
Dialog.Title = DialogTitle;

export default Dialog;
