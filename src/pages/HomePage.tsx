import styled, { css } from 'styled-components';
import { GoBook } from 'react-icons/go';
import { AiOutlineRise } from 'react-icons/ai';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { Flex, AlignCenter } from '../styles/shared';
import MainContainer from '../styles/layout';
import RecommendedBookCard from '../components/Main/RecommendedBookCard';
import BookDiscussionTop10 from '../components/Main/BookDiscussionTop10';
import NewSection from '../components/Main/BookCategorySection/NewSection';

function HomePage() {
  return (
    <MainContainer>
      <TitleContainer>
        <Subtitle>오늘의 추천 도서</Subtitle>
        <BookIcon />
      </TitleContainer>
      <FlexContainer>
        <RecommendedBookCard />
        <RecommendedBookCard />
        <RecommendedBookCard />
      </FlexContainer>
      <TitleContainer>
        <Subtitle>Top 10 독서토론</Subtitle>
        <RiseIcon />
      </TitleContainer>
      <FlexContainer>
        {/* 캐러셸 추가하면 삭제 */}
        <IconWrap>
          <SlArrowLeft size={35} />
        </IconWrap>
        <BookDiscussionTop10 />
        <BookDiscussionTop10 />
        <BookDiscussionTop10 />
        <BookDiscussionTop10 />
        <BookDiscussionTop10 />
        {/* 캐러셸 추가하면 삭제 */}
        <IconWrap>
          <SlArrowRight size={35} />
        </IconWrap>
      </FlexContainer>
      <FlexContainer>
        <NewSection subtitle="독서토론" isProConDiscussion={false} />
        <NewSection subtitle="찬반토론" isProConDiscussion />
        <NewSection subtitle="신간도서" isProConDiscussion={false} />
      </FlexContainer>
    </MainContainer>
  );
}

const TitleContainer = styled.div`
  ${AlignCenter}
`;

const Subtitle = styled.h2`
  display: inline;
  font-size: var(--font-size-l);
  font-weight: bold;
  margin: 80px 0 30px 20px;
`;

const FlexContainer = styled.div`
  margin: 10px;
  ${Flex}
`;

const IconCSS = css`
  font-size: 27px;
  margin: 52px 10px 0;
`;

const BookIcon = styled(GoBook)`
  ${IconCSS}
  color: var(--color-primary-mint);
`;

const RiseIcon = styled(AiOutlineRise)`
  ${IconCSS}
  color: var(--color-primary-pink);
`;

// 캐러셸 추가하면 삭제
const IconWrap = styled.button`
  color: #cacaca;

  &:hover {
    color: #b8b8b8;
  }
`;

export default HomePage;
