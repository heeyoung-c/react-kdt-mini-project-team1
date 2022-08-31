import React, { useState } from 'react';

import Button from '@mui/material/Button';

import { Fragment } from 'react';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { AiOutlineMenu } from 'react-icons/ai';

import { useGetPersonQuery } from '~/api/customApi';
export default function BasicMenu() {
  const { data: person, isLoading, isError } = useGetPersonQuery();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  if (isLoading) {
    return <div>로딩 중...</div>;
  }
  if (isError || !person) {
    return <div>오류 발생</div>;
  }
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
            width: 250,
            height: 100,
            justifyContent: 'center',
            fontSize: 15,
          }}
        >
          {person.username}
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            width: 250,
            height: 100,
            justifyContent: 'center',
            fontSize: 15,
          }}
        >
          {person.email}
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            width: 250,
            height: 100,
            justifyContent: 'center',
            fontSize: 15,
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </Fragment>
  );
}
