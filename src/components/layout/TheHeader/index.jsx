import React from 'react';
import * as S from './style';
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineMenu,
} from 'react-icons/ai';

const TheHeader = () => {
  return (
    <S.TheHeader>
      {AiOutlineSearch()}
      {AiOutlineShoppingCart()}
      {AiOutlineMenu()}
    </S.TheHeader>
  );
};

export default TheHeader;
