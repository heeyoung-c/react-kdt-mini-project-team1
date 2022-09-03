import React from 'react';
import Card from '~/components/ui/Card';
import { useGetWishProductsQuery } from '~/api/productsApi';
import Loading from '../../components/ui/Loading';
import EmptyProducts from '../../components/ui/EmptyProducts';

const WishProducts = () => {
  const { data: wishProducts, isLoading, isError } = useGetWishProductsQuery();
  if (isLoading) {
    return <Loading />;
  }
  if (isError || !wishProducts) {
    return <div>오류 발생</div>;
  }
  // 찜 목록이 있는 경우를, wishProducts의 첫번째 아이템에 id 값이 있는지로 판별
  if (wishProducts[0].id) {
    return (
      <>
        {wishProducts.map(product => {
          const {
            id,
            supporterName,
            productName,
            supporterAmount,
            supporterRegion,
          } = product;

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
              supporterRegion={supporterRegion}
            />
          );
        })}
      </>
    );
  } else {
    return <EmptyProducts message={'하트한 내역이 없습니다.'} />;
  }
};
export default WishProducts;
