import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import MainContainer from '../styles/layout';
import { discussionCardContainerCSS } from '../styles/shared';
import Pagination from '../components/UI/Pagination/Pagination';
import useBookDiscussion from '../hooks/bookDiscussion/useBookDisscussion';
import BookDiscussionCard from '../components/BookDiscussion/BookDiscussionCard';
import { jwtAtom } from '../recoil/atoms';
import Loading from '../components/UI/Loading/Loading';
import { BookDiscussionInfo } from '../types';

function BookDiscussion() {
  const [paginate, setPaginate] = useState(1);
  const token = useRecoilValue(jwtAtom);

  const {
    data: bookDiscussion,
    isLoading,
    setData: setBookDiscussion,
  } = useBookDiscussion({
    page: paginate || 1,
    limit: 9,
    token: token || '',
  });

  const handleUpdateLike = (postId: number, likeSum: number | undefined) => {
    setBookDiscussion((prev: any) => {
      if (prev) {
        const updatedPosts: any = prev.posts.map((post: BookDiscussionInfo) => {
          if (post.id === postId) {
            return {
              ...post,
              likeCount: likeSum,
            };
          }
          return post;
        });

        return {
          ...prev,
          posts: updatedPosts,
        };
      }
      return prev;
    });
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
