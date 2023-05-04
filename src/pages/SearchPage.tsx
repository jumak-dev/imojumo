import { useState, useContext } from 'react';
import styled from 'styled-components';
import TAB from '../constants/Tab';
import MainContainer from '../styles/layout';
import SearchNav from '../components/Search/SearchNav';
import SubtitleSection from '../components/Search/SubtitleSection';
import BookDiscussionTab from '../components/Search/BookDiscussionTab';
import ProConDiscussionTab from '../components/Search/ProConDiscussionTab';
import BookDiscussionCard from '../components/BookDiscussion/BookDiscussionCard';
import ProConDiscussionSearchCard from '../components/Search/ProConDiscussionSearchCard';

import { TabContext } from '../context/TabContext';
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
  const { currentTab } = useContext(TabContext);
  const [bookDiscussionPosts] =
    useState<BookDiscussionData>(BOOKDISCUSSION_DUMMY);
  const [proConDiscussionPosts] = useState<ProConDiscussionData>(
    PROCONDISCUSSION_DUMMY,
  );

  return (
    <>
      <SearchNav />
      <MainContainer>
        {currentTab === TAB.ALL && (
          <>
            <SubtitleSection subtitle={TAB.BOOK_DISCUSSION} postCount={1234} />
            <BookDiscussionCardContainer>
              {bookDiscussionPosts.data.slice(0, 3).map((post) => (
                <BookDiscussionCard bookDiscussionData={post} key={post.id} />
              ))}
            </BookDiscussionCardContainer>
            <Divider />
            <SubtitleSection
              subtitle={TAB.PROCON_DISCUSSION}
              postCount={4321}
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
        {currentTab === TAB.BOOK_DISCUSSION && (
          <BookDiscussionTab
            posts={bookDiscussionPosts.data}
            paginationInfo={bookDiscussionPosts.pageInfo}
          />
        )}
        {currentTab === TAB.PROCON_DISCUSSION && (
          <ProConDiscussionTab
            posts={proConDiscussionPosts.posts}
            paginationInfo={proConDiscussionPosts.pageInfo}
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
