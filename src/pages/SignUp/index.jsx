import { useState } from 'react';
import Input from '../../components/ui/Input';
import { validators } from '../../utils/validator';
import TheButton from '../../components/ui/TheButton';
import * as S from './style';
import { useSignUpMutation } from '../../api/authApi';
import { useNavigate } from 'react-router-dom';

const regions = ['서울', '경기', '인천'];

const SignUp = () => {
  // HOOKS
  const [signUp] = useSignUpMutation();
  const [userInput, setUserInput] = useState({
    email: '',
    password: '',
    username: '',
    region: '',
    hopeAmount: 0,
  });
  const navigate = useNavigate();

  // HANDLER
  const selectHandler = e => {
    e.preventDefault();

    const { name, value } = e.currentTarget;
    setUserInput(prev => ({ ...prev, [name]: value }));
  };

  const onChangeHandler = e => {
    const { name, value } = e.currentTarget;
    setUserInput(prev => ({ ...prev, [name]: value }));
  };
  const signUpHandler = async () => {
    //폼 유효성 검사 로직 통과하면 signUp 실행
    const response = await signUp({ data: userInput });

    console.log(response);

    if (!response.data.data.username) {
      const errorMessage = response.data.data;
      const signUpResult = response.data.responseMessage;
      alert(signUpResult);
      alert(errorMessage);
    } else {
      const username = response.data.data.username;

      alert(`${username}님 회원가입을 축하합니다`);

      navigate('/sign-in');
    }
  };

  return (
    <S.Container>
      <S.Inner>
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
        <Input
          type='text'
          placeholder='사용자명을 입력해주세요'
          name='username'
          labelName='사용자명'
          errorMessage='사용자명은 5~12자로 입력해주세요'
          validators={[validators.MIN_LENGTH(5), validators.MAX_LENGTH(12)]}
          setUserInput={setUserInput}
        />

        <S.ItemContainer>
          <S.Label>지역을 선택해주세요</S.Label>
          {regions.map(region => (
            <S.Region
              onClick={selectHandler}
              key={region}
              name='region'
              value={region}
            >
              {region}
            </S.Region>
          ))}
        </S.ItemContainer>
        <S.ItemContainer>
          <S.Label>희망 금액을 선택해주세요</S.Label>
          <S.Range
            name='hopeAmount'
            onChange={onChangeHandler}
            min='0'
            max='10000000'
            value={userInput.hopeAmount}
            step='1000000'
          />
          <div>
            {userInput.hopeAmount
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            원 이상
          </div>
        </S.ItemContainer>
        <TheButton
          buttonName='회원가입'
          onClick={signUpHandler}
          formbutton='true'
        />
      </S.Inner>
    </S.Container>
  );
};

export default SignUp;
