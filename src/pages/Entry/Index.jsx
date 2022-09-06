import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './style';

const Entry = () => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.Inner>
        <S.Title>안녕하세요</S.Title>
        <S.SubTitle>
          소상공인을 위한 간편한 금융상품 신청 서비스 입니다
        </S.SubTitle>
        <S.Content>
          <S.P>로그인</S.P>혹은
          <S.P>회원가입</S.P>후, 지금 바로 서비스를 이용해보세요
        </S.Content>
        <S.Button onClick={() => navigate('/sign-in')}>로그인</S.Button>
        <S.Button onClick={() => navigate('/sign-up')}>회원가입</S.Button>
      </S.Inner>
    </S.Container>
  );
};

export default Entry;
