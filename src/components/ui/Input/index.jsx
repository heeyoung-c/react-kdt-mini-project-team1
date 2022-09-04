import { useReducer } from 'react';
import * as S from './style';
import { validationFunc } from '../../../utils/validator';

//액션 타입
const CHANGE = 'CHANGE';
const BLUR = 'BLUR';

//리듀서
const inputReducer = (state, action) => {
  switch (action.type) {
    case CHANGE:
      return {
        ...state,
        value: action.payload,
        isValid: validationFunc(action.payload, action.validators),
      };

    case BLUR:
      return {
        ...state,
        isBlur: true,
      };
  }
};

const Input = ({
  type,
  placeholder,
  name,
  labelName,
  errorMessage,
  validators,
  setUserInput,
  setFormState,
}) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: '',
    isValid: false,
    isBlur: false,
  });

  const onChangeHandler = e => {
    dispatch({
      type: CHANGE,
      payload: e.currentTarget.value,
      validators,
    });

    const { name, value } = e.currentTarget;
    setUserInput(prev => ({ ...prev, [name]: value }));

    setFormState(prev => ({
      ...prev,
      [name]: validationFunc(value, validators),
    }));
  };

  const onBlurHandler = () => {
    dispatch({
      type: BLUR,
    });
  };
  return (
    <S.Container>
      <S.Label>{labelName}</S.Label>
      <S.Input
        type={type}
        placeholder={placeholder}
        name={name}
        value={inputState.value}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
      />
      {!inputState.isValid && inputState.isBlur && (
        <S.Message isValid={inputState.isValid}>{errorMessage}</S.Message>
      )}
      {inputState.isValid && inputState.isBlur && (
        <S.Message isValid={inputState.isValid}>
          올바르게 입력하셨습니다
        </S.Message>
      )}
    </S.Container>
  );
};

export default Input;
