import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const TheFooter = styled.footer`
  ${({ theme }) => theme.common.flexAround};

  position: fixed;
  width: 100%;
  height: 8rem;
  bottom: 0;
  background-color: ${({ theme }) => theme.palette.white};
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  text-decoration: none;
  font-family: 'NotoSansBold';
  font-size: ${({ theme }) => theme.fontSizes.buttonText};
`

export const CustomLink = styled(Link)`
  color: ${({ theme }) => theme.palette.primary};
  text-decoration: none;
`
