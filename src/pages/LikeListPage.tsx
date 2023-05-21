import { useState, useEffect } from 'react';
import styled from 'styled-components';
import MainContainer from '../styles/layout';
import Pagination from '../components/UI/Pagination/Pagination';
import { discussionCardContainerCSS, fontCSS } from '../styles/shared';
import { BookDiscussionInfo, PageInfo, GetBookDiscussion } from '../types';
import BookDiscussionCard from '../components/BookDiscussion/BookDiscussionCard';

function LikeListPage() {
  const { VITE_API_URL } = import.meta.env;
  const [posts, setPosts] = useState<BookDiscussionInfo[]>([]);
  const [paginate, setPaginate] = useState(1);
  const [pageInfo, setPageInfo] = useState<PageInfo>({
    page: 1,
    totalPage: 1,
    totalCount: 1,
    currentCount: 1,
  });

  // apis로 뺄 예정
  const getLikeBookDiscussions = async (
    page: number,
  ): Promise<GetBookDiscussion> => {
    const url = `${VITE_API_URL}/likes/me?page=${page}&limit=9`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': '12',
      },
    });

    const data = await response.json();
    return data;
  };

  useEffect(() => {
    try {
      getLikeBookDiscussions(paginate).then((res) => {
        setPosts(res.posts);
        setPageInfo(res.pageInfo);
      });
    } catch (e) {
      console.log(e);
    }
  }, [paginate]);

  return (
    <MainContainer>
      <Subtitle>찜 목록</Subtitle>
      <LikePostCount>{pageInfo.totalCount}</LikePostCount>
      <LikeListCardContainer>
        {posts.map((post) => (
          <BookDiscussionCard bookDiscussionData={post} key={post.id} />
        ))}
      </LikeListCardContainer>
      <Pagination
        currentPage={paginate}
        setPaginate={setPaginate}
        pageInfo={pageInfo}
      />
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
