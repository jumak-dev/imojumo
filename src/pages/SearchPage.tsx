import { useState } from 'react';
import styled from 'styled-components';
import ProConDiscussionSearchCard from '../components/Search/ProConDiscussionSearchCard';
import MainContainer from '../styles/layout';
import SearchNav from '../components/Search/SearchNav';
import { Flex } from '../styles/shared';

function SearchPage() {
  const [currentTap, setCurrentTap] = useState('Search All');

  return (
    <>
      <SearchNav currentTap={currentTap} setCurrentTap={setCurrentTap} />
      <MainContainer>
        <ProConDiscussionSearchCardContainer>
          <ProConDiscussionSearchCard />
          <ProConDiscussionSearchCard />
          <ProConDiscussionSearchCard />
        </ProConDiscussionSearchCardContainer>
      </MainContainer>
    </>
  );
}

const ProConDiscussionSearchCardContainer = styled.section`
  ${Flex}
`;

export default SearchPage;
