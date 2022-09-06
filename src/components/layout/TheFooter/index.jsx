import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import * as S from './style';

const TheFooter = () => {
  const [btnClick, setBtnClick] = useState([null, 'click', null]);

  return (
    <S.TheFooter>
      <S.CustomLink
        className={btnClick[0]}
        to='/custom-products'
        onClick={() => {
          setBtnClick(['click', null, null]);
        }}
      >
        <S.LinkContent className='material-icons'>assignment_ind</S.LinkContent>
        맞춤형 상품
      </S.CustomLink>
      <S.CustomLink
        className={btnClick[1]}
        to='/'
        onClick={() => {
          setBtnClick([null, 'click', null]);
        }}
      >
        <S.LinkContent className='material-icons'>local_offer</S.LinkContent>
        금융 상품
      </S.CustomLink>
      <S.CustomLink
        className={btnClick[2]}
        to='/wish-products'
        onClick={() => {
          setBtnClick([null, null, 'click']);
        }}
      >
        <S.LinkContent className='material-icons'>loyalty </S.LinkContent>찜해둔
        상품
      </S.CustomLink>
    </S.TheFooter>
  );
};

export default TheFooter;
