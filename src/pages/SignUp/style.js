import styled from 'styled-components';

export const Form = styled.form`
  ${({ theme }) => theme.common.flexColumnStart};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.palette.primary};
  font-size: ${({ theme }) => theme.fontSizes.title};
`;
