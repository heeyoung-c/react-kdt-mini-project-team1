import styled from 'styled-components';

export const Div = styled.div`
  ${({ theme }) => theme.common.flexCenter};
`;

export const TitleDiv = styled.div`
  ${({ theme }) => theme.common.flexSpaceBetWeen};
  width: 80%;
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.palette.primary};
  font-size: ${({ theme }) => theme.fontSizes.bigParagraph};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const SelectDiv = styled.div`
  margin-left: 1rem;
  width: 6.5rem;
`;

export const FlexGrow = styled.div`
  flex-grow: 1;
`;
