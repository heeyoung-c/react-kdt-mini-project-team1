import React, { useState } from 'react';
import * as S from './style';
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from 'react-icons/ai';

const Card = ({ title, supporter, amount }) => {
  const [isHearted, setIsHearted] = useState(false);

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
          <S.FlexGrow />
          <S.AmountDiv>
            <S.AmountTitle>한도</S.AmountTitle> {amount} 원
          </S.AmountDiv>
        </S.CardBottom>
        <S.ButtonDiv>
          <S.FlexGrow />
          <S.Heart
            onClick={() => setIsHearted(!isHearted)}
            isHearted={isHearted}
          >
            {isHearted ? AiFillHeart() : AiOutlineHeart()}
          </S.Heart>
          <div>{AiOutlineShoppingCart()}</div>
        </S.ButtonDiv>
      </S.Card>
    </S.Container>
  );
};

export default Card;
