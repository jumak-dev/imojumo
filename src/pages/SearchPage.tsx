import { useState } from 'react';
import styled from 'styled-components';
import MainContainer from '../styles/layout';
import SearchNav from '../components/Search/SearchNav';
import SubtitleSection from '../components/Search/SubtitleSection';
import BookDiscussionTap from '../components/Search/BookDiscussionTap';
import ProConDiscussionTap from '../components/Search/ProConDiscussionTap';
import BookDiscussionCard from '../components/BookDiscussion/BookDiscussionCard';
import ProConDiscussionSearchCard from '../components/Search/ProConDiscussionSearchCard';

import { Flex, discussionCardContainerCSS } from '../styles/shared';
import { BookDiscussionInfo, ProConDiscussionInfo, PageInfo } from '../types';

import BOOKDISCUSSION_DUMMY from '../components/BookDiscussion/BOOKDISCUSSION_DUMMY';
import PROCONDISCUSSION_DUMMY from '../components/ProConDiscussion/PROCONDISCUSSION_DUMMY';

interface BookDiscussionData {
  pageInfo: PageInfo;
  data: BookDiscussionInfo[];
}

interface ProConDiscussionData {
  pageInfo: PageInfo;
  posts: ProConDiscussionInfo[];
}

function SearchPage() {
  const [bookDiscussionPosts] =
    useState<BookDiscussionData>(BOOKDISCUSSION_DUMMY);
  const [proConDiscussionPosts] = useState<ProConDiscussionData>(
    PROCONDISCUSSION_DUMMY,
  );
  const [currentTap, setCurrentTap] = useState('Search All');

  return (
    <>
      <SearchNav currentTap={currentTap} setCurrentTap={setCurrentTap} />
      <MainContainer>
        {currentTap === 'Search All' && (
          <>
            <SubtitleSection
              subtitle="독서토론"
              postCount={1234}
              currentTap={currentTap}
              setCurrentTap={setCurrentTap}
            />
            <BookDiscussionCardContainer>
              {bookDiscussionPosts.data.slice(0, 3).map((post) => (
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
              {proConDiscussionPosts.posts.slice(0, 3).map((post) => (
                <ProConDiscussionSearchCard
                  procondiscussionData={post}
                  key={post.id}
                />
              ))}
            </ProConDiscussionSearchCardContainer>
          </>
        )}
        {currentTap === 'BookDiscussion' && (
          <BookDiscussionTap
            posts={bookDiscussionPosts.data}
            paginationInfo={bookDiscussionPosts.pageInfo}
            currentTap={currentTap}
            setCurrentTap={setCurrentTap}
          />
        )}
        {currentTap === 'ProConDiscussion' && (
          <ProConDiscussionTap
            posts={proConDiscussionPosts.posts}
            paginationInfo={proConDiscussionPosts.pageInfo}
            currentTap={currentTap}
            setCurrentTap={setCurrentTap}
          />
        )}
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
  ${discussionCardContainerCSS}
`;

export default SearchPage;
