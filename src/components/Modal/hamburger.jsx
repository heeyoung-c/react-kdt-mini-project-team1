import React, { useState } from 'react';
import * as S from './style';
import Button from '@mui/material/Button';

import { Fragment } from 'react';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

// import { AiOutlineMenu } from 'react-icons/ai';

import { useGetPersonQuery } from '~/api/customApi';

// hamburder
import { AiOutlineMenu } from 'react-icons/ai';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

export default function BasicMenu() {
  const { data: person, isLoading, isError } = useGetPersonQuery();
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logoutHandler = () => {
    removeCookie('accessToken', { path: '/' });
    navigate('/entry');
  };

  if (isLoading) {
    return (
      <S.TheHeader>
        <AiOutlineMenu
          color='black'
          size={15}
          style={{ width: 64, position: 'relative', top: 3 }}
        />
      </S.TheHeader>
    );
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
        <AiOutlineMenu size={15} color='black' />
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
          onClick={logoutHandler}
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
