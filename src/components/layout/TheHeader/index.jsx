import React from 'react';
import * as S from './style';

import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import { BiArrowBack } from 'react-icons/bi';
import { useLocation, useNavigate } from 'react-router-dom';

import BasicMenu from '../../Modal/hamburger';
const TheHeader = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <S.TheHeader>
      {/* 현재 페이지의 위치가 /cart인 경우에만 뒤로가기 버튼 보이게 하기 */}
      {pathname === '/cart' ? (
        <S.ArrowBack onClick={() => navigate('/')}>{BiArrowBack()}</S.ArrowBack>
      ) : null}
      <div onClick={() => navigate('/cart')}>{AiOutlineShoppingCart()}</div>

      <BasicMenu />
    </S.TheHeader>
  );
};

export default TheHeader;
