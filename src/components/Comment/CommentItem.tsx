import { Dispatch, SetStateAction, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
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
import { jwtAtom, userInfoAtom } from '../../recoil/atoms';
import isLoginSelector from '../../recoil/seletors';
import {
  updateComment,
  deleteComment,
  likeComment,
  cancelCommentLike,
  dislikeComment,
  cancelCommentDislike,
} from '../../apis/comment';

interface CommentItemProps {
  comment: Comment;
  isProConDiscussion?: boolean;
  setComments: Dispatch<SetStateAction<Comment[]>>;
}

function CommentItem({
  comment,
  isProConDiscussion = false,
  setComments,
}: CommentItemProps) {
  const navigate = useNavigate();

  const isLogin = useRecoilValue(isLoginSelector);
  const token = useRecoilValue(jwtAtom) ?? '';
  const user = useRecoilValue(userInfoAtom);
  const { username } = user;

  const {
    id,
    author,
    content,
    like,
    dislike,
    updatedAt,
    likedByUser,
    dislikedByUser,
    isPro,
  } = comment;

  const imageUrl =
    'https://blog.kakaocdn.net/dn/MBm88/btquzG0dVpE/GODaepUxVikHoWEkClaPV1/img.png';
  const commentDate = dayjs(updatedAt).format('YYYY-MM-DD HH:mm');

  const [{ value }, onChange, reset] = useInputs({
    value: content,
  });
  const [showModal, handleShowModal, handleCloseModal] = useModal();

  const [isEdit, setIsEdit] = useState(false);
  const [isLike, setIsLike] = useState(likedByUser);
  const [isDislike, setIsDislike] = useState(dislikedByUser);
  const [likeCount, setLikeCount] = useState(like);
  const [dislikeCount, setDislikeCount] = useState(dislike);

  const handleEdit = () => {
    setIsEdit(!isEdit);
    reset();
  };

  const handleCommentUpdate = async () => {
    const data = await updateComment(id, token, value);
    setComments((prevComments) =>
      prevComments.map((prevComment) =>
        prevComment.id === id
          ? { ...prevComment, content: data.content }
          : prevComment,
      ),
    );
    setIsEdit(false);
  };

  const handleDelete = async () => {
    await deleteComment(id, token);
    setComments((prevComments) =>
      prevComments.filter((prevComment) => prevComment.id !== id),
    );
  };

  const handleLike = async () => {
    if (!isLogin) {
      navigate('/login');
      return;
    }

    if (isDislike) {
      await cancelCommentDislike(id, token);
      setIsDislike(false);
      setDislikeCount((prevCount) => prevCount - 1);
    }

    if (isLike) {
      await cancelCommentLike(id, token);
      setIsLike(false);
      setLikeCount((prevCount) => prevCount - 1);
    } else {
      await likeComment(id, token);
      setIsLike(true);
      setLikeCount((prevCount) => prevCount + 1);
    }
  };

  const handleDislike = async () => {
    if (!isLogin) {
      navigate('/login');
      return;
    }

    if (isLike) {
      await cancelCommentLike(id, token);
      setIsLike(false);
      setLikeCount((prevCount) => prevCount - 1);
    }

    if (isDislike) {
      await cancelCommentDislike(id, token);
      setIsDislike(false);
      setDislikeCount((prevCount) => prevCount - 1);
    } else {
      await dislikeComment(id, token);
      setIsDislike(true);
      setDislikeCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <CommentItemContainer>
      <CommentInformation>
        <InformationContainer>
          <Profile src={imageUrl} alt="프로필 이미지" />
          <InformationWrapper>
            <UserInfoBox>
              <Nickname>{author}</Nickname>
              {isProConDiscussion &&
                (isPro ? (
                  <ProConLeaderTag isAgree tagSize="sm">
                    찬성측
                  </ProConLeaderTag>
                ) : (
                  <ProConLeaderTag isAgree={false} tagSize="sm">
                    반대측
                  </ProConLeaderTag>
                ))}
            </UserInfoBox>
            <CommentDate>{commentDate}</CommentDate>
          </InformationWrapper>
        </InformationContainer>
        {username === author && (
          <ButtonContainer>
            {isEdit ? (
              <>
                <Button onClick={handleCommentUpdate}>등록</Button>
                <BsDot />
                <Button onClick={handleEdit}>취소</Button>
              </>
            ) : (
              <>
                <Button onClick={handleEdit}>수정</Button>
                <BsDot />
                <Button onClick={handleShowModal}>삭제</Button>
              </>
            )}
          </ButtonContainer>
        )}
      </CommentInformation>
      {isEdit ? (
        <Input name="value" value={value} onChange={onChange} />
      ) : (
        <CommentContent>{value}</CommentContent>
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

const CommentInformation = styled.div`
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
