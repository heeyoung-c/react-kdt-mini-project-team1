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

const Card = ({ id, title, supporter, amount, bookmark, renderType }) => {
  const [addBookMark] = useAddBookMarkMutation();
  const [deleteBookMark] = useDeleteBookMarkMutation();
  const [addCartsProducts] = useAddCartsProductsMutation();
  const [deleteCartProduct] = useDeleteCartProductMutation();

  const bookmarkHandler = ({ bookmark, id }) => {
    if (bookmark) {
      deleteBookMark(id);
    } else {
      addBookMark({
        productId: id,
      });
    }
  };

  return (
    <S.Container>
      <S.Card>
        <S.CardTop>
          <div>
            <S.Title>{title}</S.Title>
            <S.SubTitle>{supporter}</S.SubTitle>
          </div>
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
              <div
                onClick={() => {
                  addCartsProducts({
                    productId: id,
                  }),
                    alert('장바구니에 추가되었습니다');
                }}
              >
                {AiOutlineShoppingCart()}
              </div>
            </>
          )}
        </S.ButtonDiv>
      </S.Card>
    </S.Container>
  );
};

export default Card;
