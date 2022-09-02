import React from 'react';
import * as S from './style';
import moment from 'moment';
import 'moment/locale/ko';

import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import { BiArrowBack } from 'react-icons/bi';
import { useLocation, useNavigate } from 'react-router-dom';

import BasicMenu from '../../Modal/hamburger';
const TheHeader = () => {
  const nowTime = moment().format('HH:mm');
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <S.TheHeader>
        <S.Header_1>
          <S.Time>{nowTime}</S.Time>
          <S.FlexGrow></S.FlexGrow>
          <S.Signal className='material-icons'>signal_cellular_alt</S.Signal>
          <S.Wifi className='material-icons'>wifi</S.Wifi>
          <S.Battery className='material-icons'>battery_6_bar</S.Battery>
        </S.Header_1>

        <S.Header_2>
          {/* 현재 페이지의 위치가 /cart인 경우에만 뒤로가기 버튼 보이게 하기 */}
          {pathname === '/cart' ? (
            <S.ArrowBack onClick={() => navigate('/')}>
              {BiArrowBack()}
            </S.ArrowBack>
          ) : null}
          <div onClick={() => navigate('/cart')}>{AiOutlineShoppingCart()}</div>

          <BasicMenu />
        </S.Header_2>
      </S.TheHeader>
    </>
  );
};

export default TheHeader;
