import styled from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  font-family: 'NotoSansRegular';
`;

export const Card = styled.div`
  width: 80%;
  margin-top: 2rem;
  padding: 1rem;
`;

export const H1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.subtitle};
  color: ${({ theme }) => theme.palette.black};
  ${({ theme }) => theme.common.flexCenter};
`;

export const P = styled.div`
  color: ${({ theme }) => theme.palette.primary};
`;
