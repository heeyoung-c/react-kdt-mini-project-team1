import React from 'react';
import Card from '~/components/ui/Card';
import { useGetCartsProductsQuery } from '~/api/productsApi';
import Loading from '../../components/ui/Loading';
import * as S from './style';
import { useOrderCartProductMutation } from '~/api/productsApi';
import EmptyProducts from '../../components/ui/EmptyProducts';

const Cart = () => {
  const {
    data: cartsProducts,
    isLoading,
    isError,
  } = useGetCartsProductsQuery();
  const [orderCartProduct] = useOrderCartProductMutation();

  if (isLoading) {
    return <Loading />;
  }
  if (isError || !cartsProducts) {
    return <div>오류 발생</div>;
  }

  // 카트 목록이 있는 경우를, cartsProducts 첫번째 아이템에 id 값이 있는지로 판별
  if (cartsProducts[0].id) {
    return (
      <>
        {cartsProducts.map(product => {
          const {
            id,
            cartProductId,
            supporterName,
            productName,
            supporterAmount,
          } = product;

          return (
            <Card
              key={id}
              title={productName}
              supporter={supporterName}
              amount={supporterAmount
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              bookmark={false}
              id={cartProductId}
              renderType='Cart'
            />
          );
        })}
        <S.Container>
          <S.Button onClick={orderCartProduct}>신청 하기</S.Button>
        </S.Container>
      </>
    );
  } else {
    return <EmptyProducts message={'장바구니에 담은 상품이 없습니다.'} />;
  }
};

export default Cart;
