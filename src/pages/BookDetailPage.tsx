import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { GoBook } from 'react-icons/go';
import { GrNext } from 'react-icons/gr';
import MainContainer from '../styles/layout';
import { AlignCenter } from '../styles/shared';
import BookInformation from '../components/BookDetail/BookInformation';
import RelatedBookDiscussion from '../components/BookDetail/RelatedBookDiscussion';

function BookDetailPage() {
  return (
    <MainContainer>
      <BookInformation />
      <SubtitleBox>
        <Subtitle>
          관련 독서토론 <BookIcon />
        </Subtitle>
        <ShowMoreLink to="/book-discussion">
          더보기 <NextIcon />
        </ShowMoreLink>
      </SubtitleBox>
      <DiscussionSection>
        <RelatedBookDiscussion />
        <RelatedBookDiscussion />
        <RelatedBookDiscussion />
      </DiscussionSection>
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
  font-size: var(--font-size-l);
  font-weight: bold;
`;

const BookIcon = styled(GoBook)`
  margin-left: 8px;
  font-size: 24px;
  color: var(--color-primary-mint);
`;

const ShowMoreLink = styled(Link)`
  ${AlignCenter}
`;

const NextIcon = styled(GrNext)`
  margin-left: 4px;
  font-size: 15px;
`;

const DiscussionSection = styled.section`
  & > article:last-child {
    border: none;
  }
`;

export default BookDetailPage;
