import styled from 'styled-components';
import { BsChatLeftDots } from 'react-icons/bs';
import { GoBook } from 'react-icons/go';
import MainContainer from '../styles/layout';
import { AlignCenter } from '../styles/shared';
import DiscussionInfomation from '../components/BookDiscussionDetail/DiscussionInfomation';
import BookInformation from '../components/BookDiscussionDetail/BookInformation';
import CommentForm from '../components/Comment/CommentForm';
import CommentList from '../components/Comment/CommentList';
import CommentItem from '../components/Comment/CommentItem';

function BookDiscussionDetailPage() {
  const comments = [
    {
      id: 1,
      author: 'Park',
      content:
        '갑자기 불상한척? 한탕해서 편하게 살려고 주식투자해서 손실난걸 왜 불상한양 기사쓰냐? 잔고 5000만원 남아서 라면 먹는게 불상한거냐? 참 웃기네! 젊은얘들 진짜 연기잘함!  자기가 투자할땐 내돈 내맘대로 하는데 왠 오지랖? 투자해서 실패하면 라면 먹는다 불상한척?? 한탕 성공했으면? 외제차 사고 명품사고 여행다녔겠지?? 남들 비웃으면서!! 젊은얘들 징징거리는건 무조건 걸러 들어라! 전부 연기고 거짓말이니!!',
      like: 4,
      dislike: 0,
      createdAt: '2023.02.03 18:51:09',
      updatedAt: '2023.02.03 18:51:09',
    },
    {
      id: 2,
      author: 'Hyo',
      content:
        '주식은 공부해서 되는게 아닙니다.. 그날 그날 치고 빠지는게 답입니다..',
      like: 10,
      dislike: 5,
      createdAt: '2023.02.03 18:51:09',
      updatedAt: '2023.02.03 18:51:09',
    },
    {
      id: 3,
      author: 'Potato',
      content:
        '라면 맛있잖아. 요즘은 종류도 엄청 많아서 골라먹는 재미까지 있다. 식은밥 말아먹으면 더 맛있지. 쌀 살 돈 없다는 소리는 하지말고...',
      like: 9,
      dislike: 2,
      createdAt: '2023.02.03 18:51:09',
      updatedAt: '2023.02.03 18:51:09',
    },
  ];

  return (
    <MainContainer>
      <DiscussionInfomation />
      <SubtitleBox>
        <Subtitle>
          도서 정보 <BookIcon />
        </Subtitle>
      </SubtitleBox>
      <BookInformation />
      <SubtitleBox>
        <Subtitle>
          댓글 <CommentIcon />
        </Subtitle>
      </SubtitleBox>
      <CommentForm />
      <CommentList>
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </CommentList>
    </MainContainer>
  );
}

const SubtitleBox = styled.div`
  ${AlignCenter}
  justify-content: space-between;
  height: 50px;
  padding: 0 24px;
  border-radius: 8px;
  background-color: var(--color-subtitle-bg-color);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const Subtitle = styled.h3`
  ${AlignCenter}
  font-weight: bold;
  font-size: var(--font-size-l);
`;

const BookIcon = styled(GoBook)`
  margin-left: 8px;
  font-size: 24px;
  color: var(--color-primary-mint);
`;

const CommentIcon = styled(BsChatLeftDots)`
  margin-left: 8px;
`;

export default BookDiscussionDetailPage;
