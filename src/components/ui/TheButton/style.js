import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export const TheButton = styled(Button)`
  color: ${({ theme }) => theme.palette.white};
  background-color: ${({ theme }) => theme.palette.primary};
  ${({ theme }) => theme.ButtonSizes};
  font-size: ${({ theme }) => theme.fontSizes.buttonText};
  border: none;
`;
