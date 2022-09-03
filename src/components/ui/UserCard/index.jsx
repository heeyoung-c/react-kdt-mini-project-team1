import React from 'react';
import * as S from './style';
import { useGetPersonQuery } from '~/api/customApi';
// Modal
import BasicMenu from '../../Modal';
const UserCard = () => {
  const { data: person, isLoading, isError } = useGetPersonQuery();
  if (isLoading) {
    // return <div>로딩 중...</div>;
    return (
      <>
        <BasicMenu />
      </>
    );
  }
  if (isError || !person) {
    return <div>오류 발생</div>;
  }
  return (
    <S.Container>
      <S.Card>
        <S.H1>
          <S.P>{person.username}님</S.P>의 정보를 바탕으로 분석한
        </S.H1>
        <br />
        <S.H1>현재 신청 가능 금융상품</S.H1>
      </S.Card>
    </S.Container>
  );
};

export default UserCard;
