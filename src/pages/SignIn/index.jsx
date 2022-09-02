import { useState } from 'react';
import TheButton from '../../components/ui/TheButton';
import * as S from './style';
import { useSignInMutation } from '../../api/authApi';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  // HOOKS
  const [signIn, { data, isLoading, isError }] = useSignInMutation();

  const [userInput, setUserInput] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  // HANDLER
  const onChangeHandler = e => {
    const { name, value } = e.currentTarget;
    setUserInput(prev => ({ ...prev, [name]: value }));
  };

  const signInHandler = async () => {
    const response = await signIn({ data: userInput });
    if (response.error) {
      alert('이메일 주소와 비밀번호를 다시 확인해주세요');
      return;
    }
    navigate('/');
  };

  return (
    <S.FormContainer>
      <S.Title>로그인</S.Title>
      <S.ItemContainer>
        <S.Label>이메일</S.Label>
        <S.Input
          type='text'
          placeholder='이메일'
          name='email'
          onChange={onChangeHandler}
        />
      </S.ItemContainer>
      <S.ItemContainer>
        <S.Label>비밀번호</S.Label>
        <S.Input
          type='password'
          placeholder='비밀번호'
          name='password'
          onChange={onChangeHandler}
        />
      </S.ItemContainer>

      <TheButton
        buttonName='로그인'
        onClick={signInHandler}
        formbutton='true'
      />
    </S.FormContainer>
  );
};

export default SignIn;
