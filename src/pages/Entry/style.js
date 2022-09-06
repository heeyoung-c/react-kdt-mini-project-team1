import styled from 'styled-components';

export const Container = styled.form`
  font-family: 'NotoSansRegular';
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  height: 100vh;
  ${({ theme }) => theme.common.flexCenter};
`;

export const Inner = styled.div`
  ${({ theme }) => theme.common.flexColumnStart};
  width: 100%;
`;

export const Title = styled.div`
  margin-bottom: 2rem;
  font-family: 'NotoSansMedium';
  font-size: ${({ theme }) => theme.fontSizes.entryTitle};
`;

export const SubTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.subtitle};
`;

export const Content = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  width: 100%;
  margin-bottom: 2rem;
  font-size: ${({ theme }) => theme.fontSizes.subtitle};
`;

export const P = styled.div`
  margin: 0 0.2rem;
  color: ${({ theme }) => theme.palette.primary};
`;

export const ItemContainer = styled.div`
  width: 80%;
`;

export const Button = styled.button`
  margin: 1rem 1rem 2rem 0rem;
  padding: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  border-radius: 0.6rem;
  border: none;
  color: ${({ theme }) => theme.palette.primary};
  background-color: ${({ theme }) => theme.palette.white};
  font-size: ${({ theme }) => theme.fontSizes.buttonText};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  width: 30%;

  &:hover {
    background-color: ${({ theme }) => theme.palette.primaryLight};
  }
  &:focus {
    background-color: ${({ theme }) => theme.palette.primary};
    color: ${({ theme }) => theme.palette.white};
  }
`;
