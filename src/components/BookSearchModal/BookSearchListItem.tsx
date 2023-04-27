import React from 'react';
import styled from 'styled-components';

import { Book } from '../../types';
import Button from '../UI/Button/Button';
import { AlignCenter, ColFlex, truncateTextCSS } from '../../styles/shared';

interface BookSearchListItemProps {
  book: Book;
  onClick: (book: Book) => void;
}

function BookSearchListItem({ book, onClick }: BookSearchListItemProps) {
  const handleClick = () => {
    onClick(book);
  };

  return (
    <BookItemContainer>
      <BookImage src={book.image} alt={`${book.title} 표지 이미지`} />
      <BookInfoContainer>
        <BookInfos>
          <BookTitle>{book.title}</BookTitle>
          <BookInfo>{book.author}</BookInfo>
          <BookInfo>{book.publisher}</BookInfo>
        </BookInfos>
        <BookDescription>{book.description}</BookDescription>
      </BookInfoContainer>
      <Button
        type="button"
        buttonType="button"
        buttonColor="pink"
        buttonSize="xs"
        onClick={handleClick}
      >
        선택
      </Button>
    </BookItemContainer>
  );
}

const BookItemContainer = styled.li`
  ${AlignCenter}
  height: 132px;
  width: 100%;
  gap: 20px;
  padding: 24px;

  & + & {
    border-top: 1px solid var(--color-borderbottom-color);
  }
`;

const BookImage = styled.img`
  width: 70px;
  height: 80px;
`;

const BookInfoContainer = styled.div`
  ${ColFlex}
  flex: 1 1 0;
`;

const BookInfos = styled.div`
  ${AlignCenter}
  gap: 12px;
`;

const BookTitle = styled.h2`
  ${AlignCenter}
  font-weight: 700;
  font-size: var(font-size-l);
  line-height: 24px;
  letter-spacing: -0.02em;
`;

const BookInfo = styled.p`
  ${AlignCenter}
  font-size: var(font-size-sm);
  line-height: 16px;
  letter-spacing: -0.02em;
`;

const BookDescription = styled.p`
  ${truncateTextCSS}
  font-size: var(font-size-m);
  line-height: 19px;
  letter-spacing: -0.02em;
  height: 38px;
  -webkit-line-clamp: 2;
`;

export default BookSearchListItem;
