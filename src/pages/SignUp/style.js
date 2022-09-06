import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
export const Container = styled.form`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  height: 100vh;
  ${({ theme }) => theme.common.flexCenter};
`;

export const Inner = styled.div`
  ${({ theme }) => theme.common.flexColumnStart};
  width: 100%;
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.palette.primary};
  font-size: ${({ theme }) => theme.fontSizes.title};
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.inputText};
  color: ${({ theme }) => theme.palette.primary};
  display: block;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const ItemContainer = styled.div`
  width: 80%;
`;
export const Region = styled.button`
  margin: 1rem 1rem 2rem 0rem;
  padding: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  border-radius: 0.6rem;
  border: none;
  color: ${({ theme }) => theme.palette.primary};
  background-color: ${({ theme }) => theme.palette.white};
  font-size: ${({ theme }) => theme.fontSizes.buttonText};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  width: 30%;

  &:hover {
    background-color: ${({ theme }) => theme.palette.primaryLight};
  }
  &:focus {
    background-color: ${({ theme }) => theme.palette.primary};
    color: ${({ theme }) => theme.palette.white};
  }
`;

export const Range = styled(Form.Range)`
  color: red;
`;
