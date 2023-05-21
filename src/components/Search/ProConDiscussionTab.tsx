import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import SubtitleSection from './SubtitleSection';
import Pagination from '../UI/Pagination/Pagination';
import { discussionCardContainerCSS } from '../../styles/shared';
import ProConDiscussionSearchCard from './ProConDiscussionSearchCard';
import TAB from '../../constants/Tab';
import useSearchDiscussion from '../../hooks/searchDiscussion/useSearchDiscussion';
import INIT_PAGE_INFO from '../../constants/PageInfo';
import EmptySearchResult from './EmptySearchResult';

function ProConDiscussionTap() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get('page') || 1;
  const query = searchParams.get('query');
  const [paginate, setPaginate] = useState(Number(currentPage));
  const { data } = useSearchDiscussion({
    query: query || '',
    type: 'proCon',
    page: Number(currentPage),
    limit: 9,
    isSuspense: true,
  });
  const pageInfo = data?.proConResults?.pageInfo || INIT_PAGE_INFO;

  useEffect(() => {
    searchParams.set('page', String(paginate));
    setSearchParams(searchParams);
  }, [paginate, query]);

  return (
    <>
      {pageInfo.totalCount !== 0 && (
        <>
          <SubtitleSection
            subtitle={TAB.PROCON_DISCUSSION}
            postCount={pageInfo.totalCount}
          />

          <ProConDiscussionSearchCardContainer>
            {data?.proConResults?.posts?.map((post) => (
              <ProConDiscussionSearchCard
                procondiscussionData={post}
                key={post.id}
              />
            ))}
          </ProConDiscussionSearchCardContainer>
        </>
      )}
      {pageInfo.totalCount > 0 ? (
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

const ProConDiscussionSearchCardContainer = styled.section`
  ${discussionCardContainerCSS}
  padding-bottom: 60px;
  height: 100%;
`;

export default ProConDiscussionTap;
