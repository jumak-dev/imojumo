import { useState } from 'react';
import styled from 'styled-components';
import MainContainer from '../styles/layout';
import { BookDiscussionInfo, ProConDiscussionInfo } from '../types';
import SearchNav from '../components/Search/SearchNav';
import SubtitleSection from '../components/Search/SubtitleSection';
import BookDiscussionCard from '../components/BookDiscussion/BookDiscussionCard';
import ProConDiscussionSearchCard from '../components/Search/ProConDiscussionSearchCard';
import { Flex, bookDiscussionCardContainerCSS } from '../styles/shared';

import BOOKDISCUSSION_DUMMY from '../components/BookDiscussion/BOOKDISCUSSION_DUMMY';
import PROCONDISCUSSION_DUMMY from '../components/ProConDiscussion/PROCONDISCUSSION_DUMMY';

function SearchPage() {
  const [bookDiscussionPosts] = useState<BookDiscussionInfo[]>(
    BOOKDISCUSSION_DUMMY.data,
  );
  const [proConDiscussionPosts] = useState<ProConDiscussionInfo[]>(
    PROCONDISCUSSION_DUMMY.posts,
  );
  const [currentTap, setCurrentTap] = useState('Search All');

  return (
    <>
      <SearchNav currentTap={currentTap} setCurrentTap={setCurrentTap} />
      <MainContainer>
        <SubtitleSection
          subtitle="독서토론"
          postCount={1234}
          currentTap={currentTap}
          setCurrentTap={setCurrentTap}
        />
        <BookDiscussionCardContainer>
          {bookDiscussionPosts.slice(0, 3).map((post) => (
            <BookDiscussionCard bookDiscussionData={post} key={post.id} />
          ))}
        </BookDiscussionCardContainer>
        <Divider />
        <SubtitleSection
          subtitle="찬반토론"
          postCount={4321}
          currentTap={currentTap}
          setCurrentTap={setCurrentTap}
        />
        <ProConDiscussionSearchCardContainer>
          {proConDiscussionPosts.slice(0, 3).map((post) => (
            <ProConDiscussionSearchCard
              procondiscussionData={post}
              key={post.id}
            />
          ))}
        </ProConDiscussionSearchCardContainer>
      </MainContainer>
    </>
  );
}

const ProConDiscussionSearchCardContainer = styled.section`
  ${Flex}
`;

const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid var(--color-borderbottom-color);
`;

const BookDiscussionCardContainer = styled.section`
  ${bookDiscussionCardContainerCSS}
`;

export default SearchPage;
