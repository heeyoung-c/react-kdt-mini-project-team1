import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as S from './style';
import data2 from './data';
import Card from '~/components/ui/Card';
import SearchBar from '~/components/ui/SearchBar';
import Form from 'react-bootstrap/Form';
import { useGetSearchProductsQuery } from '~/api/searchApi';

const AllProducts = () => {
  const [products, setProducts] = useState(data2);
  const [Selected, setSelected] = useState('');
  const [defaultOption, setDefaultOption] = useState(true);
  const handleSelect = e => {
    setSelected(e.target.value);
  };
  const { keyword } = useSelector(state => {
    return state;
  });
  const { data } = useGetSearchProductsQuery({
    title: 'TITLE',
    keyword,
  });

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
      setDefaultOption(false);
    } else if (Selected && Selected === '한도순') {
      let copy = [...products];
      copy.sort((a, b) => b.supporterAmount - a.supporterAmount);
      setProducts(copy);
      setDefaultOption(false);
    }
  }, [Selected]);

  useEffect(() => {
    keyword && console.log(data);
  }, [keyword]);

  return (
    <div>
      <S.Div>
        <S.TitleDiv>
          <S.Title>대출 검색</S.Title>
          <S.SelectDiv>
            <Form.Select size='sm' onChange={handleSelect}>
              {defaultOption && <option>정렬 선택</option>}
              <option>이름순</option>
              <option>한도순</option>
            </Form.Select>
          </S.SelectDiv>
          <S.FlexGrow />
        </S.TitleDiv>
      </S.Div>

      <SearchBar />

      {products.map((product, i) => {
        const { supporterName, productName, supporterAmount } = product;

        return (
          <Card
            key={i}
            title={productName}
            supporter={supporterName}
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
