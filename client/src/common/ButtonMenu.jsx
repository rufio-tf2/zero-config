import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import RootRef from '@material-ui/core/RootRef';
import React, { useRef, useState } from 'react';

import { ArrowDropDownIcon, Button } from '../common';
import { uniqueId } from './util';

const ButtonMenu = ({
  icon: Icon,
  id = uniqueId('ButtonMenu-'),
  children,
  label,
  ...triggerProps
}) => {
  const [open, setOpen] = useState(false);
  const menuEl = useRef(null);

  return (
    <>
      <RootRef rootRef={menuEl}>
        {label ? (
          <Button
            {...triggerProps}
            aria-haspopup="true"
            aria-owns={open ? id : null}
            onClick={() => setOpen(true)}
          >
            {label}
            {Icon ? <Icon /> : <ArrowDropDownIcon />}
          </Button>
        ) : (
          <IconButton
            {...triggerProps}
            aria-haspopup="true"
            aria-owns={open ? id : null}
            onClick={() => setOpen(true)}
          >
            <Icon />
          </IconButton>
        )}
      </RootRef>
      <Menu
        anchorEl={menuEl.current}
        id={id}
        onClose={() => setOpen(false)}
        open={open}
      >
        {React.Children.map(children, child => ({
          ...child,
          props: {
            ...child.props,
            onClick: () => {
              if (child.props.onClick) child.props.onClick();
              setOpen(false);
            },
          },
        }))}
      </Menu>
    </>
  );
};

ButtonMenu.Item = MenuItem;

export default ButtonMenu;
