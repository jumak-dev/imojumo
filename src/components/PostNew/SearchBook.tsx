import styled from 'styled-components';
import useInputs from '../../hooks/useInputs';
import { colFlexCenter } from '../../styles/shared';
import { ButtonBox } from '../UI/Button/Button';
import { Card } from '../UI/Card/Card';
import Input from '../UI/Input/Input';
import BookSearchModal from '../BookSearchModal/BookSearchModal';
import useModal from '../../hooks/useModal';

interface SearchBookProps {
  onSearch: (bookTitle: string) => void;
}

function SearchBook({ onSearch }: SearchBookProps) {
  const [{ bookTitle }, onChange] = useInputs({ bookTitle: '' });
  const [showModal, handleOpenModal, handleCloseModal] = useModal();

  const handleSearchClick = () => {
    onSearch(bookTitle);
    handleOpenModal();
  };
  return (
    <SerachBookContainer>
      <SearchBookTitle>토론 도서 선택하기</SearchBookTitle>
      <SearchBookInputContainer>
        <BookTitleInput
          value={bookTitle}
          name="bookTitle"
          placeholder="도서명을..."
          onChange={onChange}
        />
        <BookSearchButton
          type="button"
          buttonType="buttonRight"
          buttonColor="white"
          buttonSize="sm"
          onClick={handleSearchClick}
        >
          찾기
        </BookSearchButton>
      </SearchBookInputContainer>
      <BookSearchModal showModal={showModal} onClose={handleCloseModal} />
    </SerachBookContainer>
  );
}

const SerachBookContainer = styled.section`
  ${Card}
  ${colFlexCenter}

  align-items: center;
  gap: 16px;
  width: 100%;
  height: 171px;
  padding: 32px;
`;

const SearchBookTitle = styled.h4`
  width: 100%;
  text-align: center;
  font-weight: 700;
  font-size: var(--font-size-xl);
  line-height: 29px;
  letter-spacing: -0.02em;
  color: #1d1d1b;
`;

const SearchBookInputContainer = styled.div`
  display: flex;
  width: 100%;
`;

const BookTitleInput = styled(Input)`
  flex: 1 1 0;
  border-radius: 5px 0 0 5px;
  border-right: 0;
`;

const BookSearchButton = styled(ButtonBox)`
  width: 74px;
  height: 50px;
  color: var(--black);
`;

export default SearchBook;
