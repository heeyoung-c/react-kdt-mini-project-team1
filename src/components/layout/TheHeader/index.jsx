import React from 'react';
import * as S from './style';
import moment from 'moment';
import 'moment/locale/ko';

import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiArrowBack } from 'react-icons/bi';
import { useLocation, useNavigate } from 'react-router-dom';

import BasicMenu from '../../Modal';
import { useGetCartsProductsQuery } from '../../../api/productsApi';

const TheHeader = () => {
  const nowTime = moment().format('HH:mm');
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { data: cartProducts, isLoading, isError } = useGetCartsProductsQuery();

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
          {/* cartProducts의 타입이 'string인 경우는 장바구니에 상품이 없는 경우 이기 때문에 이와 같이 코드를 작성하였습니다*/}
          {typeof cartProducts === 'string' ? null : (
            <S.CartLength>{cartProducts && cartProducts.length}</S.CartLength>
          )}
          <BasicMenu />
        </S.Header_2>
      </S.TheHeader>
    </>
  );
};

export default TheHeader;
