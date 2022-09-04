import { useState } from 'react';

const useForm = () => {
  const [formState, setFormState] = useState({
    email: false,
    password: false,
    username: false,
    region: false,
    hopeAmount: false,
  });

  const { email, password, username, region, hopeAmount } = formState;

  const isFormValid = !!(email && password && username && region && hopeAmount);

  return [setFormState, isFormValid];
};

export default useForm;
