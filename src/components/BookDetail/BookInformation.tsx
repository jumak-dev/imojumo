import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { alignCenter, colFlex, rowFlex } from '../../styles/shared';
import Button from '../UI/Button/Button';

function BookInformation() {
  const imageUrl =
    'https://image.aladin.co.kr/product/27222/22/cover500/e822538010_1.jpg';

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/posts/new');
  };

  return (
    <InformationContainer>
      <BookImage src={imageUrl} alt="미드나잇 라이브러리" />
      <BookInfoContainer>
        <TitleContainer>
          <BookTitle>미드나잇 라이브러리</BookTitle>
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
            <InfoText>매트 헤이그</InfoText>
          </BookInfoItem>
          <BookInfoItem>
            <InfoLabel>역자</InfoLabel>
            <InfoText>노진선</InfoText>
          </BookInfoItem>
          <BookInfoItem>
            <InfoLabel>출판사</InfoLabel>
            <InfoText>인플루엔셜</InfoText>
          </BookInfoItem>
          <BookInfoItem>
            <InfoLabel>발행일</InfoLabel>
            <InfoText>2021년 04년 28일</InfoText>
          </BookInfoItem>
          <BookInfoItem>
            <InfoLabel>페이지</InfoLabel>
            <InfoText>408</InfoText>
          </BookInfoItem>
          <BookInfoItem>
            <InfoLabel>정가</InfoLabel>
            <InfoText>15,800원</InfoText>
          </BookInfoItem>
          <BookInfoItem>
            <InfoLabel>설명</InfoLabel>
            <BookDescription>
              매트 헤이그의 소설 《미드나잇 라이브러리》는 2021년 4월 출간 이후
              10개월 만에 30만 독자의 마음을 사로잡으며 눈물과 웃음, 가슴 뭉클한
              감동을 선사하고 있다. 죽기로 결심한 주인공 ‘노라 시드’가 삶과 죽음
              사이에 존재하는 미스터리한 도서관 ‘미드나잇 라이브러리’에서 눈을
              뜨며 인생의 두 번째 기회를 얻는 이 소설은, 노라의 가장 완벽한 삶을
              찾는 모험을 따라가며 ‘살아 있음’과 ‘살아가는 것’에 대한 깊은
              통찰을 보여준다.
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
