import React from 'react';
import * as S from './style';

const TheButton = ({ buttonName, onClick }) => {
  return <S.TheButton onClick={onClick}>{buttonName}</S.TheButton>;
};

export default TheButton;
