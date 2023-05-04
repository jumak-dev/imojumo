import { useState } from 'react';
import dayjs from 'dayjs';
import styled, { css } from 'styled-components';
import {
  AiFillDislike,
  AiFillLike,
  AiOutlineDislike,
  AiOutlineLike,
} from 'react-icons/ai';
import { BsDot } from 'react-icons/bs';
import ProConLeaderTag from '../UI/Tag/ProConLeaderTag';
import { alignCenter, colFlex } from '../../styles/shared';
import { Comment } from '../../types';

interface CommentItemProps {
  comment: Comment;
  isProConDiscussion?: boolean;
}

function CommentItem({
  comment,
  isProConDiscussion = false,
}: CommentItemProps) {
  const imageUrl =
    'https://blog.kakaocdn.net/dn/MBm88/btquzG0dVpE/GODaepUxVikHoWEkClaPV1/img.png';
  const commentDate = dayjs(comment.createdAt).format('YYYY-MM-DD HH:mm');

  const [isLike, setIsLike] = useState(false);
  const [isDislike, setIsDislike] = useState(false);

  const handleLikeClick = () => {
    setIsLike(!isLike);
  };

  const handleDislikeClick = () => {
    setIsDislike(!isDislike);
  };

  return (
    <CommentItemContainer>
      <CommentInfomation>
        <InformationContainer>
          <Profile src={imageUrl} alt="프로필 이미지" />
          <InformationWrapper>
            <UserInfoBox>
              <Nickname>{comment.author}</Nickname>
              {isProConDiscussion &&
                (comment.isPro ? (
                  <ProConLeaderTag isAgree tagSize="sm">
                    찬성측
                  </ProConLeaderTag>
                ) : (
                  <ProConLeaderTag isAgree tagSize="sm">
                    반대측
                  </ProConLeaderTag>
                ))}
            </UserInfoBox>
            <CommentDate>{commentDate}</CommentDate>
          </InformationWrapper>
        </InformationContainer>
        <ButtonContainer>
          <Button>수정</Button>
          <BsDot />
          <Button>삭제</Button>
        </ButtonContainer>
      </CommentInfomation>
      <CommentContent>{comment.content}</CommentContent>
      <ButtonContainer>
        <LikeButton aria-label="좋아요" onClick={handleLikeClick}>
          {isLike ? <AiFillLike /> : <AiOutlineLike />}
        </LikeButton>
        <CountText>{comment.like}</CountText>
        <DislikeButton aria-label="싫어요" onClick={handleDislikeClick}>
          {isDislike ? <AiFillDislike /> : <AiOutlineDislike />}
        </DislikeButton>
        <CountText>{comment.dislike}</CountText>
      </ButtonContainer>
    </CommentItemContainer>
  );
}

const CommentItemContainer = styled.li`
  ${colFlex}
  gap: 16px;
  border-bottom: 1px solid var(--color-borderbottom-color);
  &:last-child {
    border: none;
  }
`;

const CommentInfomation = styled.div`
  ${alignCenter}
  justify-content: space-between;
`;

const InformationContainer = styled.div`
  ${alignCenter}
  gap: 16px;
`;

const Profile = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

const InformationWrapper = styled.div`
  ${colFlex}
  gap: 8px;
`;

const UserInfoBox = styled.div`
  ${alignCenter}
  gap: 8px;
`;

const Nickname = styled.strong`
  font-weight: bold;
  font-size: var(--font-size-l);
`;

const CommentDate = styled.p`
  font-size: var(--font-size-sm);
  color: var(--color-content-text);
`;

const ButtonContainer = styled.div`
  ${alignCenter}
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 2px;
  color: var(--color-content-text);
`;

const CommentContent = styled.p`
  line-height: 20px;
  color: var(--color-content-text);
`;

const CountText = styled.p`
  margin-left: 4px;
  font-weight: 600;
`;

const likesCSS = css`
  width: 24px;
  height: 24px;
  font-size: 18px;
`;

const LikeButton = styled.button`
  ${likesCSS}
  color: var(--color-primary-mint);
`;

const DislikeButton = styled.button`
  ${likesCSS}
  margin-left: 12px;
  color: var(--color-primary-pink);
`;

export default CommentItem;
