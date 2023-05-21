import React from 'react';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import BookDiscussionCard from '../BookDiscussion/BookDiscussionCard';
import ProConDiscussionSearchCard from './ProConDiscussionSearchCard';
import SubtitleSection from './SubtitleSection';
import { discussionCardContainerCSS, flex } from '../../styles/shared';
import TAB from '../../constants/Tab';
import useSearchDiscussion from '../../hooks/searchDiscussion/useSearchDiscussion';

function AllTab() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  const { data } = useSearchDiscussion({
    query: query || '',
    type: 'all',
    page: 1,
    limit: 3,
  });

  return (
    <>
      <SubtitleSection
        subtitle={TAB.BOOK_DISCUSSION}
        postCount={data?.bookResults?.pageInfo.totalCount || 0}
      />
      <BookDiscussionCardContainer>
        {data?.bookResults.posts.map((post) => (
          <BookDiscussionCard bookDiscussionData={post} key={post.id} />
        ))}
      </BookDiscussionCardContainer>
      <Divider />
      <SubtitleSection
        subtitle={TAB.PROCON_DISCUSSION}
        postCount={data?.proConResults.pageInfo.totalCount || 0}
      />
      <ProConDiscussionSearchCardContainer>
        {data?.proConResults.posts.map((post) => (
          <ProConDiscussionSearchCard
            procondiscussionData={post}
            key={post.id}
          />
        ))}
      </ProConDiscussionSearchCardContainer>
    </>
  );
}

const ProConDiscussionSearchCardContainer = styled.section`
  ${flex}
`;

const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid var(--color-borderbottom-color);
`;

const BookDiscussionCardContainer = styled.section`
  ${discussionCardContainerCSS}
`;

export default AllTab;
