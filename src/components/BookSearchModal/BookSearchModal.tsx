import React, { useRef } from 'react';
import styled from 'styled-components';

import { AiOutlineEllipsis } from 'react-icons/ai';
import NonContentModal from '../UI/NonContentModal/NonContentModal';
import BookSearchList from './BookSearchList';
import BookSearchListItem from './BookSearchListItem';

import { flex, screenReaderTextCSS } from '../../styles/shared';
import useSearchAladinBook from '../../hooks/aladin/useAladinBookInfiniteQuery';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { AladinBookSearchItem } from '../../types';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import Loading from '../UI/Loading/Loading';

interface BookSearchModalProps {
  query: string;
  onClick: (book: AladinBookSearchItem) => void;
  onClose: () => void;
}

function BookSearchModal({ query, onClick, onClose }: BookSearchModalProps) {
  if (query.length === 0) {
    return null;
  }
  const bookSearchModalCardRef = useRef<HTMLUListElement>(null);
  const {
    data: searchPages,
    isLoading: isSearchLoading,
    fetchNextPage,
    hasNextPage,
    isNoResult,
  } = useSearchAladinBook({
    query,
    parameter: 'ItemSearch.aspx',
  });
  const { setTarget } = useIntersectionObserver({
    onIntersect: ([{ isIntersecting }]) => {
      if (isIntersecting) fetchNextPage();
    },
  });

  useOnClickOutside(bookSearchModalCardRef, onClose);
  console.log(hasNextPage);

  return (
    <BookSearchModalCard ref={bookSearchModalCardRef}>
      <BookSearchModlaTitle>인터파크 도서 검색 결과 모달</BookSearchModlaTitle>
      {isSearchLoading && !isNoResult && (
        <NoneContentText>
          <Loading />
        </NoneContentText>
      )}
      {isNoResult && <NoneContentText>조회 결과없습니다</NoneContentText>}
      <BookSearchList>
        {searchPages?.map((page) =>
          page?.item?.map((book) => (
            <BookSearchListItem
              key={book.isbn13}
              book={book}
              onClick={onClick}
            />
          )),
        )}
      </BookSearchList>
      {!isSearchLoading && hasNextPage && (
        <EllipsisIconContainer ref={setTarget}>
          <EllipsisIcon />
        </EllipsisIconContainer>
      )}
    </BookSearchModalCard>
  );
}

const BookSearchModalCard = styled(NonContentModal)`
  width: 970px;
  height: 655px;
  background-color: var(--white);

  && {
    overflow-y: auto;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    ::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
  }
`;

const BookSearchModlaTitle = styled.h2`
  ${screenReaderTextCSS}
`;

const NoneContentText = styled.div`
  ${flex};
  width: 100%;
  height: 655px;
  text-align: center;
`;

const EllipsisIconContainer = styled.span`
  display: block;
  width: fit-content;
  margin: 0 auto;
  font-size: 40px;
  color: #9f9f9f;
`;

const EllipsisIcon = styled(AiOutlineEllipsis)`
  font-weight: 900;
`;

export default BookSearchModal;
