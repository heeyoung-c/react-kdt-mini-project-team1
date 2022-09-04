import styled from 'styled-components';

export const Title = styled.div`
  text-align: center;
  font-family: 'NotoSansBold';
  font-size: ${({ theme }) => theme.fontSizes.title};
  color: ${({ theme }) => theme.palette.primary};
`;

export const Container = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  font-family: 'NotoSansBold';
  margin-bottom: 10rem;
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
