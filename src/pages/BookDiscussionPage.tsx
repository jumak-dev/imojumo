import { useState } from 'react';
import styled from 'styled-components';
import MainContainer from '../styles/layout';
import { discussionCardContainerCSS } from '../styles/shared';
import Pagination from '../components/UI/Pagination/Pagination';
import useBookDiscussion from '../hooks/bookDiscussion/useBookDisscussion';
import BookDiscussionCard from '../components/BookDiscussion/BookDiscussionCard';

function BookDiscussion() {
  const [paginate, setPaginate] = useState(1);

  const { data: bookDiscussion } = useBookDiscussion({
    page: paginate || 1,
    limit: 9,
  });

  return (
    <MainContainer>
      <Subtitle>독서토론</Subtitle>
      <BookDiscussionCardContainer>
        {bookDiscussion &&
          bookDiscussion.posts.map((post) => (
            <BookDiscussionCard bookDiscussionData={post} key={post.id} />
          ))}
      </BookDiscussionCardContainer>
      {bookDiscussion && (
        <Pagination
          currentPage={paginate}
          setPaginate={setPaginate}
          pageInfo={bookDiscussion?.pageInfo}
        />
      )}
    </MainContainer>
  );
}

export const Subtitle = styled.h2`
  font-size: var(--font-size-l);
  font-weight: bold;
  margin: 60px 10px;
`;

const BookDiscussionCardContainer = styled.section`
  ${discussionCardContainerCSS}
  margin: 0 50px 50px;
`;

export default BookDiscussion;
