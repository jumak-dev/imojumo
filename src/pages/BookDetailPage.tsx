import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { GoBook } from 'react-icons/go';
import { GrNext } from 'react-icons/gr';
import { useRecoilValue } from 'recoil';
import Loading from '../components/UI/Loading/Loading';
import MainContainer from '../styles/layout';
import { alignCenter } from '../styles/shared';
import BookInformation from '../components/BookDetail/BookInformation';
import RelatedBookDiscussion from '../components/BookDetail/RelatedBookDiscussion';
import { jwtAtom } from '../recoil/atoms';
import useAladinBook from '../hooks/aladin/useAladinBook';
import useBookDetail from '../hooks/bookDetail/useBookDetail';

function BookDetailPage() {
  const { bookId } = useParams() as { bookId: string };
  const token = useRecoilValue(jwtAtom) ?? '';

  const { data: bookInfo } = useAladinBook({
    parameter: 'ItemLookUp.aspx',
    ItemId: bookId,
  });

  const {
    data: discussionInfo,
    isLoading,
    error,
  } = useBookDetail({
    isbn: bookId,
    token,
  });

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>에러 발생!</div>;
  }

  return (
    <MainContainer>
      <BookInformation bookInfo={bookInfo?.item[0]} />
      <SubtitleBox>
        <Subtitle>
          관련 독서토론 <BookIcon />
        </Subtitle>
        <ShowMoreLink to="/book-discussion">
          더보기 <NextIcon />
        </ShowMoreLink>
      </SubtitleBox>
      <DiscussionSection>
        {discussionInfo?.posts.map((post) => (
          <RelatedBookDiscussion post={post} />
        ))}
      </DiscussionSection>
    </MainContainer>
  );
}

const SubtitleBox = styled.div`
  ${alignCenter}
  justify-content: space-between;
  height: 50px;
  padding: 0 24px;
  border-radius: 8px;
  background-color: var(--color-subtitle-bg-color);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const Subtitle = styled.h3`
  ${alignCenter}
  font-weight: 700;
  font-size: var(--font-size-l);
`;

const BookIcon = styled(GoBook)`
  margin-left: 8px;
  font-size: 24px;
  color: var(--color-primary-mint);
`;

const ShowMoreLink = styled(Link)`
  ${alignCenter}
`;

const NextIcon = styled(GrNext)`
  margin-left: 4px;
  font-size: 15px;
`;

const DiscussionSection = styled.section`
  & > a:last-child {
    border: none;
  }
`;

export default BookDetailPage;
