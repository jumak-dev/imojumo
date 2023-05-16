import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  flex,
  rowFlex,
  alignCenter,
  justifyEnd,
  truncateTextCSS,
} from '../../styles/shared';
import { AladinBookSearchItem } from '../../types';

interface RecommendedBookCardProps {
  recommendedBook: AladinBookSearchItem;
}

function RecommendedBookCard({ recommendedBook }: RecommendedBookCardProps) {
  return (
    <CardContainer to={`/books/:${1}`}>
      <CardSideBlock />
      <CardBolck>
        <BookCover src={recommendedBook.cover} alt="추천 도서 이미지" />
        <BookInfoContainer>
          <BookTitle>{recommendedBook.title}</BookTitle>
          <BookAuthor>{recommendedBook.author}</BookAuthor>
          <BookPublicationDate>{recommendedBook.pubDate}</BookPublicationDate>
          <BookDescription>
            {recommendedBook.description.length
              ? recommendedBook.description
              : '해당 도서의 자세한 내용은 곧 업데이트될 예정입니다.'}
          </BookDescription>
        </BookInfoContainer>
      </CardBolck>
      <CardSideBlock />
    </CardContainer>
  );
}

const CardContainer = styled(Link)`
  ${flex}
  width: 330px;
  height: 215px;
  margin: 0 20px;
  cursor: pointer;
`;

const BookInfoContainer = styled.div`
  width: 50%;
  padding: 0 10px;
  font-size: var(--font-size-xs);
  color: var(--color-content-text);
  border: 1px solid var(--color-primary-mint);
`;

const CardSideBlock = styled.div`
  width: 5px;
  height: 97%;
  border: 1px solid var(--color-primary-mint);
`;

const CardBolck = styled.div`
  ${rowFlex}
  width: 320px;
`;

const BookCover = styled.img`
  width: 50%;
  height: 220px;
  object-fit: cover;
  border: 1px solid var(--color-primary-mint);
`;

const BookTitle = styled.h2`
  ${alignCenter}
  ${truncateTextCSS}
  margin: 15px 0;
  color: var(--black);
  font-weight: bold;
  font-size: var(--font-size-m);
`;

const BookPublicationDate = styled.p`
  ${justifyEnd}
  margin: 5px 0;
`;

const BookAuthor = styled.p`
  ${truncateTextCSS}
  justify-content: start;
  font-weight: bold;
  margin: 5px 0;
`;

const BookDescription = styled.p`
  ${truncateTextCSS}
  -webkit-line-clamp: 10;
  height: 50%;
  margin: 10px 0;
  line-height: 1.2;
`;

export default RecommendedBookCard;
