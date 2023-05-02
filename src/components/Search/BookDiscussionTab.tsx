import { useState } from 'react';
import styled from 'styled-components';
import TAB from '../../constants/Tab';
import SubtitleSection from './SubtitleSection';
import Pagination from '../UI/Pagination/Pagination';
import { BookDiscussionInfo, PageInfo } from '../../types';
import { discussionCardContainerCSS } from '../../styles/shared';
import BookDiscussionCard from '../BookDiscussion/BookDiscussionCard';

interface BookDiscussionTabProps {
  posts: BookDiscussionInfo[];
  paginationInfo: PageInfo;
}

function BookDiscussionTab({ posts, paginationInfo }: BookDiscussionTabProps) {
  const [paginate, setPaginate] = useState(1);

  return (
    <>
      <SubtitleSection subtitle={TAB.BOOK_DISCUSSION} postCount={1234} />
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
