import { useState } from 'react';
import styled from 'styled-components';
import SubtitleSection from './SubtitleSection';
import Pagination from '../UI/Pagination/Pagination';
import { ProConDiscussionInfo, PageInfo } from '../../types';
import { discussionCardContainerCSS } from '../../styles/shared';
import ProConDiscussionSearchCard from './ProConDiscussionSearchCard';
import Tab from '../../constants/Tab';

interface ProConDiscussionTapProps {
  posts: ProConDiscussionInfo[];
  paginationInfo: PageInfo;
}

function ProConDiscussionTap({
  posts,
  paginationInfo,
}: ProConDiscussionTapProps) {
  const [paginate, setPaginate] = useState(1);

  return (
    <>
      <SubtitleSection subtitle={Tab.ProConDiscussion} postCount={4321} />
      <ProConDiscussionSearchCardContainer>
        {posts.map((post) => (
          <ProConDiscussionSearchCard
            procondiscussionData={post}
            key={post.id}
          />
        ))}
      </ProConDiscussionSearchCardContainer>
      <Pagination
        currentPage={paginate}
        setPaginate={setPaginate}
        paginationInfo={paginationInfo}
      />
    </>
  );
}

const ProConDiscussionSearchCardContainer = styled.section`
  ${discussionCardContainerCSS}
`;

export default ProConDiscussionTap;
