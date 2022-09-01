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
