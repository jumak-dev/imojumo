import styled from 'styled-components';
import {
  RowFlexCenter,
  RowFlex,
  AlignCenter,
  JustifyEnd,
} from '../../../styles/shared';

function RecommendedBookCard() {
  // 임시 이미지 Url
  const imageUrl = 'https://image.yes24.com/goods/79378905/XL';

  return (
    <CardContainer>
      <CardSideBlock />
      <CardBolck>
        <BookCover src={imageUrl} />
        <BookInfoContainer>
          <BookTitle>개발자의 글쓰기</BookTitle>
          <BookAuthor>정미나 저 / 정정수 역</BookAuthor>
          <BookPublicationDate>2023.01.05</BookPublicationDate>
          <BookDescription>
            여기에는 책 설명이 들어갈껀데 길면 짤리게 하는게 좋을거 같은데
            무슨말인지 알죠 오케이 가나다라 마바사아자카타파하이요 여기부터는
            조금 큼직하게 카드 작고 길게 하면 5줄로 해도 좋을거 같은데짤릴껄요?
          </BookDescription>
          <BookComment>좋아요 205 댓글 3K</BookComment>
        </BookInfoContainer>
      </CardBolck>
      <CardSideBlock />
    </CardContainer>
  );
}

const CardContainer = styled.div`
  ${RowFlexCenter}
  align-items: center;
  width: 330px;
  height: 215px;
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
  ${RowFlex}
  width: 320px;
`;

const BookCover = styled.img`
  width: 50%;
  border: 1px solid var(--color-primary-mint);
`;

const BookTitle = styled.h2`
  ${AlignCenter}
  height: 20%;
  color: var(--black);
  font-weight: bold;
  font-size: var(--font-size-m);
`;

const BookPublicationDate = styled.p`
  ${JustifyEnd}
  margin: 5px 0;
`;

const BookAuthor = styled(BookPublicationDate)`
  justify-content: start;
  font-weight: bold;
`;

const BookDescription = styled.p`
  height: 50%;
  margin: 10px 0;
  line-height: 1.2;
`;

const BookComment = styled.p`
  ${JustifyEnd}
  font-weight: bold;
`;

export default RecommendedBookCard;
