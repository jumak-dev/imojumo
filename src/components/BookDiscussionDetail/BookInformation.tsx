import styled from 'styled-components';
import { colFlex, rowFlex } from '../../styles/shared';
import { Book } from '../../types';

interface BookInformationProps {
  book: Book;
}

function BookInformation({ book }: BookInformationProps) {
  const { title, author, publisher, description, cover, pubDate } = book;

  return (
    <InformationContainer>
      <BookImage src={cover} alt={title} />
      <BookInfoContainer>
        <BookTitle>{title}</BookTitle>
        <BookInfo>
          {author} | {pubDate} | {publisher} 출판
        </BookInfo>
        <BookDescription>{description}</BookDescription>
      </BookInfoContainer>
    </InformationContainer>
  );
}

const InformationContainer = styled.section`
  ${rowFlex}
  gap: 16px;
  margin: 40px 20px;
`;

const BookImage = styled.img`
  flex-shrink: 0;
  width: 100px;
  height: 120px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

const BookInfoContainer = styled.div`
  ${colFlex}
  gap: 8px;
`;

const BookTitle = styled.h2`
  font-weight: bold;
  font-size: var(--font-size-xl);
`;

const BookInfo = styled.span`
  color: var(--color-content-text);
`;

const BookDescription = styled.p`
  line-height: 20px;
  color: var(--color-content-text);
`;

export default BookInformation;
