import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export const TheButton = styled(Button)`
  color: ${({ theme }) => theme.palette.white};
  background-color: ${({ theme }) => theme.palette.primary};
  ${({ theme, formbutton }) =>
    formbutton ? theme.formButton : theme.normalButton};
  font-size: ${({ theme }) => theme.fontSizes.buttonText};
  border: none;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  &:hover {
    background-color: ${({ theme }) => theme.palette.primaryDark};
  }
  &:disabled {
    background-color: ${({ theme }) => theme.palette.gray};
  }
`;
