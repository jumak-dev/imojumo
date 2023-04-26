import { useState } from 'react';
import styled from 'styled-components';
import MainContainer from '../styles/layout';
import BookDiscussionCard from '../components/BookDiscussion/BookDiscussionCard';
import Pagination, { PageInfo } from '../components/UI/Pagination/Pagination';

export interface BookDiscussionInfo {
  id: string;
  author: string;
  title: string;
  content: string;
  like: number;
  createdAt: string;
  updatedAt: string;
}

interface BookDiscussionData {
  pageInfo: PageInfo;
  data: BookDiscussionInfo[];
}

const dummyData: BookDiscussionData = {
  pageInfo: {
    page: 1,
    totalPage: 10,
    totalCount: 100,
    currentCount: 10,
  },
  data: [
    {
      id: '1',
      author: 'wjdwjdtn92',
      title: '미드나잇 라이브러리',
      content:
        '랄라라라라라라라라라라라랄랄랄랄라라라라라라라라라라라랄랄랄랄라라라라라라라라라라라랄랄랄랄라라라라라라라라라라라랄랄랄랄라라라라라라라라라라라랄랄랄랄라라라라라라라라라라라랄랄랄',
      like: 10,
      createdAt: '2023.02.03 18:51:09 GMT+0900',
      updatedAt: '2023.02.03 18:51:09 GMT+0900',
    },
    {
      id: '2',
      author: 'yua77',
      title: '미드나잇 라이브러리',
      content: '랄라라라라라라라라라라라랄랄랄',
      like: 10,
      createdAt: '2023.02.03 18:51:09 GMT+0900',
      updatedAt: '2023.02.03 18:51:09 GMT+0900',
    },
    {
      id: '3',
      author: 'yua77',
      title: '미드나잇 라이브러리',
      content: '랄라라라라라라라라라라라랄랄랄',
      like: 10,
      createdAt: '2023.02.03 18:51:09 GMT+0900',
      updatedAt: '2023.02.03 18:51:09 GMT+0900',
    },
    {
      id: '4',
      author: 'yua77',
      title: '미드나잇 라이브러리',
      content: '랄라라라라라라라라라라라랄랄랄',
      like: 10,
      createdAt: '2023.02.03 18:51:09 GMT+0900',
      updatedAt: '2023.02.03 18:51:09 GMT+0900',
    },
    {
      id: '5',
      author: 'yua77',
      title: '미드나잇 라이브러리',
      content: '랄라라라라라라라라라라라랄랄랄',
      like: 10,
      createdAt: '2023.02.03 18:51:09 GMT+0900',
      updatedAt: '2023.02.03 18:51:09 GMT+0900',
    },
    {
      id: '6',
      author: 'yua77',
      title: '미드나잇 라이브러리',
      content: '랄라라라라라라라라라라라랄랄랄',
      like: 10,
      createdAt: '2023.02.03 18:51:09 GMT+0900',
      updatedAt: '2023.02.03 18:51:09 GMT+0900',
    },
    {
      id: '7',
      author: 'yua77',
      title: '미드나잇 라이브러리',
      content: '랄라라라라라라라라라라라랄랄랄',
      like: 10,
      createdAt: '2023.02.03 18:51:09 GMT+0900',
      updatedAt: '2023.02.03 18:51:09 GMT+0900',
    },
    {
      id: '8',
      author: 'yua77',
      title: '미드나잇 라이브러리',
      content: '랄라라라라라라라라라라라랄랄랄',
      like: 10,
      createdAt: '2023.02.03 18:51:09 GMT+0900',
      updatedAt: '2023.02.03 18:51:09 GMT+0900',
    },
    {
      id: '9',
      author: 'yua77',
      title: '미드나잇',
      content: '랄라라라라라라라라라라라랄랄랄',
      like: 10,
      createdAt: '2023.02.03 18:51:09 GMT+0900',
      updatedAt: '2023.02.03 18:51:09 GMT+0900',
    },
    {
      id: '10',
      author: 'yua77',
      title: '미드나잇',
      content: '랄라라라라라라라라라라라랄랄랄',
      like: 10,
      createdAt: '2023.02.03 18:51:09 GMT+0900',
      updatedAt: '2023.02.03 18:51:09 GMT+0900',
    },
    {
      id: '11',
      author: 'yua77',
      title: '미드나잇',
      content: '랄라라라라라라라라라라라랄랄랄',
      like: 10,
      createdAt: '2023.02.03 18:51:09 GMT+0900',
      updatedAt: '2023.02.03 18:51:09 GMT+0900',
    },
  ],
};

function BookDiscussion() {
  const [posts] = useState<BookDiscussionInfo[]>(dummyData.data);
  const [paginate, setPaginate] = useState(1);
  const [paginationInfo] = useState<PageInfo>(dummyData.pageInfo);

  /* 9개씩 가지고 옴
  useEffect(() => {
    const fetchData = async () => {
      try {
        // params에 현재 page 쪽수, 보여질 게시물 개수인 limit 담기
        const res = await fetch('').then((res) => res.json());
        const postData = res.data;
        const paginationData: PageInfo = res.pageInfo;
        
        // setPosts 만들어서
        setPosts(postData);
        // setPosts 만들어서
        setPaginationInfo(postData)
      } catch (e) {
        console.log(e)
      }
        
    };
  }, [paginate]); // paginate 쪽수 변경할 때마다 새로운 데이터 가지고 오게 의존성 추가
  */

  return (
    <MainContainer>
      <Subtitle>독서토론</Subtitle>
      <BookDiscussionCardContainer>
        {posts.map((post) => (
          <BookDiscussionCard bookDiscussionData={post} key={post.id} />
        ))}
      </BookDiscussionCardContainer>
      <Pagination
        paginate={paginate}
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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
  gap: 40px;
  margin-bottom: 60px;
`;

export default BookDiscussion;
