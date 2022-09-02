import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as S from './style';
import Card from '~/components/ui/Card';
import SearchBar from '~/components/ui/SearchBar';
import Form from 'react-bootstrap/Form';
import { useGetAllProductsQuery } from '~/api/productsApi';
import Loading from '../../components/ui/Loading';
import { sortFunc } from './sort';

const AllProducts = () => {
  const [sortSelected, setSortSelected] = useState(null);
  const {
    data: products,
    isLoading,
    isError,
  } = useGetAllProductsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      data: sortFunc(sortSelected, data),
    }),
  });
  const [conditionSelected, setConditionSelected] = useState(null);
  const handleSortSelect = e => {
    setSortSelected(e.target.value);
  };
  const handleConditionSelect = e => {
    setConditionSelected(e.target.value);
  };
  const { keyword, searchProducts } = useSelector(state => {
    return state;
  });

  if (isLoading) {
    return <Loading />;
  }
  if (isError || !products) {
    return <div>오류 발생</div>;
  }

  return (
    <div>
      <S.Div>
        <S.TitleDiv>
          <S.Title>대출 검색</S.Title>
          <S.FlexGrow />
          <S.SelectDiv>
            <Form.Select size='sm' onChange={handleSortSelect}>
              <option>정렬</option>
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

      <SearchBar keyword={keyword} conditionSelected={conditionSelected} />

      {searchProducts === null ? (
        products.map(product => {
          const {
            id,
            bookmarkProduct,
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
              bookmark={bookmarkProduct}
              id={id}
            />
          );
        })
      ) : searchProducts.length === 0 ? (
        <>
          <S.NotIcon className='material-icons'>error_outline</S.NotIcon>
          <S.NotMsg>
            <S.ColorMsg>{`"${keyword}"`}</S.ColorMsg>
            <span>에 대한 검색결과가 없습니다.</span>
          </S.NotMsg>
        </>
      ) : (
        searchProducts.map(product => {
          const {
            id,
            bookmarkProduct,
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
              bookmark={bookmarkProduct}
              id={id}
            />
          );
        })
      )}
    </div>
  );
};

export default AllProducts;
