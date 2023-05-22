import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import Pagination from '../UI/Pagination/Pagination';
import SubtitleSection from './SubtitleSection';
import EmptySearchResult from './EmptySearchResult';
import BookDiscussionCard from '../BookDiscussion/BookDiscussionCard';
import useSearchDiscussion from '../../hooks/searchDiscussion/useSearchDiscussion';

import { discussionCardContainerCSS } from '../../styles/shared';

import TAB from '../../constants/Tab';
import INIT_PAGE_INFO from '../../constants/PageInfo';
import { jwtAtom } from '../../recoil/atoms';

function BookDiscussionTab() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get('page') || 1;
  const query = searchParams.get('query');
  const isbn = searchParams.get('isbn');
  const [paginate, setPaginate] = useState(Number(currentPage));
  const token = useRecoilValue(jwtAtom);

  const { data, handleUpdateLike } = useSearchDiscussion({
    token,
    query: query || '',
    isbn: isbn || '',
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
              <BookDiscussionCard
                bookDiscussionData={post}
                key={post.id}
                handleUpdateLike={handleUpdateLike}
              />
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
  margin-bottom: 30px;
`;

const BookDiscussionCardContainer = styled.section`
  ${discussionCardContainerCSS}
  margin-bottom: 0;
  padding-bottom: 60px;
`;

export default BookDiscussionTab;
