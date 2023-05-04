import { useState } from 'react';
import styled from 'styled-components';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BsDot } from 'react-icons/bs';
import { Card } from '../UI/Card/Card';
import UserProfile from '../UI/UserProfile/UserProfile';
import { alignCenter, colFlex, rowFlex } from '../../styles/shared';

function DiscussionInfomation() {
  const imageUrl =
    'https://blog.kakaocdn.net/dn/MBm88/btquzG0dVpE/GODaepUxVikHoWEkClaPV1/img.png';

  const [isLike, setIsLike] = useState(false);

  const handleLikeClick = () => {
    setIsLike(!isLike);
  };

  return (
    <DiscussionContainer>
      <UserProfile
        avatar={imageUrl}
        alt="프로필 이미지"
        itemGap="10px"
        nickname="yua77"
        size="lz"
      />
      <DiscussionInfoContainer>
        <DiscussionHeader>
          <DiscussionInfo>
            <DiscussionTitle>미드나잇 라이브러리 대박</DiscussionTitle>
            <DiscussionDate>2023.04.10</DiscussionDate>
          </DiscussionInfo>
          <ButtonContainer>
            <Button>수정</Button>
            <BsDot />
            <Button>삭제</Button>
            <PostLikeButton aria-label="찜하기" onClick={handleLikeClick}>
              {isLike ? <AiFillHeart /> : <AiOutlineHeart />}
            </PostLikeButton>
          </ButtonContainer>
        </DiscussionHeader>
        <DiscussionContent>
          울랄라솰랄라울랄라솰랄라울랄라솰랄라울랄라솰랄라울랄라솰랄라울랄라솰랄라울랄라솰랄라솰랄라라울랄라솰랄라울랄라솰랄라울랄라솰랄라울랄라솰랄라울랄라솰랄라울랄라솰랄라울랄라솰랄라솰랄라라울랄라솰랄라울랄라솰랄라울랄라솰랄라울랄라솰랄라울랄라솰랄라울랄라솰랄라울랄라솰랄라솰랄라라울랄라솰랄라울랄라솰랄라울랄라솰랄라울랄라솰랄라울랄라솰랄라울랄라솰랄라울랄라솰랄라솰랄라라울랄라솰랄라울랄라솰랄라울랄라솰랄라울랄라솰랄라울랄라솰랄라울랄라솰랄라울랄라솰랄라울랄라솰랄라
          울랄라솰랄라울랄라솰랄라울랄라솰랄라울랄라솰랄라울랄라솰랄라울랄라솰랄라울랄라솰랄라솰랄라라울랄라솰랄라울랄라솰랄라울랄라솰랄라울랄라솰랄라울랄라솰랄라울랄라솰랄라울랄라솰랄라솰랄라라울랄라솰랄라울랄라솰랄라울랄라솰랄라울랄라솰랄라울랄라솰랄라울랄라솰랄라울랄라솰랄라솰랄라라울랄라솰랄라울랄라솰랄라울랄라솰랄라울랄라솰랄라울랄라솰랄라울랄라솰랄라울랄라솰랄라솰랄라라울랄라솰랄라울랄라솰랄라울랄라솰랄라울랄라솰랄라울랄라솰랄라울랄라솰랄라울랄라솰랄라울랄라솰랄라
        </DiscussionContent>
      </DiscussionInfoContainer>
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

export default DiscussionInfomation;
