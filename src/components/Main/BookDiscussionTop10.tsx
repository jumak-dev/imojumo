import { useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { flex } from '../../styles/shared';
import BookDiscussionTop10Card from './BookDiscussionTop10Card';
import { BookDiscussionInfo, GetBookDiscussion } from '../../types';

interface BookDiscussionTop10Props {
  bookDiscussion: GetBookDiscussion | undefined;
}

function BookDiscussionTop10({ bookDiscussion }: BookDiscussionTop10Props) {
  const PERPAGE = 5;
  const PAGESUM = bookDiscussion?.posts.length || 10;
  const currentIndexRef = useRef(0);

  const perPost: BookDiscussionInfo[] =
    bookDiscussion?.posts.slice(0, PERPAGE) || [];
  const [posts, setPosts] = useState<BookDiscussionInfo[]>(perPost);

  const handlePrev = () => {
    currentIndexRef.current =
      currentIndexRef.current <= 0
        ? Math.floor(PAGESUM / 2)
        : currentIndexRef.current - 1;
    updatePosts();
  };

  const hadleNext = () => {
    currentIndexRef.current =
      currentIndexRef.current === Math.floor(PAGESUM / 2)
        ? 0
        : currentIndexRef.current + 1;
    updatePosts();
  };

  const updatePosts = () => {
    if (bookDiscussion) {
      setPosts(
        bookDiscussion.posts.slice(
          currentIndexRef.current,
          currentIndexRef.current + PERPAGE,
        ),
      );
    }
  };

  return (
    <BookDiscussionTop10Container>
      <ArrowLeftIcon onClick={handlePrev} />
      {posts.map((post) => (
        <BookDiscussionTop10Card key={post.id} post={post} />
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
