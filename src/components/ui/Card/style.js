import styled from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => theme.common.flexColumnStart};
  font-family: 'NotoSansBold';
`;

export const Card = styled.div`
  border: 0.1rem solid black;
  width: 80%;
  margin-bottom: 8rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  font-size: ${({ theme }) => theme.fontSizes.title};
  border-radius: 0.6rem;
  background-color: ${({ theme }) => theme.palette.backGroud};
`;

export const CardTop = styled.div`
  ${({ theme }) => theme.common.flexStart};
  color: ${({ theme }) => theme.palette.black};

  margin: 1rem 1rem 0;
`;

export const CardMiddle = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  color: ${({ theme }) => theme.palette.black};

  margin: 0 4rem;
  border: 0.2rem dashed;
  font-size: 5rem;
`;

export const CardBottom = styled.div`
  ${({ theme }) => theme.common.flexColumnStart};
  color: ${({ theme }) => theme.palette.black};
  margin-bottom: 1rem;
`;
