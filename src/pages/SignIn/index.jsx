import { useEffect, useState } from 'react';
import TheButton from '../../components/ui/TheButton';
import * as S from './style';
import { useSignInMutation } from '../../api/authApi';
import { useCookies } from 'react-cookie';

const SignIn = () => {
  const [signIn, { data: token, isLoading }] = useSignInMutation();

  const [userInput, setUserInput] = useState({
    email: '',
    password: '',
  });

  const [cookies, setCookie, removeCookie] = useCookies();

  useEffect(() => {
    setCookie('accessToken', token, { path: '/' });
  }, [token]);

  // HANDLER

  const onChangeHandler = e => {
    console.log(e.currentTarget.value);
    const { name, value } = e.currentTarget;
    setUserInput(prev => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = async () => {
    // const res = await signIn({ data: userInput });
    // console.log(res);

    signIn({ data: userInput });

    console.log(userInput);
  };

  //JSX

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
        onClick={onSubmitHandler}
        formbutton='true'
      />
    </S.FormContainer>
  );
};

export default SignIn;
