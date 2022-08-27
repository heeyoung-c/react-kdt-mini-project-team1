import React, { useState } from 'react';
import data from './data';
import Card from '~/components/ui/Card';

const AllProducts = () => {
  const [products] = useState(data);

  return (
    <div>
      {products.map((product, i) => {
        const { supporterName, productName, productContent, supporterAmount } =
          product;

        return (
          <Card
            key={i}
            title={productName}
            supporter={supporterName}
            // content={productContent}
            amount={supporterAmount
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          />
        );
      })}
    </div>
  );
};

export default AllProducts;