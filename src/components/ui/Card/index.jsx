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
          <S.BtnDiv>
            <Button buttonName={'신청'} />
          </S.BtnDiv>
        </S.CardTop>
        <S.CardBottom>
          <S.FlexGlow />
          <div>
            <S.SubTitle>한도</S.SubTitle> {amount} 원
          </div>
        </S.CardBottom>
      </S.Card>
    </S.Container>
  );
};

export default Card;
