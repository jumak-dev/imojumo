import { useState } from 'react';
import styled from 'styled-components';
import SubtitleSection from './SubtitleSection';
import Pagination from '../UI/Pagination/Pagination';
import { GetProConDiscussion } from '../../types';
import { discussionCardContainerCSS } from '../../styles/shared';
import ProConDiscussionSearchCard from './ProConDiscussionSearchCard';
import TAB from '../../constants/Tab';

function ProConDiscussionTap({ posts, pageInfo }: GetProConDiscussion) {
  const [paginate, setPaginate] = useState(1);

  return (
    <>
      <SubtitleSection subtitle={TAB.PROCON_DISCUSSION} postCount={4321} />
      <ProConDiscussionSearchCardContainer>
        {posts?.map((post) => (
          <ProConDiscussionSearchCard
            procondiscussionData={post}
            key={post.id}
          />
        ))}
      </ProConDiscussionSearchCardContainer>
      <Pagination
        currentPage={paginate}
        setPaginate={setPaginate}
        pageInfo={pageInfo}
      />
    </>
  );
}

const ProConDiscussionSearchCardContainer = styled.section`
  ${discussionCardContainerCSS}
`;

export default ProConDiscussionTap;
