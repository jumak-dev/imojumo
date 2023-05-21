import React, { useCallback } from 'react';
import styled from 'styled-components';

import { AladinBookSearchItem } from '../../types';
import Button from '../UI/Button/Button';
import { alignCenter, colFlex, truncateTextCSS } from '../../styles/shared';

interface BookSearchListItemProps {
  book: AladinBookSearchItem;
  onClick: (book: AladinBookSearchItem) => void;
}

function BookSearchListItem({ book, onClick }: BookSearchListItemProps) {
  const getDisplayAuthorText = useCallback(() => {
    const authorList = book.author.split(', ');

    if (authorList.length > 3) {
      return `${authorList.slice(0, 3).join(', ')} 저 외 ${
        authorList.length - 3
      }명`;
    }

    return book.author;
  }, [book.author]);

  const handleClick = () => {
    onClick(book);
  };

  return (
    <BookItemContainer>
      <BookImage src={book.cover} alt={`${book.title} 표지 이미지`} />
      <BookInfoContainer onClick={handleClick}>
        <BookInfoHeader>
          <BookTitle>{book.title}</BookTitle>
          <BookInfos>
            <BookInfo>{getDisplayAuthorText()}</BookInfo>
            <BookInfo>{book.publisher}</BookInfo>
          </BookInfos>
        </BookInfoHeader>
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
  ${alignCenter}
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
  ${colFlex}
  flex: 1 1 0;
  gap: 8px;
  cursor: pointer;
`;

const BookInfoHeader = styled.div`
  ${colFlex}
  gap: 1px;
`;

const BookInfos = styled.div`
  ${alignCenter}
  font-size: var(--font-size-sm);
  gap: 12px;
`;

const BookTitle = styled.h2`
  ${alignCenter}
  ${truncateTextCSS}
  -webkit-line-clamp: 1;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.02em;
`;

const BookInfo = styled.p`
  ${alignCenter}
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
