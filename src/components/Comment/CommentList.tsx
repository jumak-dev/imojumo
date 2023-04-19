import { useState } from 'react';
import styled, { css } from 'styled-components';
import {
  AiFillDislike,
  AiFillLike,
  AiOutlineDislike,
  AiOutlineLike,
} from 'react-icons/ai';
import { BsDot } from 'react-icons/bs';
import { AlignCenter, ColFlex } from '../../styles/shared';

function CommentList() {
  const imageUrl =
    'https://blog.kakaocdn.net/dn/MBm88/btquzG0dVpE/GODaepUxVikHoWEkClaPV1/img.png';

  const comments = [
    {
      id: 1,
      author: 'Park',
      content:
        '갑자기 불상한척? 한탕해서 편하게 살려고 주식투자해서 손실난걸 왜 불상한양 기사쓰냐? 잔고 5000만원 남아서 라면 먹는게 불상한거냐? 참 웃기네! 젊은얘들 진짜 연기잘함!  자기가 투자할땐 내돈 내맘대로 하는데 왠 오지랖? 투자해서 실패하면 라면 먹는다 불상한척?? 한탕 성공했으면? 외제차 사고 명품사고 여행다녔겠지?? 남들 비웃으면서!! 젊은얘들 징징거리는건 무조건 걸러 들어라! 전부 연기고 거짓말이니!!',
      like: 4,
      dislike: 0,
      createdAt: '2023.02.03 18:51:09',
      updatedAt: '2023.02.03 18:51:09',
    },
    {
      id: 2,
      author: 'Hyo',
      content:
        '주식은 공부해서 되는게 아닙니다.. 그날 그날 치고 빠지는게 답입니다..',
      like: 10,
      dislike: 5,
      createdAt: '2023.02.03 18:51:09',
      updatedAt: '2023.02.03 18:51:09',
    },
    {
      id: 3,
      author: 'Potato',
      content:
        '라면 맛있잖아. 요즘은 종류도 엄청 많아서 골라먹는 재미까지 있다. 식은밥 말아먹으면 더 맛있지. 쌀 살 돈 없다는 소리는 하지말고...',
      like: 9,
      dislike: 2,
      createdAt: '2023.02.03 18:51:09',
      updatedAt: '2023.02.03 18:51:09',
    },
  ];

  const [isLike, setIsLike] = useState(false);
  const [isDislike, setIsDislike] = useState(false);

  const handleLikeClick = () => {
    setIsLike(!isLike);
  };

  const handleDislikeClick = () => {
    setIsDislike(!isDislike);
  };

  return (
    <CommentListContainer>
      {comments.map((comment) => (
        <CommentListItem key={comment.id}>
          <CommentInfomation>
            <InformationContainer>
              <Profile src={imageUrl} alt="프로필 이미지" />
              <InformationWrapper>
                <Nickname>{comment.author}</Nickname>
                <CommentDate>{comment.updatedAt}</CommentDate>
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
            <LikeButton onClick={handleLikeClick}>
              {isLike ? <AiFillLike /> : <AiOutlineLike />}
            </LikeButton>
            <CountText>{comment.like}</CountText>
            <DislikeButton onClick={handleDislikeClick}>
              {isDislike ? <AiFillDislike /> : <AiOutlineDislike />}
            </DislikeButton>
            <CountText>{comment.dislike}</CountText>
          </ButtonContainer>
        </CommentListItem>
      ))}
    </CommentListContainer>
  );
}

const CommentListContainer = styled.ul`
  ${ColFlex}
  gap: 16px;
  margin: 40px 20px;
`;

const CommentListItem = styled.li`
  ${ColFlex}
  gap: 16px;
  border-bottom: 1px solid var(--color-borderbottom-color);
  &:last-child {
    border: none;
  }
`;

const CommentInfomation = styled.div`
  ${AlignCenter}
  justify-content: space-between;
`;

const InformationContainer = styled.div`
  ${AlignCenter}
  gap: 16px;
`;

const Profile = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

const InformationWrapper = styled.div`
  ${ColFlex}
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
  ${AlignCenter}
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

export default CommentList;
