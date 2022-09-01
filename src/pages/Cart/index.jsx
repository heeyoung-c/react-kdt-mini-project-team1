import React from 'react';
import Card from '~/components/ui/Card';
import { useGetCartsProductsQuery } from '~/api/productsApi';

const Cart = () => {
  const {
    data: cartsProducts,
    isLoading,
    isError,
  } = useGetCartsProductsQuery();
  if (isLoading) {
    return <div>로딩 중...</div>;
  }
  if (isError || !cartsProducts) {
    return <div>오류 발생</div>;
  }
  console.log(cartsProducts);

  // 카트 목록이 있는 경우를, cartsProducts 첫번째 아이템에 id 값이 있는지로 판별
  if (cartsProducts[0].id) {
    return (
      <>
        {cartsProducts.map(product => {
          const { id, supporterName, productName, supporterAmount } = product;

          return (
            <Card
              key={id}
              title={productName}
              supporter={supporterName}
              amount={supporterAmount
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              bookmark={false}
              id={id}
              renderType='Cart'
            />
          );
        })}
      </>
    );
  } else {
    return <p>찜 목록이 없습니다</p>;
  }
};

export default Cart;
