const MIN_LENGTH = 'MIN_LENGTH';
const MAX_LENGTH = 'MAX_LENGTH';
const EMAIL = 'EMAIL';

//enum 가능
const emailRule =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

export const validators = {
  MIN_LENGTH: value => ({ type: MIN_LENGTH, value }),
  MAX_LENGTH: value => ({ type: MAX_LENGTH, value }),
  EMAIL: () => ({ type: EMAIL }),
};

export const validationFunc = (inputValue, validators) => {
  let isValid = true;

  validators.forEach(validator => {
    switch (validator.type) {
      case MIN_LENGTH:
        isValid = isValid && inputValue.trim().length >= validator.value;
        break;

      case MAX_LENGTH:
        isValid = isValid && inputValue.trim().length <= validator.value;
        break;

      case EMAIL:
        isValid = isValid && emailRule.test(inputValue);
        break;
    }
  });

  return isValid;
};
