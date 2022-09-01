import * as S from './style';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeKeyword } from '~/store/slices/keywordSlice';
import { changeSearchProducts } from '~/store/slices/searchSlice';
import { useGetSearchProductsQuery } from '~/api/searchApi';

const SearchBar = ({ keyword, conditionSelected }) => {
  const dispatch = useDispatch();
  const handleChange = event => {
    setVal(event.target.value);
  };
  const [val, setVal] = useState('');
  const { data } = useGetSearchProductsQuery({
    title: conditionSelected === '내용' ? 'CONTENT' : 'TITLE',
    keyword,
  });

  useEffect(() => {
    dispatch(changeKeyword(val));
  }, [val]);

  return (
    <S.Div>
      <S.InputBox>
        <InputGroup className='mb-3'>
          <Form.Control
            onClick={() => {
              setVal('');
              dispatch(changeSearchProducts(null));
            }}
            onChange={handleChange}
            value={val}
            placeholder='원하시는 상품을 검색해주세요.'
            aria-label="Recipient's username"
            aria-describedby='basic-addon2'
          />
          <Button
            onClick={() => {
              dispatch(changeSearchProducts(data));
            }}
            variant='outline-secondary'
            id='button-addon2'
          >
            검색
          </Button>
        </InputGroup>
      </S.InputBox>
    </S.Div>
  );
};

export default SearchBar;
