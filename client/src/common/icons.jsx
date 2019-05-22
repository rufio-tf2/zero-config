import AccountBalanceWallet from '@material-ui/icons/AccountBalanceWallet';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import Attachment from '@material-ui/icons/Attachment';
import Close from '@material-ui/icons/Close';
import CloudUpload from '@material-ui/icons/CloudUpload';
import Delete from '@material-ui/icons/Delete';
import GetApp from '@material-ui/icons/GetApp';
import GridOn from '@material-ui/icons/GridOn';
import GroupAdd from '@material-ui/icons/GroupAdd';
import History from '@material-ui/icons/History';
import MoreVert from '@material-ui/icons/MoreVert';
import Payment from '@material-ui/icons/Payment';
import People from '@material-ui/icons/People';
import RestoreFromTrash from '@material-ui/icons/RestoreFromTrash';
import Undo from '@material-ui/icons/Undo';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { styled } from '@material-ui/styles';
import { compose, spacing } from '@material-ui/system';

const makeIcon = BaseIcon => styled(BaseIcon)(compose(spacing));

const AddMembersIcon = makeIcon(GroupAdd);
const ArrowDropDownIcon = makeIcon(ArrowDropDown);
const AttachmentIcon = makeIcon(Attachment);
const ChecksIcon = makeIcon(Payment);
const CloseIcon = makeIcon(Close);
const DeleteIcon = makeIcon(Delete);
const DownloadIcon = makeIcon(GetApp);
const HistoryIcon = makeIcon(History);
const LogoIcon = makeIcon(AccountBalanceWallet);
const MembersIcon = makeIcon(People);
const MoreMenuIcon = makeIcon(MoreVert);
const ReportsIcon = makeIcon(GridOn);
const RestoreIcon = makeIcon(RestoreFromTrash);
const UndoIcon = makeIcon(Undo);
const UploadIcon = makeIcon(CloudUpload);
const VisibilityOffIcon = makeIcon(VisibilityOff);
const VisibilityOnIcon = makeIcon(Visibility);

export {
  AddMembersIcon,
  ArrowDropDownIcon,
  AttachmentIcon,
  ChecksIcon,
  CloseIcon,
  DeleteIcon,
  DownloadIcon,
  HistoryIcon,
  LogoIcon,
  MembersIcon,
  MoreMenuIcon,
  ReportsIcon,
  RestoreIcon,
  UndoIcon,
  UploadIcon,
  VisibilityOffIcon,
  VisibilityOnIcon,
};
