import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import Attachment from '@material-ui/icons/Attachment';
import Close from '@material-ui/icons/Close';
import CloudUpload from '@material-ui/icons/CloudUpload';
import Delete from '@material-ui/icons/Delete';
import Done from '@material-ui/icons/Done';
import DonutLarge from '@material-ui/icons/DonutLarge';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import GetApp from '@material-ui/icons/GetApp';
import GroupAdd from '@material-ui/icons/GroupAdd';
import MoreVert from '@material-ui/icons/MoreVert';
import RestoreFromTrash from '@material-ui/icons/RestoreFromTrash';
import Undo from '@material-ui/icons/Undo';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { styled } from '@material-ui/styles';
import { compose, spacing } from '@material-ui/system';

const makeIcon = BaseIcon => {
  const StyledIcon = styled(BaseIcon)(compose(spacing));

  StyledIcon.displayName = BaseIcon.displayName;

  return StyledIcon;
};

const AddMembersIcon = makeIcon(GroupAdd);
const ArrowDropDownIcon = makeIcon(ArrowDropDown);
const AttachmentIcon = makeIcon(Attachment);
const CloseIcon = makeIcon(Close);
const DeleteIcon = makeIcon(Delete);
const DoneIcon = makeIcon(Done);
const DonutLargeIcon = makeIcon(DonutLarge);
const ExpandLessIcon = makeIcon(ExpandLess);
const ExpandMoreIcon = makeIcon(ExpandMore);
const DownloadIcon = makeIcon(GetApp);
const MoreMenuIcon = makeIcon(MoreVert);
const RestoreIcon = makeIcon(RestoreFromTrash);
const UndoIcon = makeIcon(Undo);
const UploadIcon = makeIcon(CloudUpload);
const VisibilityOffIcon = makeIcon(VisibilityOff);
const VisibilityOnIcon = makeIcon(Visibility);

export {
  AddMembersIcon,
  ArrowDropDownIcon,
  AttachmentIcon,
  CloseIcon,
  DeleteIcon,
  DoneIcon,
  DonutLargeIcon,
  DownloadIcon,
  ExpandLessIcon,
  ExpandMoreIcon,
  MoreMenuIcon,
  RestoreIcon,
  UndoIcon,
  UploadIcon,
  VisibilityOffIcon,
  VisibilityOnIcon,
};
