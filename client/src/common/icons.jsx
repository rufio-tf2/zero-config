import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import Attachment from '@material-ui/icons/Attachment';
import Close from '@material-ui/icons/Close';
import CloudUpload from '@material-ui/icons/CloudUpload';
import Delete from '@material-ui/icons/Delete';
import Done from '@material-ui/icons/Done';
import DonutLarge from '@material-ui/icons/DonutLarge';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import FilterList from '@material-ui/icons/FilterList';
import GetApp from '@material-ui/icons/GetApp';
import GroupAdd from '@material-ui/icons/GroupAdd';
import MoreVert from '@material-ui/icons/MoreVert';
import RestoreFromTrash from '@material-ui/icons/RestoreFromTrash';
import Undo from '@material-ui/icons/Undo';
import VerticalAlignTop from '@material-ui/icons/VerticalAlignTop';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { styled } from '@material-ui/styles';
import { compose, spacing } from '@material-ui/system';

const makeIcon = BaseIcon => {
  const StyledIcon = styled(BaseIcon)(compose(spacing));

  StyledIcon.displayName = BaseIcon.displayName;

  return StyledIcon;
};

export const AddMembersIcon = makeIcon(GroupAdd);
export const ArrowDropDownIcon = makeIcon(ArrowDropDown);
export const AttachmentIcon = makeIcon(Attachment);
export const CloseIcon = makeIcon(Close);
export const DeleteIcon = makeIcon(Delete);
export const DoneIcon = makeIcon(Done);
export const DonutLargeIcon = makeIcon(DonutLarge);
export const ExpandLessIcon = makeIcon(ExpandLess);
export const ExpandMoreIcon = makeIcon(ExpandMore);
export const FilterListIcon = makeIcon(FilterList);
export const DownloadIcon = makeIcon(GetApp);
export const MoreMenuIcon = makeIcon(MoreVert);
export const RestoreIcon = makeIcon(RestoreFromTrash);
export const UndoIcon = makeIcon(Undo);
export const UploadIcon = makeIcon(CloudUpload);
export const VerticalAlignTopIcon = makeIcon(VerticalAlignTop);
export const VisibilityOffIcon = makeIcon(VisibilityOff);
export const VisibilityOnIcon = makeIcon(Visibility);
