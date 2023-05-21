import { useContext, Suspense } from 'react';
import styled from 'styled-components';

import TAB from '../constants/Tab';
import MainContainer from '../styles/layout';
import SearchNav from '../components/Search/SearchNav';
import BookDiscussionTab from '../components/Search/BookDiscussionTab';
import ProConDiscussionTab from '../components/Search/ProConDiscussionTab';

import { TabContext } from '../context/TabContext';
import AllTab from '../components/Search/AllTab';
import Loading from '../components/UI/Loading/Loading';

function SearchPage() {
  const { currentTab } = useContext(TabContext);

  return (
    <>
      <SearchNav />
      <MainContainer>
        <SearchPageWarapper>
          <Suspense fallback={<Loading />}>
            {
              {
                [TAB.ALL]: <AllTab />,
                [TAB.BOOK_DISCUSSION]: <BookDiscussionTab />,
                [TAB.PROCON_DISCUSSION]: <ProConDiscussionTab />,
              }[currentTab]
            }
          </Suspense>
        </SearchPageWarapper>
      </MainContainer>
    </>
  );
}

const SearchPageWarapper = styled.article`
  min-height: 100%;
  flex: 1;
`;

export default SearchPage;
