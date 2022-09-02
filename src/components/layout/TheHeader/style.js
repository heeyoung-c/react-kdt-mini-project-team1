import { style } from '@mui/system';
import styled from 'styled-components';

export const TheHeader = styled.header`
  font-size: ${({ theme }) => theme.fontSizes.title};
`;

export const Header_1 = styled.header`
  ${({ theme }) => theme.common.flexEnd}
  margin-bottom: 0.3rem
`;

export const Battery = styled.div`
  font-size: 2.1rem;
  transform: rotate(-90deg);
  margin-right: 2.3rem;
`;

export const Wifi = styled.div`
  font-size: 1.8rem;
  margin-right: 0.5rem;
`;

export const Signal = styled.div`
  font-size: 1.8rem;
  margin-right: 0.3rem;
`;

export const Time = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  margin-left: 2.3rem;
`;

export const Header_2 = styled.header`
  ${({ theme }) => theme.common.flexEnd}
  font-size: ${({ theme }) => theme.fontSizes.title};
  width: 96%;
`;

export const ArrowBack = styled.div`
  position: absolute;
  left: 1rem;
`;

export const FlexGrow = styled.div`
  flex-grow: 1;
`;
