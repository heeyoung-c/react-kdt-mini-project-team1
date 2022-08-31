import React from 'react';
import Card from '~/components/ui/Card';
import { useGetWishProductsQuery } from '~/api/productsApi';

const WishProducts = () => {
  const { data: wishProducts, isLoading, isError } = useGetWishProductsQuery();
  if (isLoading) {
    return <div>로딩 중...</div>;
  }
  if (isError || !wishProducts) {
    return <div>오류 발생</div>;
  }
  console.log(wishProducts);
  return (
    <>
      {wishProducts.map(product => {
        const { supporterName, productName, supporterAmount, id } = product;

        return (
          <Card
            key={id}
            title={productName}
            supporter={supporterName}
            amount={supporterAmount
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          />
        );
      })}
    </>
  );
};
export default WishProducts;
