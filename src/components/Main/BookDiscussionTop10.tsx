import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { flex } from '../../styles/shared';
import BookDiscussionTop10Card from './BookDiscussionTop10Card';
// import useBookDiscussion from '../../hooks/bookDiscussion/useBookDisscussion';
import { BookDiscussionInfo, GetBookDiscussion } from '../../types';

interface BookDiscussionTop10Props {
  bookDiscussion: GetBookDiscussion | undefined;
}

function BookDiscussionTop10({ bookDiscussion }: BookDiscussionTop10Props) {
  const PAGESUM = bookDiscussion?.posts.length || 10;
  const PERPAGE = 5;

  const perPost: BookDiscussionInfo[] =
    bookDiscussion?.posts.slice(0, PERPAGE) || [];
  const [posts, setPosts] = useState<BookDiscussionInfo[]>(perPost);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.floor(PAGESUM / PERPAGE) + 1 : prevIndex - 1,
    );
  };

  const hadleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === PAGESUM % PERPAGE ? 0 : prevIndex + 1,
    );
  };

  useEffect(() => {
    if (bookDiscussion) {
      setPosts(
        bookDiscussion.posts.slice(currentIndex, currentIndex + PERPAGE),
      );
    }
  }, [currentIndex]);

  return (
    <BookDiscussionTop10Container>
      <ArrowLeftIcon onClick={handlePrev} />
      {posts.map((post) => (
        <BookDiscussionTop10Card post={post} />
      ))}
      <ArrowRightIcon onClick={hadleNext} />
    </BookDiscussionTop10Container>
  );
}

const BookDiscussionTop10Container = styled.section`
  ${flex};
  margin: 10px;
`;

const arrowIconCSS = css`
  font-size: 35px;
  cursor: pointer;
  color: #cacaca;

  &:hover {
    color: #b8b8b8;
    transform: scale(0.9);
  }
`;

const ArrowLeftIcon = styled(SlArrowLeft)`
  ${arrowIconCSS}
`;

const ArrowRightIcon = styled(SlArrowRight)`
  ${arrowIconCSS}
`;

export default BookDiscussionTop10;
