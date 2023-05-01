import React, { useState } from 'react';
import styled from 'styled-components';
import SubtitleSection from './SubtitleSection';
import Pagination from '../UI/Pagination/Pagination';
import { BookDiscussionInfo, PageInfo } from '../../types';
import { discussionCardContainerCSS } from '../../styles/shared';
import BookDiscussionCard from '../BookDiscussion/BookDiscussionCard';

interface BookDiscussionTabProps {
  posts: BookDiscussionInfo[];
  paginationInfo: PageInfo;
  currentTab: string;
  setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
}

function BookDiscussionTab({
  posts,
  paginationInfo,
  currentTab,
  setCurrentTab,
}: BookDiscussionTabProps) {
  const [paginate, setPaginate] = useState(1);

  return (
    <>
      <SubtitleSection
        subtitle="독서토론"
        postCount={1234}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      <BookDiscussionCardContainer>
        {posts.map((post) => (
          <BookDiscussionCard bookDiscussionData={post} key={post.id} />
        ))}
      </BookDiscussionCardContainer>
      <Pagination
        currentPage={paginate}
        setPaginate={setPaginate}
        paginationInfo={paginationInfo}
      />
    </>
  );
}

const BookDiscussionCardContainer = styled.section`
  ${discussionCardContainerCSS}
`;

export default BookDiscussionTab;
