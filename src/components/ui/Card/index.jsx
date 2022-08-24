import React from 'react';
import * as S from './style';

const Card = ({ title, content, amount }) => {
  return (
    <S.Container>
      <S.Card>
        <S.CardTop>{title}</S.CardTop>
        <S.CardMiddle>{content}</S.CardMiddle>
        <S.CardBottom>{amount}</S.CardBottom>
      </S.Card>
    </S.Container>
  );
};

export default Card;
