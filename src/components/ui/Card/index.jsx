import React from 'react';
import * as S from './style';
import Button from '../TheButton';

const Card = ({ title, supporter, amount }) => {
  return (
    <S.Container>
      <S.Card>
        <S.CardTop>
          <div>
            <S.Title>{title}</S.Title>
            <S.SubTitle>{supporter}</S.SubTitle>
          </div>
        </S.CardTop>
        <S.CardBottom>
          <S.FlexGlow />
          <S.AmoutDiv>
            <S.AmoutTitle>한도</S.AmoutTitle> {amount} 원
          </S.AmoutDiv>
        </S.CardBottom>
        <S.ButtonDiv>
          <S.FlexGlow />
          <Button buttonName={'신청'} />
        </S.ButtonDiv>
      </S.Card>
    </S.Container>
  );
};

export default Card;
