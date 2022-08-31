import React from 'react';
import * as S from './style';
import { useGetPersonQuery } from '~/api/customApi';
function UserCard() {
  const { data: person, isLoading, isError } = useGetPersonQuery();
  if (isLoading) {
    return <div>로딩 중...</div>;
  }
  if (isError || !person) {
    return <div>오류 발생</div>;
  }
  return (
    <S.Container>
      <S.Card>
        <h1>{person.username}님의 정보를 바탕으로 분석한</h1>
        <br />
        <h1>현재 신청 가능 대출</h1>
      </S.Card>
    </S.Container>
  );
}

export default UserCard;
