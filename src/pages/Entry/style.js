import styled from 'styled-components';

export const Container = styled.form`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  height: 100vh;
  border: 2px solid red;
  ${({ theme }) => theme.common.flexCenter};
  /* margin-top: 40vh; */
`;

export const Inner = styled.div`
  ${({ theme }) => theme.common.flexColumnStart};
  border: 2px solid black;
  width: 100%;
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.palette.primary};
  font-size: ${({ theme }) => theme.fontSizes.title};
`;

export const ItemContainer = styled.div`
  width: 80%;
`;

export const Button = styled.button`
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
