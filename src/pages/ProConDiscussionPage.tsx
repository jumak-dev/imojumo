import { useState } from 'react';
import styled from 'styled-components';
import MainContainer from '../styles/layout';
import { ColFlex } from '../styles/shared';
import { Subtitle } from './BookDiscussionPage';
import { ProConDiscussionInfo, PageInfo } from '../types';
import Pagination from '../components/UI/Pagination/Pagination';
import ProConDiscussionCard from '../components/ProConDiscussion/ProConDiscussionCard';
import PROCONDISCUSSION_DUMMY from '../components/ProConDiscussion/PROCONDISCUSSION_DUMMY';

function ProConDiscussion() {
  const [posts] = useState<ProConDiscussionInfo[]>(
    PROCONDISCUSSION_DUMMY.posts,
  );
  const [paginate, setPaginate] = useState(1);
  const [paginationInfo] = useState<PageInfo>(PROCONDISCUSSION_DUMMY.pageInfo);

  /* 4개씩 가지고 옴
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
  ${ColFlex}
  align-items: center;
  margin-bottom: 50px;
`;

export default ProConDiscussion;
