import React from 'react';
import * as S from './style';
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineDelete,
} from 'react-icons/ai';
import { useAddBookMarkMutation } from '~/api/productsApi';
import { useDeleteBookMarkMutation } from '~/api/productsApi';
import { useAddCartsProductsMutation } from '~/api/productsApi';
import { useDeleteCartProductMutation } from '~/api/productsApi';

const Card = ({
  id,
  title,
  supporter,
  amount,
  bookmark,
  supporterRegion,
  renderType,
}) => {
  const [addBookMark] = useAddBookMarkMutation();
  const [deleteBookMark] = useDeleteBookMarkMutation();
  const [addCartsProducts] = useAddCartsProductsMutation();
  const [deleteCartProduct] = useDeleteCartProductMutation();
  let res = {};

  const bookmarkHandler = ({ bookmark, id }) => {
    if (bookmark) {
      deleteBookMark(id);
    } else {
      addBookMark({
        productId: id,
      });
    }
  };

  const addCartProductsClickHandler = async id => {
    (res = await addCartsProducts({
      productId: id,
    })),
      console.log(res); // 이 코드가 없으면 아래 코드 동작 X
    if (res.data) {
      alert('장바구니에 추가되었습니다');
    } else {
      alert('이미 등록된 상품입니다');
    }
  };

  return (
    <S.Container>
      <S.Card supporterRegion={supporterRegion}>
        <S.CardRegion>{supporterRegion}</S.CardRegion>
        <S.CardTop>
          <S.CartTopInner>
            <S.Title>{title}</S.Title>
            <S.SubTitle>{supporter}</S.SubTitle>
          </S.CartTopInner>
        </S.CardTop>
        <S.CardBottom>
          <S.FlexGrow />
          <S.AmountDiv>
            <S.AmountTitle>한도</S.AmountTitle> {amount} 원
          </S.AmountDiv>
        </S.CardBottom>
        <S.ButtonDiv>
          <S.FlexGrow />
          {renderType === 'Cart' ? (
            <div
              onClick={() => {
                deleteCartProduct(id);
              }}
            >
              {AiOutlineDelete()}
            </div>
          ) : (
            <>
              <S.Heart
                onClick={e => {
                  e.stopPropagation();
                  bookmarkHandler({
                    bookmark,
                    id,
                  });
                }}
                bookmark={bookmark}
              >
                {bookmark ? AiFillHeart() : AiOutlineHeart()}
              </S.Heart>
              <S.AddCart
                onClick={() => {
                  addCartProductsClickHandler(id);
                }}
              >
                {AiOutlineShoppingCart()}
              </S.AddCart>
            </>
          )}
        </S.ButtonDiv>
      </S.Card>
    </S.Container>
  );
};

export default Card;
