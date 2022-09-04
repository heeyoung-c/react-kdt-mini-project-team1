import styled from 'styled-components';

export const Div = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  font-family: 'NotoSansBold';
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
  width: 6rem;
`;

export const FlexGrow = styled.div`
  flex-grow: 1;
`;

export const NotIcon = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  font-size: 3rem;
  margin-top: 40%;
`;

export const NotMsg = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  font-size: ${({ theme }) => theme.fontSizes.bigParagraph};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-top: 1rem;
`;

export const ColorMsg = styled.span`
  color: #ff7f50;
`;
