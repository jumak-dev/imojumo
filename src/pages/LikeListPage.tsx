import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import MainContainer from '../styles/layout';
import Loading from '../components/UI/Loading/Loading';
import Pagination from '../components/UI/Pagination/Pagination';
import { discussionCardContainerCSS, fontCSS } from '../styles/shared';
import BookDiscussionCard from '../components/BookDiscussion/BookDiscussionCard';

import { jwtAtom } from '../recoil/atoms';
import useLikeList from '../hooks/likeList/useLikeList';

function LikeListPage() {
  const [paginate, setPaginate] = useState(1);
  const token = useRecoilValue(jwtAtom);

  const {
    data: likeList,
    isLoading,
    handleUpdateLike: setLikeList,
  } = useLikeList({
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
          <Subtitle>찜 목록</Subtitle>
          <LikePostCount>{likeList?.pageInfo.totalCount}</LikePostCount>
          <LikeListCardContainer>
            {likeList &&
              likeList.posts.map((post) => (
                <BookDiscussionCard
                  bookDiscussionData={post}
                  key={post.id}
                  handleUpdateLike={handleUpdateLike}
                />
              ))}
          </LikeListCardContainer>
          <Pagination
            currentPage={paginate}
            setPaginate={setPaginate}
            pageInfo={likeList?.pageInfo}
          />
        </>
      )}
    </MainContainer>
  );
}

const Subtitle = styled.h2`
  font-weight: 700;
  font-size: var(--font-size-l);
  margin: 60px 10px;
  display: inline-block;
`;

const LikePostCount = styled.span`
  ${fontCSS};
  color: var(--color-primary-pink);
`;

const LikeListCardContainer = styled.section`
  ${discussionCardContainerCSS}
`;

export default LikeListPage;
