import styled from 'styled-components';
import MainContainer from '../styles/layout';
import BookDiscussionCard from '../components/BookDiscussion/BookDiscussionCard';

interface PageInfo {
  page: number;
  totalPage: number;
  totalCount: number;
  currentCount: number;
}

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
      title: '미드나잇',
      content: '랄라라라라라라라라라라라랄랄랄',
      like: 10,
      createdAt: '2023.02.03 18:51:09 GMT+0900',
      updatedAt: '2023.02.03 18:51:09 GMT+0900',
    },
    {
      id: '2',
      author: 'yua77',
      title: '미드나잇',
      content: '랄라라라라라라라라라라라랄랄랄',
      like: 10,
      createdAt: '2023.02.03 18:51:09 GMT+0900',
      updatedAt: '2023.02.03 18:51:09 GMT+0900',
    },
    {
      id: '3',
      author: 'yua77',
      title: '미드나잇',
      content: '랄라라라라라라라라라라라랄랄랄',
      like: 10,
      createdAt: '2023.02.03 18:51:09 GMT+0900',
      updatedAt: '2023.02.03 18:51:09 GMT+0900',
    },
    {
      id: '4',
      author: 'yua77',
      title: '미드나잇',
      content: '랄라라라라라라라라라라라랄랄랄',
      like: 10,
      createdAt: '2023.02.03 18:51:09 GMT+0900',
      updatedAt: '2023.02.03 18:51:09 GMT+0900',
    },
    {
      id: '5',
      author: 'yua77',
      title: '미드나잇',
      content: '랄라라라라라라라라라라라랄랄랄',
      like: 10,
      createdAt: '2023.02.03 18:51:09 GMT+0900',
      updatedAt: '2023.02.03 18:51:09 GMT+0900',
    },
    {
      id: '6',
      author: 'yua77',
      title: '미드나잇',
      content: '랄라라라라라라라라라라라랄랄랄',
      like: 10,
      createdAt: '2023.02.03 18:51:09 GMT+0900',
      updatedAt: '2023.02.03 18:51:09 GMT+0900',
    },
    {
      id: '7',
      author: 'yua77',
      title: '미드나잇',
      content: '랄라라라라라라라라라라라랄랄랄',
      like: 10,
      createdAt: '2023.02.03 18:51:09 GMT+0900',
      updatedAt: '2023.02.03 18:51:09 GMT+0900',
    },
    {
      id: '8',
      author: 'yua77',
      title: '미드나잇',
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
  return (
    <MainContainer>
      <Subtitle>독서토론</Subtitle>
      <BookDiscussionCardContainer>
        {dummyData.data.map((data) => (
          <BookDiscussionCard bookDiscussionData={data} />
        ))}
      </BookDiscussionCardContainer>
      {/* 페이지네이션 */}
    </MainContainer>
  );
}

const Subtitle = styled.h2`
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
