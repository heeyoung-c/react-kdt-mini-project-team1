import styled from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  font-family: 'NotoSansBold';
  margin-bottom: 4rem;
`;

export const Button = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  width: 30rem;
  height: 6rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: ${({ theme }) => theme.palette.primary};
  color: ${({ theme }) => theme.palette.white};
  font-size: ${({ theme }) => theme.fontSizes.title};
  &:hover {
    background-color: ${({ theme }) => theme.palette.primaryDark};
    cursor: pointer;
  }
`;
