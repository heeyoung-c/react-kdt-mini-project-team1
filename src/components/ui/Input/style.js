import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.inputText};
  color: ${({ theme }) => theme.palette.primary};
  display: block;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const Input = styled.input`
  width: 100%;
  margin-bottom: 1rem;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  border-radius: 0.6rem;
  border: none;
  color: ${({ theme }) => theme.palette.black};
  background-color: ${({ theme }) => theme.palette.white};
  font-size: ${({ theme }) => theme.fontSizes.inputText};
`;

export const Message = styled.div`
  color: ${({ theme, isValid }) =>
    isValid ? theme.palette.success : theme.palette.danger};
  font-size: ${({ theme }) => theme.fontSizes.inputErrorMessage};
`;
