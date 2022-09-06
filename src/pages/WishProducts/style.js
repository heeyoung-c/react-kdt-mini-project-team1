import styled from 'styled-components';

export const Title = styled.div`
  text-align: center;
  font-family: 'NotoSansBold';
  font-size: ${({ theme }) => theme.fontSizes.title};
  color: ${({ theme }) => theme.palette.primary};
`;
