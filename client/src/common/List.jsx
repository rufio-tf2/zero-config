import MuiList from '@material-ui/core/List';
import MuiListItem from '@material-ui/core/ListItem';
import MuiListItemText from '@material-ui/core/ListItemText';
import MuiListSubheader from '@material-ui/core/ListSubheader';
import { styled } from '@material-ui/styles';
import { compose, display, flexbox, spacing } from '@material-ui/system';

const List = MuiList;
List.Item = styled(MuiListItem)(compose(spacing));
List.ItemText = MuiListItemText;
List.Subheader = styled(MuiListSubheader)(
  compose(
    display,
    flexbox,
  ),
);

export default List;
