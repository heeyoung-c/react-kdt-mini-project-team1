import React from 'react';
import * as S from './style';
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';

import BasicMenu from '../../Modal/hamburger';
const TheHeader = () => {
  return (
    <S.TheHeader>
      {AiOutlineSearch()}
      {AiOutlineShoppingCart()}
      <BasicMenu />
    </S.TheHeader>
  );
};

export default TheHeader;
