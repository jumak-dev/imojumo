import { useState } from 'react';
import styled from 'styled-components';
import { colFlex } from '../styles/shared';
import MainContainer from '../styles/layout';
import { Subtitle } from './BookDiscussionPage';
import Pagination from '../components/UI/Pagination/Pagination';
import useProConDiscussion from '../hooks/proConDiscussion/useProConDiscussion';
import ProConDiscussionCard from '../components/ProConDiscussion/ProConDiscussionCard';

function ProConDiscussion() {
  const [paginate, setPaginate] = useState(1);

  const { data: proConDiscussion } = useProConDiscussion({
    page: paginate || 1,
    limit: 4,
  });

  return (
    <MainContainer>
      <Subtitle>찬반토론</Subtitle>
      <ProConDiscussionCardContainer>
        {proConDiscussion &&
          proConDiscussion?.posts?.map((post) => (
            <ProConDiscussionCard procondiscussionData={post} key={post.id} />
          ))}
      </ProConDiscussionCardContainer>
      {proConDiscussion && (
        <Pagination
          currentPage={paginate}
          setPaginate={setPaginate}
          pageInfo={proConDiscussion.pageInfo}
        />
      )}
    </MainContainer>
  );
}

const ProConDiscussionCardContainer = styled.section`
  ${colFlex}
  align-items: center;
  margin-bottom: 50px;
`;

export default ProConDiscussion;
