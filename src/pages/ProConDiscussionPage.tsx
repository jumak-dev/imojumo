import styled from 'styled-components';
import MainContainer from '../styles/layout';
import { Subtitle, PageInfo } from './BookDiscussionPage';
import ProConDiscussionCard from '../components/ProConDiscussion/ProConDiscussionCard';
import { ColFlex } from '../styles/shared';

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

// 유저들의 프로필이 있어야 됨
const dummyData: ProConDiscussionData = {
  posts: [
    {
      id: 43,
      author: 'jjs',
      title: '다나카는 일본인인가?다나카는 일본인인가?다나카는 일본인인가?',
      content:
        '랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄<<주제설명주제설명주제설명주제설명주제설명>>랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄',
      views: 0,
      thumbup: 0,
      createdAt: '2023-04-18T02:35:20.116Z',
      updatedAt: '2023-04-18T02:35:20.116Z',
      agreeCount: 1,
      disagreeCount: 0,
      agreeUser: 'jjsssssssssss',
      disagreeUser: '',
    },
    {
      id: 44,
      author: 'jjs',
      title: '다나카는 일본인인가?',
      content:
        '랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄<<주제설명주제설명주제설명주제설명주제설명>>랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄',
      views: 0,
      thumbup: 0,
      createdAt: '2023-04-18T02:35:24.139Z',
      updatedAt: '2023-04-18T02:35:24.139Z',
      agreeCount: 1,
      disagreeCount: 1,
      agreeUser: 'jjs',
      disagreeUser: 'yua77',
    },
    {
      id: 53,
      author: 'jjs',
      title: '다나카는 일본인인가?',
      content:
        '랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄<<주제설명주제설명주제설명주제설명주제설명>>랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄',
      views: 0,
      thumbup: 0,
      createdAt: '2023-04-18T19:09:49.823Z',
      updatedAt: '2023-04-18T19:09:49.823Z',
      agreeCount: 1,
      disagreeCount: 3,
      agreeUser: 'jjs',
      disagreeUser: null,
    },
    {
      id: 54,
      author: 'jjs',
      title: '다나카는 일본인인가?',
      content:
        '랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄<<주제설명주제설명주제설명주제설명주제설명>>랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄',
      views: 0,
      thumbup: 0,
      createdAt: '2023-04-18T19:09:49.823Z',
      updatedAt: '2023-04-18T19:09:49.823Z',
      agreeCount: 1,
      disagreeCount: 3,
      agreeUser: 'jjs',
      disagreeUser: null,
    },
    {
      id: 55,
      author: 'jjs',
      title: '다나카는 일본인인가?',
      content:
        '랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄<<주제설명주제설명주제설명주제설명주제설명>>랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄',
      views: 0,
      thumbup: 0,
      createdAt: '2023-04-18T19:09:49.823Z',
      updatedAt: '2023-04-18T19:09:49.823Z',
      agreeCount: 1,
      disagreeCount: 3,
      agreeUser: 'jjs',
      disagreeUser: null,
    },
    {
      id: 56,
      author: 'jjs',
      title: '다나카는 일본인인가?',
      content:
        '랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄<<주제설명주제설명주제설명주제설명주제설명>>랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄랄',
      views: 0,
      thumbup: 0,
      createdAt: '2023-04-18T19:09:49.823Z',
      updatedAt: '2023-04-18T19:09:49.823Z',
      agreeCount: 1,
      disagreeCount: 3,
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
  ${ColFlex}
  align-items: center;
  margin-bottom: 50px;
`;

export default ProConDiscussion;
