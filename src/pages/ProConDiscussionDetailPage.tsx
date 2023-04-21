import styled from 'styled-components';
import { BsChatLeftDots, BsInfoCircle } from 'react-icons/bs';
import MainContainer from '../styles/layout';
import { AlignCenter } from '../styles/shared';
import DiscussionInformation from '../components/ProConDiscussionDetail/DiscussionInformation';
import TopicDescription from '../components/ProConDiscussionDetail/TopicDescription';
import CommentForm from '../components/Comment/CommentForm';
import CommentList from '../components/Comment/CommentList';

function ProConDiscussionDetailPage() {
  return (
    <MainContainer>
      <DiscussionInformation />
      <SubtitleBox>
        <Subtitle>
          주제 설명 <BsInfoCircle />
        </Subtitle>
      </SubtitleBox>
      <TopicDescription />
      <SubtitleBox>
        <Subtitle>
          참여하기 <BsChatLeftDots />
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
  gap: 8px;
  font-weight: bold;
  font-size: var(--font-size-l);
`;

export default ProConDiscussionDetailPage;
