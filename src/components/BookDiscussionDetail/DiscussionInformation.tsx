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
import { alignCenter, colFlex, rowFlex } from '../../styles/shared';
import useModal from '../../hooks/useModal';
import { jwtAtom, userInfoAtom } from '../../recoil/atoms';
import isLoginSelector from '../../recoil/seletors';
import {
  deleteBookDiscussion,
  likeBookDiscussion,
  unlikeBookDiscussion,
} from '../../apis/bookDiscussion';

interface DiscussioninformationProps {
  id: number;
  author: string;
  title: string;
  content: string;
  createdAt: string;
  postLikedByUser: boolean;
}

function DiscussionInformation({
  id,
  author,
  title,
  content,
  createdAt,
  postLikedByUser,
}: DiscussioninformationProps) {
  const navigate = useNavigate();

  const isLogin = useRecoilValue(isLoginSelector);
  const token = useRecoilValue(jwtAtom) ?? '';
  const user = useRecoilValue(userInfoAtom);
  const { username } = user;

  const imageUrl =
    'https://blog.kakaocdn.net/dn/MBm88/btquzG0dVpE/GODaepUxVikHoWEkClaPV1/img.png';
  const discussionDate = dayjs(createdAt).format('YYYY-MM-DD');

  const [showModal, handleShowModal, handleCloseModal] = useModal();
  const [isLike, setIsLike] = useState(postLikedByUser);

  const handleEdit = () => {
    // 게시글 수정 추가 예정
    navigate('/posts/new/book-discussion');
  };

  const handleDelete = () => {
    deleteBookDiscussion(id, token);
    navigate('/book-discussion');
  };

  const handleLike = () => {
    if (!isLogin) {
      navigate('/login');
      return;
    }

    if (isLike) {
      unlikeBookDiscussion(id, token);
      setIsLike(false);
    } else {
      likeBookDiscussion(id, token);
      setIsLike(true);
    }
  };

  return (
    <DiscussionContainer>
      <UserProfile
        avatar={imageUrl}
        alt="프로필 이미지"
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
  font-weight: bold;
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
  width: 100%;
  height: 100%;
  padding: 16px;
  border-radius: 8px;
  color: var(--color-content-text);
  background-color: var(--color-inputbox-bg);
  line-height: 20px;
`;

export default DiscussionInformation;
