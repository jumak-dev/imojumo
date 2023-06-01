import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import dayjs from 'dayjs';
import styled from 'styled-components';
import { alignCenter, colFlex, rowFlex } from '../../styles/shared';
import Button from '../UI/Button/Button';
import { AladinBookSearchItem } from '../../types';
import replaceHtml from '../../utils/replaceHtml';
import isLoginSelector from '../../recoil/seletors';

interface BookInformationProps {
  bookInfo: AladinBookSearchItem | undefined;
}

function BookInformation({ bookInfo }: BookInformationProps) {
  const navigate = useNavigate();
  const isLogin = useRecoilValue(isLoginSelector);

  const pubDate = dayjs(bookInfo?.pubDate).format('YYYY.MM.DD');

  const handleClick = () => {
    if (!isLogin) {
      navigate('/login');
      return;
    }

    navigate('/posts/new/book-discussion');
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
            <InfoText>{pubDate}</InfoText>
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
  gap: 48px;
`;

const BookImage = styled.img`
  width: 200px;
  height: 300px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const BookInfoContainer = styled.div`
  ${colFlex}
  gap: 24px;
`;

const TitleContainer = styled.div`
  ${alignCenter}
  gap: 24px;
`;

const BookTitle = styled.h2`
  font-weight: 700;
  font-size: var(--font-size-xxl);
`;

const BookInfoList = styled.ul`
  ${colFlex}
  gap: 16px;
`;

const BookInfoItem = styled.li`
  ${rowFlex}
  gap: 16px;
`;

const InfoLabel = styled.strong`
  width: 48px;
  font-weight: 600;
  white-space: nowrap;
`;

const InfoText = styled.p`
  color: var(--color-content-text);
`;

const BookDescription = styled.p`
  line-height: 20px;
  max-width: 720px;
`;

export default BookInformation;
