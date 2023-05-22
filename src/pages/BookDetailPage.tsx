import { useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { GoBook } from 'react-icons/go';
import { GrNext } from 'react-icons/gr';
import Loading from '../components/UI/Loading/Loading';
import MainContainer from '../styles/layout';
import { alignCenter } from '../styles/shared';
import BookInformation from '../components/BookDetail/BookInformation';
import RelatedBookDiscussion from '../components/BookDetail/RelatedBookDiscussion';
import { jwtAtom } from '../recoil/atoms';
import useAladinBook from '../hooks/aladin/useAladinBook';
import useBookDetail from '../hooks/bookDetail/useBookDetail';
import { TabContext } from '../context/TabContext';
import TAB from '../constants/Tab';

function BookDetailPage() {
  const navigate = useNavigate();
  const { setCurrentTab } = useContext(TabContext);

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

  const handleShowMoreClick = () => {
    setCurrentTab(TAB.BOOK_DISCUSSION);
    navigate(`/search?isbn=${bookInfo?.item[0].isbn}&page=1`);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <MainContainer>
      <BookInformation bookInfo={bookInfo?.item[0]} />
      <SubtitleBox>
        <Subtitle>
          관련 독서토론 <BookIcon />
        </Subtitle>
        <ShowMoreButton onClick={handleShowMoreClick}>
          더보기 <NextIcon />
        </ShowMoreButton>
      </SubtitleBox>
      {error ? (
        <InformationText>
          관련 독서토론이 존재하지 않습니다
          <BookDiscussionLink to="/book-discussion">
            다른 독서토론 보러 가기
          </BookDiscussionLink>
        </InformationText>
      ) : (
        <DiscussionSection>
          {discussionInfo?.posts.map((post) => (
            <RelatedBookDiscussion key={post.id} post={post} />
          ))}
        </DiscussionSection>
      )}
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

const ShowMoreButton = styled.button`
  ${alignCenter}
  font-size: var(--font-size-m);
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

const InformationText = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  height: 200px;
  font-size: 18px;
`;

const BookDiscussionLink = styled(Link)`
  color: var(--color-placeholder);

  &:hover {
    color: var(--color-primary-pink);
  }
`;

export default BookDetailPage;
