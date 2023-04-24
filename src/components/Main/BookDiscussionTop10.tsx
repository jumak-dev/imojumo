import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import { Card } from '../UI/Card/Card';
import { ColFlex, Flex, truncateTextCSS } from '../../styles/shared';

function BookDiscussionTop10() {
  const [isLiked, setIsLiked] = useState(false);
  const title = '미드나잇 라이브러리';

  // 임시로 사용하는 이미지 URL입니다!
  const imageUrl =
    'https://image.aladin.co.kr/product/28448/6/cover500/k212835618_2.jpg';

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
      <CardImage src={imageUrl} alt="독서토론 도서 이미지" />
      <CardTitleWrap>
        <CardTitle>{title}</CardTitle>
      </CardTitleWrap>
    </CardContainer>
  );
}

const CardContainer = styled(Link)`
  ${Card}
  ${ColFlex}
  border: none;
  width: 175px;
  height: 240px;
  margin: 10px 15px;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 1px, rgba(0, 0, 0, 0.12) 0px 1px 2px;
`;

const CardImage = styled.img`
  height: 70%;
  object-fit: cover;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
`;

const CardTitleWrap = styled.div`
  ${Flex}
  flex: 1;
`;

const CardTitle = styled.p`
  ${truncateTextCSS}
  -webkit-line-clamp: 3;
  margin: 5px 10px;
  font-weight: bold;
  font-size: var(--font-size-m);
`;

const iconCSS = css`
  position: absolute;
  font-size: 25px;
  right: 13px;
  top: 15px;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.6));
`;

export const UnlikeIcon = styled(FiHeart)`
  ${iconCSS}
  color: var(--white);

  &:hover {
    color: var(--color-heart);
  }
`;

export const LikeIcon = styled(FaHeart)`
  ${iconCSS}
  color: var(--color-heart);

  &:hover {
    color: #ff1c1c;
  }
`;

export default BookDiscussionTop10;
