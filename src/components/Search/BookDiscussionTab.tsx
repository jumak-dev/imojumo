import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import TAB from '../../constants/Tab';
import SubtitleSection from './SubtitleSection';
import Pagination from '../UI/Pagination/Pagination';
import { discussionCardContainerCSS } from '../../styles/shared';
import BookDiscussionCard from '../BookDiscussion/BookDiscussionCard';
import useSearchDiscussion from '../../hooks/searchDiscussion/useSearchDiscussion';
import INIT_PAGE_INFO from '../../constants/PageInfo';
import EmptySearchResult from './EmptySearchResult';

function BookDiscussionTab() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get('page') || 1;
  const query = searchParams.get('query');
  const [paginate, setPaginate] = useState(Number(currentPage));
  const { data } = useSearchDiscussion({
    query: query || '',
    type: 'book',
    page: Number(currentPage),
    limit: 9,
    isSuspense: true,
  });
  const pageInfo = data?.bookResults?.pageInfo || INIT_PAGE_INFO;

  useEffect(() => {
    searchParams.set('page', String(paginate));
    setSearchParams(searchParams);
  }, [paginate, query]);

  return (
    <>
      {pageInfo.totalCount !== 0 && (
        <>
          <SubtitleSection
            subtitle={TAB.BOOK_DISCUSSION}
            postCount={pageInfo.totalCount}
          />

          <BookDiscussionCardContainer>
            {data?.bookResults?.posts.map((post) => (
              <BookDiscussionCard bookDiscussionData={post} key={post.id} />
            ))}
          </BookDiscussionCardContainer>
        </>
      )}
      {pageInfo?.totalCount > 0 ? (
        <DiscussionPagination
          currentPage={paginate}
          setPaginate={setPaginate}
          pageInfo={pageInfo}
        />
      ) : (
        data && <EmptySearchResult keyword={query || ''} />
      )}
    </>
  );
}

const DiscussionPagination = styled(Pagination)`
  && {
    margin-bottom: 0;
  }
`;

const BookDiscussionCardContainer = styled.section`
  ${discussionCardContainerCSS}
  margin-bottom: 0;
  padding-bottom: 60px;
`;

export default BookDiscussionTab;
