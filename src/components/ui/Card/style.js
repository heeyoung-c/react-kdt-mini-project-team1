import styled from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => theme.common.flexColumnStart};
  font-family: 'NotoSansBold';
`;

export const Card = styled.div`
  width: 80%;
  margin-bottom: 8rem;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  font-size: ${({ theme }) => theme.fontSizes.title};
  border-radius: 0.6rem;
  background-color: ${({ theme }) => theme.palette.white};
`;

export const CardTop = styled.div`
  ${({ theme }) => theme.common.flexSpaceBetWeen};
  margin: 1rem 1rem 0;
`;

export const CardBottom = styled.div`
  ${({ theme }) => theme.common.flexSpaceBetWeen};
  color: ${({ theme }) => theme.palette.primary};
  margin-bottom: 1rem;
  padding-right: 1rem;
`;

export const FlexGlow = styled.div`
  flex-glow: 1;
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.title};
`;

export const SubTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.subtitle};
  color: ${({ theme }) => theme.palette.gray};
`;

export const BtnDiv = styled.div`
  ${({ theme }) => theme.common.flexCenter};
`;
