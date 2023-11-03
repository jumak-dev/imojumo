import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import MainContainer from '../styles/layout';
import Loading from '../components/UI/Loading/Loading';
import { discussionCardContainerCSS } from '../styles/shared';
import Pagination from '../components/UI/Pagination/Pagination';
import BookDiscussionCard from '../components/BookDiscussion/BookDiscussionCard';

import { jwtAtom } from '../recoil/atoms';
import useBookDiscussion from '../hooks/bookDiscussion/useBookDiscussion';

function BookDiscussion() {
  const [paginate, setPaginate] = useState(1);
  const token = useRecoilValue(jwtAtom);

  const {
    data: bookDiscussion,
    isLoading,
    handleUpdateLike: setLikeList,
  } = useBookDiscussion({
    page: paginate || 1,
    limit: 9,
    token: token || '',
  });

  const handleUpdateLike = (postId: number, likeSum: number) => {
    setLikeList(postId, likeSum);
  };

  return (
    <MainContainer>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Subtitle>독서토론</Subtitle>
          <BookDiscussionCardContainer>
            {bookDiscussion &&
              bookDiscussion.posts.map((post) => (
                <BookDiscussionCard
                  bookDiscussionData={post}
                  key={post.id}
                  handleUpdateLike={handleUpdateLike}
                />
              ))}
          </BookDiscussionCardContainer>
          {bookDiscussion && (
            <Pagination
              currentPage={paginate}
              setPaginate={setPaginate}
              pageInfo={bookDiscussion?.pageInfo}
            />
          )}
        </>
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
