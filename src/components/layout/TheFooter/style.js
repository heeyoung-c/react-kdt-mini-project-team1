import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TheFooter = styled.footer`
  ${({ theme }) => theme.common.flexAround};
  position: fixed;
  width: 100%;
  height: 8rem;
  bottom: 0;
  border-radius: 2rem 2rem 0 0;
  background-color: ${({ theme }) => theme.palette.white};
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  text-decoration: none;
  font-family: 'NotoSansBold';
  font-size: ${({ theme }) => theme.fontSizes.buttonText};
`;

export const CustomLink = styled(Link)`
  color: ${({ theme }) => theme.palette.primary};
  text-decoration: none;
  opacity: 0.5;
  &.click {
    color: ${({ theme }) => theme.palette.primary};
    opacity: 1;
  }
`;

export const LinkContent = styled.div`
  ${({ theme }) => theme.common.flexCenter};
`;
