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
  // 찜 목록이 있는 경우를, wishProducts의 첫번째 아이템에 id 값이 있는지로 판별
  if (wishProducts[0].id) {
    return (
      <>
        {wishProducts.map(product => {
          const { id, supporterName, productName, supporterAmount } = product;

          return (
            <Card
              key={id}
              title={productName}
              supporter={supporterName}
              amount={supporterAmount
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              bookmark={true}
              id={id}
            />
          );
        })}
      </>
    );
  } else {
    return <p>찜 목록이 없습니다</p>;
  }
};
export default WishProducts;
