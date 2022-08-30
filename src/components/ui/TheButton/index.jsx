import React from 'react';
import * as S from './style';

const TheButton = ({ buttonName, onClick, formbutton }) => {
  return (
    <S.TheButton onClick={onClick} formbutton={formbutton}>
      {buttonName}
    </S.TheButton>
  );
};

export default TheButton;
