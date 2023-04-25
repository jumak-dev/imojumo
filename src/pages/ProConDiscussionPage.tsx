import styled from 'styled-components';
import MainContainer from '../styles/layout';
import { Subtitle, PageInfo } from './BookDiscussionPage';
import ProConDiscussionCard from '../components/ProConDiscussion/ProConDiscussionCard';

export interface Post {
  id: number;
  author: string;
  title: string;
  content: string;
  views: number;
  thumbup: number;
  createdAt: string;
  updatedAt: string;
  agreeCount: number;
  disagreeCount: number;
  agreeUser: string;
  disagreeUser: null | string;
}

interface ProConDiscussionData {
  posts: Post[];
  pageInfo: PageInfo;
}

const dummyData: ProConDiscussionData = {
  posts: [
    {
      id: 43,
      author: 'jjs',
      title: 'string',
      content: 'string',
      views: 0,
      thumbup: 0,
      createdAt: '2023-04-18T02:35:20.116Z',
      updatedAt: '2023-04-18T02:35:20.116Z',
      agreeCount: 1,
      disagreeCount: 0,
      agreeUser: 'jjs',
      disagreeUser: 'yua77',
    },
    {
      id: 44,
      author: 'jjs',
      title: 'string',
      content: 'string',
      views: 0,
      thumbup: 0,
      createdAt: '2023-04-18T02:35:24.139Z',
      updatedAt: '2023-04-18T02:35:24.139Z',
      agreeCount: 1,
      disagreeCount: 0,
      agreeUser: 'jjs',
      disagreeUser: 'yua77',
    },
    {
      id: 53,
      author: 'jjs',
      title: 'string',
      content: 'string',
      views: 0,
      thumbup: 0,
      createdAt: '2023-04-18T19:09:49.823Z',
      updatedAt: '2023-04-18T19:09:49.823Z',
      agreeCount: 1,
      disagreeCount: 0,
      agreeUser: 'jjs',
      disagreeUser: null,
    },
  ],
  pageInfo: {
    page: 1,
    totalCount: 6,
    currentCount: 3,
    totalPage: 2,
  },
};

function ProConDiscussion() {
  return (
    <MainContainer>
      <Subtitle>찬반토론</Subtitle>
      <ProConDiscussionCardContainer>
        {dummyData.posts.map((post) => (
          <ProConDiscussionCard procondiscussionData={post} key={post.id} />
        ))}
      </ProConDiscussionCardContainer>
    </MainContainer>
  );
}

const ProConDiscussionCardContainer = styled.section`
  margin: 0 20px;
`;

export default ProConDiscussion;
