import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Collapse from '@material-ui/core/Collapse';
import React, { useCallback, useState } from 'react';

import {
  DoneIcon,
  DonutLargeIcon,
  ExpandLessIcon,
  ExpandMoreIcon,
  IconButton,
  Text,
} from '../common';

const StatusAvatar = ({ done }) => (
  <Avatar>{done ? <DoneIcon /> : <DonutLargeIcon />}</Avatar>
);

const SetupCard = ({ children, collapseContent, title }) => {
  const [isExpanded, setExpanded] = useState(false);

  const handleExpandClick = useCallback(() => {
    setExpanded(!isExpanded);
  }, [isExpanded, setExpanded]);

  return (
    <Card>
      <CardHeader avatar={StatusAvatar} title={title} />
      <CardContent>{children}</CardContent>
      {collapseContent && (
        <>
          <CardActions disableActionSpacing>
            <IconButton
              aria-expanded={isExpanded}
              aria-label="Show more"
              onClick={handleExpandClick}
            >
              {isExpanded ? <ExpandMoreIcon /> : <ExpandLessIcon />}
            </IconButton>
          </CardActions>
          <Collapse in={isExpanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Text>Look for your TF2 folder...TODO</Text>
            </CardContent>
          </Collapse>
        </>
      )}
    </Card>
  );
};

export default SetupCard;
