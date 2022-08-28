import * as React from 'react';

import Button from '@mui/material/Button';

import { Fragment } from 'react';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { AiOutlineMenu } from 'react-icons/ai';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <Button
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          padding: 0,
          position: 'relative',
          top: 3,
        }}
      >
        <AiOutlineMenu size={15} />
      </Button>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem
          onClick={handleClose}
          sx={{
            // padding: 2,
            width: 250,
            height: 100,
            justifyContent: 'center',
          }}
        >
          Profile
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            // padding: 2,
            width: 250,
            height: 100,
            justifyContent: 'center',
          }}
        >
          My account
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            // padding: 2,
            width: 250,
            height: 100,
            justifyContent: 'center',
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </Fragment>
  );
}
