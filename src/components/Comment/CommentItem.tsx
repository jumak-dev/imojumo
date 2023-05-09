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
import Input from '../UI/Input/Input';
import useInputs from '../../hooks/useInputs';
import useModal from '../../hooks/useModal';
import Modal from '../UI/Modal/Modal';

interface CommentItemProps {
  comment: Comment;
  isProConDiscussion?: boolean;
  onUpdate: (id: number, content: string) => void;
  onDelete: (id: number) => void;
  onClickLike: (id: number) => void;
  onCancelLike: (id: number) => void;
  onClickDislike: (id: number) => void;
  onCancelDislike: (id: number) => void;
}

function CommentItem({
  comment,
  isProConDiscussion = false,
  onUpdate,
  onDelete,
  onClickLike,
  onCancelLike,
  onClickDislike,
  onCancelDislike,
}: CommentItemProps) {
  const imageUrl =
    'https://blog.kakaocdn.net/dn/MBm88/btquzG0dVpE/GODaepUxVikHoWEkClaPV1/img.png';
  const commentDate = dayjs(comment.createdAt).format('YYYY-MM-DD HH:mm');

  const [{ content }, onChange, reset] = useInputs({
    content: comment.content,
  });
  const [showModal, handleShowModal, handleCloseModal] = useModal();

  const [isEdit, setIsEdit] = useState(false);
  const [isLike, setIsLike] = useState(comment.likedByUser);
  const [isDislike, setIsDislike] = useState(comment.dislikedByUser);
  const [likeCount, setLikeCount] = useState(comment.like);
  const [dislikeCount, setDislikeCount] = useState(comment.dislike);

  const handleEdit = () => {
    setIsEdit(!isEdit);
    reset();
  };

  const handleCommentUpdate = () => {
    onUpdate(comment.id, content);
    setIsEdit(false);
  };

  const handleDelete = () => {
    onDelete(comment.id);
  };

  const handleLike = () => {
    if (isLike) {
      onCancelLike(comment.id);
      setIsLike(false);
      setLikeCount((prevState) => prevState - 1);
    } else {
      onClickLike(comment.id);
      setIsLike(true);
      setLikeCount((prevState) => prevState + 1);
    }
  };

  const handleDislike = () => {
    if (isDislike) {
      onCancelDislike(comment.id);
      setIsDislike(false);
      setDislikeCount((prevState) => prevState - 1);
    } else {
      onClickDislike(comment.id);
      setIsDislike(true);
      setDislikeCount((prevState) => prevState + 1);
    }
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
          {isEdit ? (
            <Button onClick={handleCommentUpdate}>등록</Button>
          ) : (
            <Button onClick={handleEdit}>수정</Button>
          )}
          <BsDot />
          {isEdit ? (
            <Button onClick={handleEdit}>취소</Button>
          ) : (
            <Button onClick={handleShowModal}>삭제</Button>
          )}
        </ButtonContainer>
      </CommentInfomation>
      {isEdit ? (
        <Input name="content" value={content} onChange={onChange} />
      ) : (
        <CommentContent>{content}</CommentContent>
      )}
      <ButtonContainer>
        <LikeButton aria-label="좋아요" onClick={handleLike}>
          {isLike ? <AiFillLike /> : <AiOutlineLike />}
        </LikeButton>
        <CountText>{likeCount}</CountText>
        <DislikeButton aria-label="싫어요" onClick={handleDislike}>
          {isDislike ? <AiFillDislike /> : <AiOutlineDislike />}
        </DislikeButton>
        <CountText>{dislikeCount}</CountText>
      </ButtonContainer>
      <Modal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        title="댓글 삭제"
        content="댓글을 삭제하시겠습니까?"
        yesCallback={handleDelete}
      />
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
