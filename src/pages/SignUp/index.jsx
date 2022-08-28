import { useState } from 'react';
import Input from '../../components/ui/Input';
import { validators } from '../../components/ui/Input/validator';
import Button from '../../components/ui/TheButton';
import * as S from './style';

const SignUp = () => {
  const [userInput, setUserInput] = useState({ email: '', password: '' });

  const onClickHandler = () => {
    console.log(userInput);
  };
  return (
    <S.Form>
      <S.Title>회원가입</S.Title>
      <Input
        type='text'
        placeholder='이메일을 입력해주세요'
        name='email'
        labelName='이메일'
        errorMessage='이메일 양식을 확인해주세요'
        validators={[validators.EMAIL()]}
        setUserInput={setUserInput}
      />
      <Input
        type='password'
        placeholder='비밀번호를 입력해주세요'
        name='password'
        labelName='비밀번호'
        errorMessage='비밀번호는 8~15자로 입력해주세요'
        validators={[validators.MIN_LENGTH(8), validators.MAX_LENGTH(15)]}
        setUserInput={setUserInput}
      />
      <Button buttonName='가입' onClick={onClickHandler} />
    </S.Form>
  );
};

export default SignUp;
