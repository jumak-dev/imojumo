import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { alignCenter, colFlex, rowFlex } from '../../styles/shared';
import Button from '../UI/Button/Button';
import { AladinBookSearchItem } from '../../types';
import replaceHtml from '../../utils/replaceHtml';

interface BookInformationProps {
  bookInfo: AladinBookSearchItem | undefined;
}

function BookInformation({ bookInfo }: BookInformationProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/posts/new');
  };

  return (
    <InformationContainer>
      <BookImage src={bookInfo?.cover} alt={bookInfo?.title} />
      <BookInfoContainer>
        <TitleContainer>
          <BookTitle>{bookInfo?.title}</BookTitle>
          <Button
            type="button"
            buttonType="button"
            buttonColor="mint"
            buttonSize="sm"
            onClick={handleClick}
          >
            토론하기
          </Button>
        </TitleContainer>
        <BookInfoList>
          <BookInfoItem>
            <InfoLabel>저자</InfoLabel>
            <InfoText>{bookInfo?.author}</InfoText>
          </BookInfoItem>
          <BookInfoItem>
            <InfoLabel>출판사</InfoLabel>
            <InfoText>{bookInfo?.publisher}</InfoText>
          </BookInfoItem>
          <BookInfoItem>
            <InfoLabel>발행일</InfoLabel>
            <InfoText>{bookInfo?.pubDate}</InfoText>
          </BookInfoItem>
          <BookInfoItem>
            <InfoLabel>페이지</InfoLabel>
            <InfoText>{bookInfo?.subInfo.itemPage}쪽</InfoText>
          </BookInfoItem>
          <BookInfoItem>
            <InfoLabel>정가</InfoLabel>
            <InfoText>{bookInfo?.priceStandard.toLocaleString()}원</InfoText>
          </BookInfoItem>
          <BookInfoItem>
            <InfoLabel>설명</InfoLabel>
            <BookDescription>
              {bookInfo?.description.length
                ? replaceHtml(bookInfo?.description)
                : '해당 도서의 자세한 내용은 곧 업데이트될 예정입니다.'}
            </BookDescription>
          </BookInfoItem>
        </BookInfoList>
      </BookInfoContainer>
    </InformationContainer>
  );
}

const InformationContainer = styled.div`
  ${rowFlex}
  margin: 24px 0;
  padding: 0 24px;
`;

const BookImage = styled.img`
  width: 240px;
  height: 360px;
  border-radius: 8px;
`;

const BookInfoContainer = styled.div`
  ${colFlex}
  margin-left: 48px;
`;

const TitleContainer = styled.div`
  ${alignCenter}
  margin-bottom: 24px;
`;

const BookTitle = styled.h2`
  margin-right: 24px;
  font-weight: bold;
  font-size: var(--font-size-xxl);
`;

const BookInfoList = styled.ul`
  ${colFlex}
`;

const BookInfoItem = styled.li`
  ${rowFlex}
`;

const InfoLabel = styled.strong`
  width: 48px;
  margin-right: 16px;
  font-weight: 600;
`;

const InfoText = styled.p`
  margin-bottom: 16px;
`;

const BookDescription = styled.p`
  line-height: 20px;
  max-width: 720px;
`;

export default BookInformation;
