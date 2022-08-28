import * as S from './style';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const SearchBar = () => {
  return (
    <S.Div>
      <S.InputBox>
        <InputGroup className='mb-3'>
          <Form.Control
            placeholder='원하시는 상품을 검색해주세요.'
            aria-label="Recipient's username"
            aria-describedby='basic-addon2'
          />
          <Button variant='outline-secondary' id='button-addon2'>
            검색
          </Button>
        </InputGroup>
      </S.InputBox>
    </S.Div>
  );
};

export default SearchBar;
