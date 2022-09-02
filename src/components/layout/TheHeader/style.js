import styled from 'styled-components';

export const TheHeader = styled.header`
  ${({ theme }) => theme.common.flexEnd}
  height: 4rem;
  font-size: ${({ theme }) => theme.fontSizes.title};
`;

export const ArrowBack = styled.div`
  position: absolute;
  left: 1rem;
`;

export const CartLength = styled.div`
  position: absolute;
  top: 0.8rem;
  right: 5.5rem;
  ${({ theme }) => theme.common.flexCenter};
  width: 1.5rem;
  height: 1.5rem;
  background-color: ${({ theme }) => theme.palette.red};
  color: ${({ theme }) => theme.palette.white};
  font-size: ${({ theme }) => theme.fontSizes.smallParagraph};
  border-radius: 1rem;
`;
