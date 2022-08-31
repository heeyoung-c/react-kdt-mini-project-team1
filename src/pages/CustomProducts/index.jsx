import React from 'react';
// custom
import { useGetProductsQuery } from '../../api/customApi';
// Card
import Card from '../../components/ui/Card';
// UserCard
import UserCard from '../../components/ui/UserCard';
const CustomProducts = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery();

  if (isLoading) {
    return <div>로딩 중...</div>;
  }
  if (isError || !products) {
    return <div>오류 발생</div>;
  }

  return (
    <div>
      <UserCard />
      {products.map((post, i) => (
        <Card
          key={post.id}
          title={post.productName}
          supporter={post.supporterName}
          amount={post.supporterAmount
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        />
      ))}
    </div>
  );
};

export default CustomProducts;
