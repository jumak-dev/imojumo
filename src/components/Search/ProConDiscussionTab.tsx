import React, { useState } from 'react';
import styled from 'styled-components';
import SubtitleSection from './SubtitleSection';
import Pagination from '../UI/Pagination/Pagination';
import { ProConDiscussionInfo, PageInfo } from '../../types';
import { discussionCardContainerCSS } from '../../styles/shared';
import ProConDiscussionSearchCard from './ProConDiscussionSearchCard';

interface ProConDiscussionTapProps {
  posts: ProConDiscussionInfo[];
  paginationInfo: PageInfo;
  currentTab: string;
  setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
}

function ProConDiscussionTap({
  posts,
  paginationInfo,
  currentTab,
  setCurrentTab,
}: ProConDiscussionTapProps) {
  const [paginate, setPaginate] = useState(1);

  return (
    <>
      <SubtitleSection
        subtitle="찬반토론"
        postCount={4321}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
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
