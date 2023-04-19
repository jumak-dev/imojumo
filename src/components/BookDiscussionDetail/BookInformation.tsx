import styled from 'styled-components';
import { ColFlex } from '../../styles/shared';

function BookInformation() {
  const imageUrl =
    'https://image.aladin.co.kr/product/27222/22/cover500/e822538010_1.jpg';

  return (
    <InformationContainer>
      <BookImage src={imageUrl} alt="미드나잇 라이브러리" />
      <BookInfoContainer>
        <BookTitle>미드나잇 라이브러리</BookTitle>
        <BookInfo>
          매트 헤이그 저 | 2021.04.28 | 인프루엔셜 출판 | 408쪽
        </BookInfo>
        <BookDescription>
          이 책들은 네가 살았을 수도 있는 모든 삶으로 들어가는 입구야. 더 이상
          자신의 하찮고 지질한 삶을 견딜 수 없었던 주인공 노라 시드가 죽기로
          결심한 것은 밤 11시 22분. 그가 눈을 뜬 곳은 삶과 죽음 사이의
          미스터리한 공간, 미드나잇 라이브러리. 시간은 자정에서 멈춰 있다.
          도서관 사서 엘름 부인의 안내로 노라는 과거에 다른 선택을 했다면 살았을
          수도 있는 또 다른 삶을 살아보며, 가장 완벽한 삶을 찾는 모험을
          시작한다.
        </BookDescription>
      </BookInfoContainer>
    </InformationContainer>
  );
}

const InformationContainer = styled.section`
  display: flex;
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
  ${ColFlex}
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
