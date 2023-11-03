import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import dayjs from 'dayjs';
import styled from 'styled-components';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BsDot } from 'react-icons/bs';
import { Card } from '../UI/Card/Card';
import Modal from '../UI/Modal/Modal';
import UserProfile from '../UI/UserProfile/UserProfile';
import {
  alignCenter,
  colFlex,
  discussionContentCSS,
  rowFlex,
} from '../../styles/shared';
import useModal from '../../hooks/useModal';
import { jwtAtom, userInfoAtom } from '../../recoil/atoms';
import isLoginSelector from '../../recoil/seletors';

import useDeleteBookDiscussion from '../../hooks/bookDiscussion/useDeleteBookDiscission';
import useCreateLike from '../../hooks/postLike/useCreateLike';
import useDeleteLike from '../../hooks/postLike/useDeleteLike';

interface DiscussioninformationProps {
  id: number;
  author: string;
  avatarUrl: string;
  title: string;
  content: string;
  createdAt: string;
  postLikedByUser: boolean;
}

function DiscussionInformation({
  id,
  author,
  avatarUrl,
  title,
  content,
  createdAt,
  postLikedByUser,
}: DiscussioninformationProps) {
  const navigate = useNavigate();

  const isLogin = useRecoilValue(isLoginSelector);
  const token = useRecoilValue(jwtAtom) ?? '';
  const { username } = useRecoilValue(userInfoAtom);

  const discussionDate = dayjs(createdAt).format('YYYY.MM.DD');

  const [showModal, handleShowModal, handleCloseModal] = useModal();
  const [isLike, setIsLike] = useState(postLikedByUser);

  const { mutate: deleteBookDiscussion } = useDeleteBookDiscussion({
    onSuccess: () => {
      navigate('/book-discussion');
    },
  });

  const { mutate: createLike } = useCreateLike({
    onSuccess: () => {
      setIsLike(true);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const { mutate: deleteLike } = useDeleteLike({
    onSuccess: () => {
      setIsLike(false);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleEdit = () => {
    navigate(`/book-discussion/${id}/edit`);
  };

  const handleDelete = () => {
    deleteBookDiscussion({ id, token });
  };

  const handleLike = () => {
    if (!isLogin) {
      navigate('/login');
      return;
    }

    if (isLike) {
      deleteLike({ postId: id, token });
    } else {
      createLike({ postId: id, token });
    }
  };

  return (
    <DiscussionContainer>
      <UserProfile
        avatar={avatarUrl}
        alt={`${author} 프로필 이미지`}
        itemGap="10px"
        nickname={author}
        size="lz"
      />
      <DiscussionInfoContainer>
        <DiscussionHeader>
          <DiscussionInfo>
            <DiscussionTitle>{title}</DiscussionTitle>
            <DiscussionDate>{discussionDate}</DiscussionDate>
          </DiscussionInfo>
          <ButtonContainer>
            {username === author && (
              <>
                <Button onClick={handleEdit}>수정</Button>
                <BsDot />
                <Button onClick={handleShowModal}>삭제</Button>
              </>
            )}
            <PostLikeButton aria-label="찜하기" onClick={handleLike}>
              {isLike ? <AiFillHeart /> : <AiOutlineHeart />}
            </PostLikeButton>
          </ButtonContainer>
        </DiscussionHeader>
        <DiscussionContent>{content}</DiscussionContent>
      </DiscussionInfoContainer>
      <Modal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        title="토론 삭제"
        content="토론을 삭제하시겠습니까?"
        yesCallback={handleDelete}
      />
    </DiscussionContainer>
  );
}

const DiscussionContainer = styled.section`
  ${Card}
  ${rowFlex}
  align-items: flex-start;
  padding: 32px;
  margin: 40px 20px;
  gap: 24px;
`;

const DiscussionInfoContainer = styled.div`
  ${colFlex}
  flex: 1;
  gap: 16px;
  width: 100%;
`;

const DiscussionHeader = styled.div`
  ${alignCenter}
  justify-content: space-between;
`;

const DiscussionInfo = styled.div`
  ${rowFlex}
  align-items: flex-end;
  gap: 12px;
`;

const DiscussionTitle = styled.h2`
  font-weight: 700;
  font-size: var(--font-size-xl);
`;

const DiscussionDate = styled.span`
  color: var(--color-content-text);
`;

const ButtonContainer = styled.div`
  ${alignCenter}
`;

const Button = styled.button`
  padding: 2px;
  color: var(--color-content-text);
`;

const PostLikeButton = styled.button`
  padding: 0 4px;
  font-size: 25px;
  color: var(--color-heart);
`;

const DiscussionContent = styled.p`
  ${discussionContentCSS}
`;

export default DiscussionInformation;
