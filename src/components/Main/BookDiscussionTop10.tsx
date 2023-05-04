import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Card } from '../UI/Card/Card';
import LikeIcon from '../UI/Icon/LikeIcon';
import UnlikeIcon from '../UI/Icon/UnlikeIcon';
import { colFlex, flex, truncateTextCSS } from '../../styles/shared';

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
  ${colFlex}
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

export default BookDiscussionTop10;
