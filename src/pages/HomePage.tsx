import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { GoBook } from 'react-icons/go';
import { AiOutlineRise } from 'react-icons/ai';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { flex, alignCenter } from '../styles/shared';
import MainContainer from '../styles/layout';
import RecommendedBookCard from '../components/Main/RecommendedBookCard';
import BookDiscussionTop10 from '../components/Main/BookDiscussionTop10';
import NewSection from '../components/Main/BookCategorySection/NewSection';
import {
  AladinBookSearchItem,
  BookDiscussionInfo,
  ProConDiscussionInfo,
} from '../types';

function HomePage() {
  const { VITE_API_URL, VITE_ALADIN_API_TTB } = import.meta.env;
  const [recommendedBook, setRecommendedBook] = useState<
    AladinBookSearchItem[]
  >([]);
  const [bookDiscussion, setBookDiscussion] = useState<BookDiscussionInfo[]>(
    [],
  );
  const [proConDiscussion, setProConDiscussion] = useState<
    ProConDiscussionInfo[]
  >([]);
  const [newBook, setNewBook] = useState<AladinBookSearchItem[]>([]);

  //! 추천 도서
  const getRecommendedBook = async (): Promise<AladinBookSearchItem[]> => {
    const url = `/api/ItemList.aspx?ttbkey=${VITE_ALADIN_API_TTB}&QueryType=ItemNewSpecial&start=1&MaxResults=3&SearchTarget=Book&output=js&Version=20131101`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': '12',
      },
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }

    const data = await response.json();
    return data.item;
  };

  //! 독서토론
  const getBookDiscussion = async (): Promise<BookDiscussionInfo[]> => {
    const url = `${VITE_API_URL}/book-discussions?page=1&limit=3`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': '12',
      },
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }

    const data = await response.json();
    return data.posts;
  };

  //! 찬반토론
  const getProConDiscussion = async (): Promise<ProConDiscussionInfo[]> => {
    const url = `${VITE_API_URL}/pro-con-discussions?page=1&limit=3`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': '12',
      },
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }

    const data = await response.json();
    return data.posts;
  };

  //! 신간 도서
  const getNewBook = async (): Promise<AladinBookSearchItem[]> => {
    const url = `/api/ItemList.aspx?ttbkey=${VITE_ALADIN_API_TTB}&QueryType=ItemNewAll&start=1&MaxResults=3&SearchTarget=Book&output=js&Version=20131101`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': '12',
      },
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }

    const data = await response.json();
    return data.item;
  };

  useEffect(() => {
    try {
      getRecommendedBook().then((res) => setRecommendedBook(res));
      getBookDiscussion().then((res) => setBookDiscussion(res));
      getProConDiscussion().then((res) => setProConDiscussion(res));
      getNewBook().then((res) => setNewBook(res));
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <MainContainer>
      <TitleContainer>
        <Subtitle>오늘의 추천 도서</Subtitle>
        <BookIcon />
      </TitleContainer>
      <FlexContainer>
        {recommendedBook.map((book) => (
          <RecommendedBookCard recommendedBook={book} key={book.itemId} />
        ))}
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
        <NewSection subtitle="독서토론" bookDiscussion={bookDiscussion} />
        <NewSection subtitle="찬반토론" proConDiscussion={proConDiscussion} />
        <NewSection subtitle="신간도서" newBook={newBook} />
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

const FlexContainer = styled.div`
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

// 캐러셸 추가하면 삭제
const IconWrap = styled.button`
  color: #cacaca;

  &:hover {
    color: #b8b8b8;
  }
`;

export default HomePage;
