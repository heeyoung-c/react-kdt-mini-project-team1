import React from 'react';
import * as S from './style';
function UserCard() {
  return (
    <S.Container>
      <S.Card>
        <h1>김준태 님의 정보를 바탕으로 분석한</h1>
        <br />
        <h1>현재 신청 가능 대출</h1>
      </S.Card>
    </S.Container>
  );
}

export default UserCard;
