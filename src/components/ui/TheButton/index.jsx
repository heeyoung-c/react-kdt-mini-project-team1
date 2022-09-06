import React from 'react';
import * as S from './style';

const TheButton = ({ buttonName, onClick, formbutton, disabled }) => {
  return (
    <S.TheButton onClick={onClick} formbutton={formbutton} disabled={disabled}>
      {buttonName}
    </S.TheButton>
  );
};

export default TheButton;
