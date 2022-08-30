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
  const [sortSelected, setSortSelected] = useState(null);
  const [conditionSelected, setConditionSelected] = useState(null);
  const [defaultOption, setDefaultOption] = useState(true);
  const handleSortSelect = e => {
    setSortSelected(e.target.value);
  };
  const handleConditionSelect = e => {
    setConditionSelected(e.target.value);
  };
  const { keyword } = useSelector(state => {
    return state;
  });
  const { data } = useGetSearchProductsQuery({
    title: conditionSelected === '내용' ? 'CONTENT' : 'TITLE',
    keyword,
  });

  useEffect(() => {
    if (sortSelected && sortSelected === '이름순') {
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
    } else if (sortSelected && sortSelected === '한도순') {
      let copy = [...products];
      copy.sort((a, b) => b.supporterAmount - a.supporterAmount);
      setProducts(copy);
      setDefaultOption(false);
    }
  }, [sortSelected]);

  useEffect(() => {
    keyword && console.log(data);
  }, [keyword]);

  return (
    <div>
      <S.Div>
        <S.TitleDiv>
          <S.Title>대출 검색</S.Title>
          <S.FlexGrow />
          <S.SelectDiv>
            <Form.Select size='sm' onChange={handleSortSelect}>
              {defaultOption && <option>정렬</option>}
              <option>이름순</option>
              <option>한도순</option>
            </Form.Select>
          </S.SelectDiv>

          <S.SelectDiv>
            <Form.Select size='sm' onChange={handleConditionSelect}>
              <option>제목</option>
              <option>내용</option>
            </Form.Select>
          </S.SelectDiv>
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
