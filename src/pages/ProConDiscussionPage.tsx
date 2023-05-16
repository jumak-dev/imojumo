import { useState, useEffect } from 'react';
import styled from 'styled-components';
import MainContainer from '../styles/layout';
import { colFlex } from '../styles/shared';
import { Subtitle } from './BookDiscussionPage';
import { PageInfo, ProConDiscussionInfo } from '../types';
import Pagination from '../components/UI/Pagination/Pagination';
import ProConDiscussionCard from '../components/ProConDiscussion/ProConDiscussionCard';

interface GetProConDiscussion {
  pageInfo: PageInfo;
  posts: ProConDiscussionInfo[];
}

function ProConDiscussion() {
  const { VITE_API_URL } = import.meta.env;
  const [posts, setPosts] = useState<ProConDiscussionInfo[]>([]);
  const [paginate, setPaginate] = useState(1);
  const [paginationInfo, setPaginationInfo] = useState<PageInfo>({
    page: 1,
    totalPage: 1,
    totalCount: 1,
    currentCount: 1,
  });

  // apis로 뺄 예정
  const getProConDiscussion = async (
    page: number,
  ): Promise<GetProConDiscussion> => {
    const url = `${VITE_API_URL}/pro-con-discussions?page=${page}&limit=4`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': '12',
      },
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }

    const data = await response.json();
    return data;
  };

  useEffect(() => {
    try {
      getProConDiscussion(paginate).then((res) => {
        setPosts(res.posts);
        setPaginationInfo(res.pageInfo);
      });
    } catch (e) {
      console.log(e);
    }
  }, [paginate]);

  return (
    <MainContainer>
      <Subtitle>찬반토론</Subtitle>
      <ProConDiscussionCardContainer>
        {posts.map((post) => (
          <ProConDiscussionCard procondiscussionData={post} key={post.id} />
        ))}
      </ProConDiscussionCardContainer>
      <Pagination
        currentPage={paginate}
        setPaginate={setPaginate}
        paginationInfo={paginationInfo}
      />
    </MainContainer>
  );
}

const ProConDiscussionCardContainer = styled.section`
  ${colFlex}
  align-items: center;
  margin-bottom: 50px;
`;

export default ProConDiscussion;
