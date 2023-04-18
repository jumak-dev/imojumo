import styled from 'styled-components';
import { BsChatLeftDots } from 'react-icons/bs';
import { GoBook } from 'react-icons/go';
import MainContainer from '../styles/layout';
import { AlignCenter } from '../styles/shared';
import DiscussionInfomation from '../components/BookDiscussionDetail/DiscussionInfomation';
import BookInformation from '../components/BookDiscussionDetail/BookInformation';
import CommentForm from '../components/Comment/CommentForm';
import CommentList from '../components/Comment/CommentList';

function BookDiscussionDetailPage() {
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
      <CommentList />
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
