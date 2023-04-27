import { useState } from 'react';
import styled from 'styled-components';
import ProConDiscussionSearchCard from '../components/Search/ProConDiscussionSearchCard';
import MainContainer from '../styles/layout';
import SearchNav from '../components/Search/SearchNav';
import SubtitleSection from '../components/Search/SubtitleSection';
import { Flex } from '../styles/shared';

function SearchPage() {
  const [currentTap, setCurrentTap] = useState('Search All');

  return (
    <>
      <SearchNav currentTap={currentTap} setCurrentTap={setCurrentTap} />
      <MainContainer>
        <SubtitleSection
          subtitle="독서토론"
          postCount={1234}
          setCurrentTap={setCurrentTap}
        />
        <SubtitleSection
          subtitle="찬반토론"
          postCount={4321}
          setCurrentTap={setCurrentTap}
        />
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
