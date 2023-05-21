import React from 'react';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import BookDiscussionCard from '../BookDiscussion/BookDiscussionCard';
import ProConDiscussionSearchCard from './ProConDiscussionSearchCard';
import SubtitleSection from './SubtitleSection';
import {
  alignCenter,
  discussionCardContainerCSS,
  flex,
} from '../../styles/shared';
import TAB from '../../constants/Tab';
import useSearchDiscussion from '../../hooks/searchDiscussion/useSearchDiscussion';
import EmptySearchResult from './EmptySearchResult';

function AllTab() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  const { data } = useSearchDiscussion({
    query,
    type: 'all',
    page: 1,
    limit: 3,
    isSuspense: true,
  });
  const bookResultsCount = data?.bookResults?.pageInfo.totalCount || 0;
  const proConResultsCount = data?.proConResults?.pageInfo.totalCount || 0;
  const isEmptySearchResult =
    data && bookResultsCount === 0 && proConResultsCount === 0;

  return (
    <>
      {bookResultsCount > 0 && (
        <>
          <SubtitleSection
            subtitle={TAB.BOOK_DISCUSSION}
            postCount={bookResultsCount}
          />
          <BookDiscussionCardContainer>
            {data?.bookResults.posts.map((post) => (
              <BookDiscussionCard bookDiscussionData={post} key={post.id} />
            ))}
          </BookDiscussionCardContainer>
          <Divider />
        </>
      )}

      {proConResultsCount > 0 && (
        <>
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
      )}
      {isEmptySearchResult && <EmptySearchResult keyword={query} />}
    </>
  );
}

const ProConDiscussionSearchCardContainer = styled.section`
  ${alignCenter}
`;

const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid var(--color-borderbottom-color);
`;

const BookDiscussionCardContainer = styled.section`
  ${discussionCardContainerCSS}
`;

export default AllTab;
