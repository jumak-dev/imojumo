import React, { useState } from 'react';
import styled from 'styled-components';
import { FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import { LinkCardContainer } from '../UI/Card/Card';
import { ColFlex, Flex } from '../../styles/shared';

function BookDiscussionTop10() {
  const [isLiked, setIsLiked] = useState(false);
  const title = '미드나잇 라이브러리';

  // 임시로 사용하는 이미지 URL입니다!
  const imageUrl =
    'https://image.aladin.co.kr/product/28448/6/cover500/k212835618_2.jpg';

  const clickLikeHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLiked(!isLiked);
  };

  return (
    <CardContainer
      to="/book-dissscusion"
      width="175px"
      height="240px"
      radius="20px"
      margin="5px"
    >
      {!isLiked ? (
        <LikeIconWrap onClick={clickLikeHandler}>
          <FiHeart size={25} />
        </LikeIconWrap>
      ) : (
        <LikedIconWrap onClick={clickLikeHandler}>
          <FaHeart size={25} />
        </LikedIconWrap>
      )}
      <CardImage src={imageUrl} />
      <CardTitleWrap>
        <CardTitle>
          {title.length > 30 ? `${title.slice(0, 28)}...` : title}
        </CardTitle>
      </CardTitleWrap>
    </CardContainer>
  );
}

const CardContainer = styled(LinkCardContainer)`
  ${ColFlex}
  border: none;
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
  font-size: var(--font-size-m);
  font-weight: bold;
  margin: 5px 10px;
`;

const LikeIconWrap = styled.button`
  color: var(--white);
  position: absolute;
  right: 15px;
  top: 15px;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.6));

  &:hover {
    color: var(--color-heart);
  }
`;

const LikedIconWrap = styled(LikeIconWrap)`
  color: var(--color-heart);

  &:hover {
    color: #ff1c1c;
  }
`;

export default BookDiscussionTop10;
