import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import styled from 'styled-components';
import { AiFillHeart } from 'react-icons/ai';
import isLoginSelector from '../../recoil/seletors';

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
  handleUpdateLike: (postId: number, likeCount: number) => void;
}

export const profileUrl =
  'https://blog.kakaocdn.net/dn/MBm88/btquzG0dVpE/GODaepUxVikHoWEkClaPV1/img.png';

function BookDiscussionCard({
  bookDiscussionData,
  handleUpdateLike,
}: BookDiscussionCardProps) {
  const [isLiked, setIsLiked] = useState(bookDiscussionData.postLikedByUser);
  const bookDiscussionDate = dayjs(bookDiscussionData.createdAt).format(
    'YYYY.MM.DD',
  );

  const postId = bookDiscussionData.id;
  const token = useRecoilValue(jwtAtom);
  const isLogin = useRecoilValue(isLoginSelector);

  const { mutate: createLike } = useCreateLike({
    onSuccess: (likeCount) => {
      if (!likeCount) return;
      handleUpdateLike(postId, likeCount.likeCount);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const { mutate: deleteLike } = useDeleteLike({
    onSuccess: (likeCount) => {
      if (!likeCount) return;
      handleUpdateLike(postId, likeCount?.likeCount);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleCreateLike = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (!isLiked) {
      await createLike({
        postId: bookDiscussionData.id,
        token,
      });
    }

    setIsLiked(!isLiked);
  };

  const handleDeleteLike = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (isLiked) {
      await deleteLike({
        postId: bookDiscussionData.id,
        token,
      });
    }

    setIsLiked(!isLiked);
  };

  // ! 프로필 업데이트 되면 추가하기
  return (
    <CardContainer
      to={`/book-discussion/${bookDiscussionData.id}`}
      radius="8px"
    >
      {isLogin && !isLiked && (
        <UnlikeIcon onClick={handleCreateLike} size={25} />
      )}
      {isLogin && isLiked && <LikeIcon onClick={handleDeleteLike} size={25} />}
      <BookImage src={bookDiscussionData.book?.cover} />
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
