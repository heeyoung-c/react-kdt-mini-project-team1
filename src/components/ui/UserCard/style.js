import styled from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => theme.common.flexCenter}
`;

export const Card = styled.div`
  width: 80%;
  margin-bottom: 8rem;
  padding: 1rem;
  margin-top: 5rem;
`;

export const H1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.black};
  color: ${({ theme }) => theme.palette.gray};
  ${({ theme }) => theme.common.flexCenter};
`;

export const P = styled.div`
  color: ${({ theme }) => theme.palette.success};
`;
