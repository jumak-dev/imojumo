import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { AlignCenter, ColFlex, RowFlex } from '../../styles/shared';
import Button from '../UI/Button/Button';

function BookInformation() {
  const imageUrl =
    'https://image.aladin.co.kr/product/27222/22/cover500/e822538010_1.jpg';

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/posts/new');
  };

  return (
    <BookInformationLayout>
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
        <BookInfoBox>
          <BookInfoTitle>
            <InfoTitle>저자</InfoTitle>
            <InfoTitle>역자</InfoTitle>
            <InfoTitle>출판사</InfoTitle>
            <InfoTitle>발행일</InfoTitle>
            <InfoTitle>페이지</InfoTitle>
            <InfoTitle>정가</InfoTitle>
            <InfoTitle>설명</InfoTitle>
          </BookInfoTitle>
          <BookInfoDetail>
            <InfoDetail>매트 헤이그</InfoDetail>
            <InfoDetail>노진선</InfoDetail>
            <InfoDetail>인플루엔셜</InfoDetail>
            <InfoDetail>2021년 04년 28일</InfoDetail>
            <InfoDetail>408</InfoDetail>
            <InfoDetail>15,800원</InfoDetail>
            <BookDescription>
              매트 헤이그의 소설 《미드나잇 라이브러리》는 2021년 4월 출간 이후
              10개월 만에 30만 독자의 마음을 사로잡으며 눈물과 웃음, 가슴 뭉클한
              감동을 선사하고 있다. 죽기로 결심한 주인공 ‘노라 시드’가 삶과 죽음
              사이에 존재하는 미스터리한 도서관 ‘미드나잇 라이브러리’에서 눈을
              뜨며 인생의 두 번째 기회를 얻는 이 소설은, 노라의 가장 완벽한 삶을
              찾는 모험을 따라가며 ‘살아 있음’과 ‘살아가는 것’에 대한 깊은
              통찰을 보여준다.
            </BookDescription>
          </BookInfoDetail>
        </BookInfoBox>
      </BookInfoContainer>
    </BookInformationLayout>
  );
}

const BookInformationLayout = styled.div`
  ${RowFlex}
  margin: 24px 0;
  padding: 0 24px;
`;

const BookImage = styled.img`
  width: 240px;
  height: 360px;
  border-radius: 8px;
`;

const BookInfoContainer = styled.div`
  ${ColFlex}
  margin-left: 48px;
`;

const TitleContainer = styled.div`
  ${AlignCenter}
  margin-bottom: 24px;
`;

const BookTitle = styled.h2`
  margin-right: 40px;
  font-weight: bold;
  font-size: var(--font-size-xxl);
`;

const BookInfoBox = styled.div`
  ${RowFlex}
`;

const BookInfoTitle = styled.div`
  ${ColFlex}
  width: 48px;
  margin-right: 16px;
`;

const BookInfoDetail = styled.div`
  ${ColFlex}
  max-width: 720px;
`;

const InfoTitle = styled.span`
  margin-bottom: 8px;
  font-weight: 600;
`;

const InfoDetail = styled.span`
  margin-bottom: 8px;
`;

const BookDescription = styled.span`
  line-height: 20px;
`;

export default BookInformation;
