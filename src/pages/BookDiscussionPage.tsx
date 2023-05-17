import { useState, useEffect } from 'react';
import styled from 'styled-components';
import MainContainer from '../styles/layout';
import { BookDiscussionInfo, PageInfo } from '../types';
import { discussionCardContainerCSS } from '../styles/shared';
import Pagination from '../components/UI/Pagination/Pagination';
import BookDiscussionCard from '../components/BookDiscussion/BookDiscussionCard';

interface GetBookDiscussion {
  pageInfo: PageInfo;
  posts: BookDiscussionInfo[];
}

function BookDiscussion() {
  const { VITE_API_URL } = import.meta.env;
  const [posts, setPosts] = useState<BookDiscussionInfo[]>([]);
  const [paginate, setPaginate] = useState(1);
  const [paginationInfo, setPaginationInfo] = useState<PageInfo>({
    page: 1,
    totalPage: 1,
    totalCount: 1,
    currentCount: 1,
  });

  // apis로 뺄 예정
  const getBookDiscussion = async (
    page: number,
  ): Promise<GetBookDiscussion> => {
    const url = `${VITE_API_URL}/book-discussions?page=${page}&limit=9`;

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
      getBookDiscussion(paginate).then((res) => {
        setPosts(res.posts);
        setPaginationInfo(res.pageInfo);
      });
    } catch (e) {
      console.log(e);
    }
  }, [paginate]);

  return (
    <MainContainer>
      <Subtitle>독서토론</Subtitle>
      <BookDiscussionCardContainer>
        {posts &&
          posts.map((post) => (
            <BookDiscussionCard bookDiscussionData={post} key={post.id} />
          ))}
      </BookDiscussionCardContainer>
      <Pagination
        currentPage={paginate}
        setPaginate={setPaginate}
        paginationInfo={paginationInfo}
      />
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
`;

export default BookDiscussion;
