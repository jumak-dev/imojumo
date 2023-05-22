import { ErrorBoundary } from 'react-error-boundary';
import styled from 'styled-components';
import React from 'react';
import useInputs from '../../hooks/useInputs';
import { colFlexCenter } from '../../styles/shared';
import { ButtonBox } from '../UI/Button/Button';
import { Card } from '../UI/Card/Card';
import Input from '../UI/Input/Input';
import BookSearchModal from '../BookSearchModal/BookSearchModal';
import useModal from '../../hooks/useModal';
import ErrorFallback from '../ErrorFallback/indes';
import { AladinBookSearchItem } from '../../types';

interface DiscussionSearchBookProps {
  onSearch: (book: AladinBookSearchItem) => void;
  isSearchDisabled?: boolean;
}

function DiscussionSearchBook({
  onSearch,
  isSearchDisabled = false,
}: DiscussionSearchBookProps) {
  const [{ bookTitle }, onChange, _, setValue] = useInputs({ bookTitle: '' });
  const [showModal, handleOpenModal, handleCloseModal] = useModal();

  const handleSearchClick = () => {
    if (bookTitle.length === 0) {
      return;
    }
    handleOpenModal();
  };

  const handleOnKeyPress = (evnet: React.KeyboardEvent<HTMLInputElement>) => {
    if (evnet.key === 'Enter') {
      handleSearchClick();
    }
  };

  const handleSearch = (book: AladinBookSearchItem) => {
    setValue('bookTitle', book.title);
    onSearch(book);
    handleCloseModal();
  };

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <SerachBookContainer>
        <DiscussionSearchBookTitle>
          토론 도서 선택하기
        </DiscussionSearchBookTitle>
        <DiscussionSearchBookInputContainer>
          <BookTitleInput
            value={bookTitle}
            name="bookTitle"
            placeholder="도서명을..."
            onChange={onChange}
            onKeyPress={handleOnKeyPress}
            disabled={isSearchDisabled}
          />
          <BookSearchButton
            type="button"
            buttonType="buttonRight"
            buttonColor="white"
            buttonSize="sm"
            onClick={handleSearchClick}
            disabled={isSearchDisabled}
          >
            찾기
          </BookSearchButton>
        </DiscussionSearchBookInputContainer>
        {showModal && (
          <BookSearchModal
            query={bookTitle}
            onClose={handleCloseModal}
            onClick={handleSearch}
          />
        )}
      </SerachBookContainer>
    </ErrorBoundary>
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

const DiscussionSearchBookTitle = styled.h4`
  width: 100%;
  text-align: center;
  font-weight: 700;
  font-size: var(--font-size-xl);
  line-height: 29px;
  letter-spacing: -0.02em;
  color: #1d1d1b;
`;

const DiscussionSearchBookInputContainer = styled.div`
  display: flex;
  width: 100%;
`;

const BookTitleInput = styled(Input)`
  flex: 1 1 0;
  border-radius: 5px 0 0 5px;
  border-right: 0;

  &:disabled {
    cursor: not-allowed;
  }
`;

const BookSearchButton = styled(ButtonBox)`
  width: 74px;
  height: 50px;
  color: var(--black);

  &:disabled {
    pointer-events: none;
    cursor: not-allowed;
    filter: brightness(0.97);
    color: var(--color-placeholder);
  }
`;

export default DiscussionSearchBook;
