import styled, { css } from 'styled-components';
import { useRecoilValue } from 'recoil';
import { GoBook } from 'react-icons/go';
import { AiOutlineRise } from 'react-icons/ai';
import { flex, alignCenter } from '../styles/shared';
import MainContainer from '../styles/layout';
import RecommendedBookCard from '../components/Main/RecommendedBookCard';
import BookDiscussionTop10 from '../components/Main/BookDiscussionTop10';
import NewSection from '../components/Main/BookCategorySection/NewSection';
import URL from '../constants/URL';

import { jwtAtom } from '../recoil/atoms';

import useAladinBook from '../hooks/aladin/useAladinBook';
import useProConDiscussion from '../hooks/proConDiscussion/useProConDiscussion';
import useBookDiscussion from '../hooks/bookDiscussion/useBookDisscussion';

function HomePage() {
  const token = useRecoilValue(jwtAtom);

  const { data: recommendedBook } = useAladinBook({
    parameter: 'ItemList.aspx',
    queryType: 'ItemNewSpecial',
    maxResults: 3,
  });

  const { data: bookDiscussion } = useBookDiscussion({
    page: 1,
    limit: 3,
    token: token || '',
  });

  const { data: proConDiscussion } = useProConDiscussion({
    page: 1,
    limit: 3,
  });

  const { data: newBook } = useAladinBook({
    parameter: 'ItemList.aspx',
    queryType: 'ItemNewAll',
    maxResults: 3,
  });

  const { data: bookDiscussionTop10 } = useBookDiscussion({
    page: 1,
    limit: 10,
    orderBy: 'popular',
    token: token || '',
  });

  return (
    <MainContainer>
      <TitleContainer>
        <Subtitle>오늘의 추천 도서</Subtitle>
        <BookIcon />
      </TitleContainer>
      <FlexContainer>
        {recommendedBook?.item.map((book) => (
          <RecommendedBookCard recommendedBook={book} key={book.itemId} />
        ))}
      </FlexContainer>
      <TitleContainer>
        <Subtitle>Top 10 독서토론</Subtitle>
        <RiseIcon />
      </TitleContainer>
      {bookDiscussionTop10 && (
        <BookDiscussionTop10 bookDiscussion={bookDiscussionTop10} />
      )}
      <FlexContainer>
        <NewSection
          subtitle="독서토론"
          bookDiscussion={bookDiscussion?.posts}
          imageUrl={
            bookDiscussion?.posts[0].book?.cover || URL.DEFAULT_BOOK_IMAGE_URL
          }
        />
        <NewSection
          subtitle="찬반토론"
          proConDiscussion={proConDiscussion?.posts}
          imageUrl={URL.DEFAULT_BOOK_IMAGE_URL}
        />
        <NewSection
          subtitle="신간도서"
          newBook={newBook?.item}
          imageUrl={newBook?.item[0].cover || URL.DEFAULT_BOOK_IMAGE_URL}
        />
      </FlexContainer>
    </MainContainer>
  );
}

const TitleContainer = styled.div`
  ${alignCenter}
`;

const Subtitle = styled.h2`
  display: inline;
  font-size: var(--font-size-l);
  font-weight: bold;
  margin: 80px 0 30px 20px;
`;

const FlexContainer = styled.article`
  ${flex}
  margin: 10px;
`;

const iconCSS = css`
  font-size: 27px;
  margin: 52px 10px 0;
`;

const BookIcon = styled(GoBook)`
  ${iconCSS}
  color: var(--color-primary-mint);
`;

const RiseIcon = styled(AiOutlineRise)`
  ${iconCSS}
  color: var(--color-primary-pink);
`;

export default HomePage;
