import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Card } from '../UI/Card/Card';
import LikeIcon from '../UI/Icon/LikeIcon';
import UnlikeIcon from '../UI/Icon/UnlikeIcon';
import { colFlex, flex, truncateTextCSS } from '../../styles/shared';
import { BookDiscussionInfo } from '../../types';

interface BookDiscussionTop10CardProps {
  post: BookDiscussionInfo;
}

function BookDiscussionTop10Card({ post }: BookDiscussionTop10CardProps) {
  const [isLiked, setIsLiked] = useState(post.postLikedByUser);

  const handleLikeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLiked(!isLiked);
  };

  return (
    <CardContainer to="/book-dissscusion" radius="20px" margin="5px">
      {!isLiked ? (
        <UnlikeIcon onClick={handleLikeClick} />
      ) : (
        <LikeIcon onClick={handleLikeClick} />
      )}
      <CardImage src={post.book?.cover} alt="독서토론 도서 이미지" />
      <CardTitleWrap>
        <CardTitle>{post.title}</CardTitle>
      </CardTitleWrap>
    </CardContainer>
  );
}

const CardContainer = styled(Link)`
  ${Card}
  ${colFlex}
  border: none;
  width: 175px;
  height: 240px;
  margin: 10px 15px;
  position: relative;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    transform: scale(1.08);
  }
`;

const CardImage = styled.img`
  height: 70%;
  object-fit: contain;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
`;

const CardTitleWrap = styled.div`
  ${flex}
  flex: 1;
`;

const CardTitle = styled.p`
  ${truncateTextCSS}
  -webkit-line-clamp: 3;
  margin: 5px 10px;
  font-weight: bold;
  font-size: var(--font-size-m);
`;

export default BookDiscussionTop10Card;
