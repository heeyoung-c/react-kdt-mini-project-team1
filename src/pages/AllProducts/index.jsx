import React, { useEffect, useState } from 'react';
import * as S from './style';
import data from './data';
import Card from '~/components/ui/Card';
import SearchBar from '~/components/ui/SearchBar';
import Form from 'react-bootstrap/Form';

const AllProducts = () => {
  const [products, setProducts] = useState(data);
  const [Selected, setSelected] = useState('');
  const handleSelect = e => {
    setSelected(e.target.value);
  };

  useEffect(() => {
    if (Selected && Selected === '이름순') {
      let copy = [...products];
      copy.sort((a, b) => {
        if (a.productName < b.productName) {
          return -1;
        } else if (a.grade > b.grade) {
          return 1;
        } else {
          return 0;
        }
      });
      setProducts(copy);
    } else if (Selected && Selected === '한도순') {
      let copy = [...products];
      copy.sort((a, b) => b.supporterAmount - a.supporterAmount);
      setProducts(copy);
    }
  }, [Selected]);

  return (
    <div>
      <S.Div>
        <S.TitleDiv>
          <S.Title>대출 검색</S.Title>
          <S.SelectDiv>
            <Form.Select size='sm' onChange={handleSelect}>
              <option>이름순</option>
              <option>한도순</option>
            </Form.Select>
          </S.SelectDiv>
          <S.FlexGrow />
        </S.TitleDiv>
      </S.Div>

      <SearchBar />

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
