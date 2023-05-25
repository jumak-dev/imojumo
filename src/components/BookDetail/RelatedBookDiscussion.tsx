import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import styled, { css } from 'styled-components';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { alignCenter, colFlexCenter, rowFlex } from '../../styles/shared';
import { BookDetailPost } from '../../types';

interface RelatedBookDiscussionProps {
  post: BookDetailPost;
}

function RelatedBookDiscussion({ post }: RelatedBookDiscussionProps) {
  const discussionDate = dayjs(post.createdAt).format('YYYY-MM-DD');

  return (
    <DiscussionContainer to={`/book-discussion/${post.id}`}>
      <DiscussionBox>
        <DiscussionTitle>{post.title}</DiscussionTitle>
        <DiscussionDate>{discussionDate}</DiscussionDate>
      </DiscussionBox>
      <LikeBox>
        <LikeCount>{post.likeCount}</LikeCount>
        {post.postLikedByUser ? <LikeIcon /> : <UnlikeIcon />}
      </LikeBox>
    </DiscussionContainer>
  );
}

const DiscussionContainer = styled(Link)`
  ${rowFlex}
  justify-content: space-between;
  height: 100px;
  padding: 0 24px;
  border-bottom: 1px solid var(--color-borderbottom-color);

  &:hover {
    background-color: var(--color-inputbox-bg);
  }
`;

const DiscussionBox = styled.div`
  ${colFlexCenter}
  gap: 12px;
`;

const DiscussionTitle = styled.span`
  font-weight: 700;
`;

const DiscussionDate = styled.span`
  font-size: var(--font-size-sm);
  color: var(--color-content-text);
`;

const LikeBox = styled.div`
  ${alignCenter}
  gap: 16px;
`;

const LikeCount = styled.span`
  font-weight: 700;
`;

const heartCSS = css`
  font-size: 25px;
  color: var(--color-heart);
`;

const LikeIcon = styled(AiFillHeart)`
  ${heartCSS}
`;

const UnlikeIcon = styled(AiOutlineHeart)`
  ${heartCSS}
`;

export default RelatedBookDiscussion;
