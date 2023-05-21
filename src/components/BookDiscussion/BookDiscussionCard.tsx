import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import { AiFillHeart } from 'react-icons/ai';
import { Card } from '../UI/Card/Card';
import LikeIcon from '../UI/Icon/LikeIcon';
import UnlikeIcon from '../UI/Icon/UnlikeIcon';
import { BookDiscussionInfo } from '../../types';
import { alignCenter, truncateTextCSS } from '../../styles/shared';
import { jwtAtom } from '../../recoil/atoms';

import useCreateLike from '../../hooks/postLike/useCreateLike';
import useDeleteLike from '../../hooks/postLike/useDeleteLike';

interface BookDiscussionCardProps {
  bookDiscussionData: BookDiscussionInfo;
}

// 임시로 사용하는 이미지 URL입니다!
export const imageUrl =
  'https://image.aladin.co.kr/product/28448/6/cover500/k212835618_2.jpg';

export const profileUrl =
  'https://blog.kakaocdn.net/dn/MBm88/btquzG0dVpE/GODaepUxVikHoWEkClaPV1/img.png';

function BookDiscussionCard({ bookDiscussionData }: BookDiscussionCardProps) {
  const [isLiked, setIsLiked] = useState(bookDiscussionData.postLikedByUser);
  const bookDiscussionDate = dayjs(bookDiscussionData.createdAt).format(
    'YYYY.MM.DD',
  );

  const token = useRecoilValue(jwtAtom);
  const { mutate: createLike } = useCreateLike({
    onError: (error) => {
      console.log(error);
    },
  });

  const { mutate: deleteLike } = useDeleteLike({
    onError: (error) => {
      console.log(error);
    },
  });

  const handleLikeClick = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (isLiked) {
      await deleteLike({
        postId: bookDiscussionData.id,
        token,
      });
    } else {
      await createLike({
        postId: bookDiscussionData.id,
        token,
      });
    }

    setIsLiked(!isLiked);
  };

  return (
    <CardContainer
      to={`/book-discussions/${bookDiscussionData.id}`}
      radius="8px"
    >
      {!isLiked ? (
        <UnlikeIcon onClick={handleLikeClick} size={25} />
      ) : (
        <LikeIcon onClick={handleLikeClick} size={25} />
      )}
      <BookImage src={imageUrl} />
      <DiscussionInfoContainer>
        <DiscussionInfoBox>
          <DiscussionTitle>{bookDiscussionData.title}</DiscussionTitle>
          <DiscussionDescription>
            {bookDiscussionData.content}
          </DiscussionDescription>
          <DiscussionDate>{bookDiscussionDate}</DiscussionDate>
        </DiscussionInfoBox>
        <UserInfoBox>
          <AuthorProfile src={profileUrl} alt="프로필 이미지" />
          <AuthorNickname>{bookDiscussionData.author}</AuthorNickname>
          <DiscussionLikeBox>
            <DiscussionLikeIcon />
            <DiscussionLikeCount>
              {bookDiscussionData.likeCount}
            </DiscussionLikeCount>
          </DiscussionLikeBox>
        </UserInfoBox>
      </DiscussionInfoContainer>
    </CardContainer>
  );
}

const CardContainer = styled(Link)`
  ${Card}
  width: 270px;
  height: 380px;
  overflow: hidden;
  position: relative;
`;

const DiscussionInfoContainer = styled.div`
  height: 50%;
`;

const BookImage = styled.img`
  width: 100%;
  height: 50%;
  object-fit: cover;
`;

const DiscussionInfoBox = styled.div`
  height: 75%;
  padding: 10px;
  border-bottom: 1px solid var(--color-borderbox-line);
`;

const UserInfoBox = styled.div`
  ${alignCenter}
  height: 25%;
  padding: 10px;
`;

const DiscussionTitle = styled.h3`
  ${truncateTextCSS}
  font-size: var(--font-size-l);
  font-weight: bold;
  margin-bottom: 20px;
`;

const DiscussionDescription = styled.p`
  ${truncateTextCSS}
  -webkit-line-clamp: 3;
  font-size: var(--font-size-m);
  color: var(--color-content-text);
  padding-bottom: 10px;
  height: 40%;
`;

const DiscussionDate = styled.p`
  font-size: var(--font-size-xs);
  color: var(--color-content-text);
  padding: 10px 0;
`;

const AuthorProfile = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
`;

const AuthorNickname = styled.span`
  font-size: var(--font-size-xs);
  font-weight: bold;
`;

const DiscussionLikeBox = styled.div`
  ${alignCenter}
  position: absolute;
  right: 10px;
  bottom: 10px;
`;

const DiscussionLikeIcon = styled(AiFillHeart)`
  font-size: 25px;
  padding-right: 10px;
`;

const DiscussionLikeCount = styled.span`
  font-size: var(--font-size-xs);
`;

export default BookDiscussionCard;
