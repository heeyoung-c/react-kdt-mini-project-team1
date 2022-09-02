import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './style';

const Entry = () => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.Inner>
        <S.Title>서비스 페이지입니다</S.Title>
        <S.Button onClick={() => navigate('/sign-in')}>로그인</S.Button>
        <S.Button onClick={() => navigate('/sign-up')}>회원가입</S.Button>
      </S.Inner>
    </S.Container>
  );
};

export default Entry;
