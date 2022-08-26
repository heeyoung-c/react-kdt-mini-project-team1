import React from 'react';
import * as S from './style';

const TheFooter = () => {
  return (
    <S.TheFooter>
      <S.CustomLink to='/custom-products'>맞춤형 상품</S.CustomLink>
      <S.CustomLink to='/all-products'>금융 상품</S.CustomLink>
      <S.CustomLink to='/wish-products'>찜해둔 상품</S.CustomLink>
    </S.TheFooter>
  );
};

export default TheFooter;
