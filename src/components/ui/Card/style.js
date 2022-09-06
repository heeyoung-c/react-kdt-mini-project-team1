import styled from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => theme.common.flexColumnStart};
  font-family: 'NotoSansBold';
`;

export const Card = styled.div`
  position: relative;
  width: 80%;
  margin-top: 2rem;
  margin-bottom: 6rem;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  font-size: ${({ theme }) => theme.fontSizes.title};
  border-radius: 0.6rem;
  background-color: ${({ theme, supporterRegion }) =>
    supporterRegion === '서울'
      ? theme.palette.seoul
      : supporterRegion === '경기'
      ? theme.palette.gyeonggi
      : supporterRegion === '인천'
      ? theme.palette.incheon
      : theme.palette.white};
`;

export const CardRegion = styled.div`
  position: absolute;
  top: 0rem;
  right: 0;
  line-height: 12rem;
  font-size: ${({ theme }) => theme.fontSizes.region};
  color: rgba(255, 255, 255, 0.6);
`;

export const CardTop = styled.div`
  ${({ theme }) => theme.common.flexSpaceBetWeen};
  margin: 1rem 1rem 0;
`;

export const CartTopInner = styled.div`
  z-index: 1;
`;

export const CardBottom = styled.div`
  ${({ theme }) => theme.common.flexSpaceBetWeen};
  margin-bottom: 1rem;
  padding-right: 1rem;
`;

export const FlexGrow = styled.div`
  flex-grow: 1;
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.title};
`;

export const SubTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.subtitle};
  color: ${({ theme }) => theme.palette.gray};
`;

export const AmountTitle = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.subtitle};
  color: ${({ theme }) => theme.palette.gray};
`;

export const AmountDiv = styled.div`
  z-index: 1;
  margin-top: 2rem;
`;

export const ButtonDiv = styled.div`
  ${({ theme }) => theme.common.flexSpaceBetWeen};
  margin-bottom: 1rem;
  padding-right: 1rem;
`;

export const Heart = styled.div`
  z-index: 1;
  color: ${({ theme, bookmark }) =>
    bookmark ? theme.palette.red : theme.palette.black};
`;

export const AddCart = styled.div`
  z-index: 1;
`;
