import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import UserProfile from '../UI/UserProfile/UserProfile';
import ButtonBox from '../UI/Button/Button';
import {
  buttonActiveCSS,
  buttonDeactivateCSS,
  colFlex,
  discussionContentCSS,
  rowFlex,
  rowFlexCenter,
} from '../../styles/shared';
import isLoginSelector from '../../recoil/seletors';

interface TopicDescriptionProps {
  author: string;
  avatarUrl: string;
  content: string;
  isPro: boolean;
  isVote: boolean;
  onVote: (voteValue: boolean) => void;
  onRevote: (voteValue: boolean) => void;
}

function TopicDescription({
  author,
  avatarUrl,
  content,
  isPro,
  isVote,
  onVote,
  onRevote,
}: TopicDescriptionProps) {
  const navigate = useNavigate();
  const isLogin = useRecoilValue(isLoginSelector);

  const handleVote = (voteValue: boolean) => {
    if (!isLogin) {
      navigate('/login');
      return;
    }

    if (!isVote) {
      onVote(voteValue);
      return;
    }

    onRevote(voteValue);
  };

  return (
    <DescriptionContainer>
      <DescriptionBox>
        <UserProfile
          avatar={avatarUrl}
          alt={`${author} 프로필 이미지`}
          itemGap="10px"
          nickname={author}
          size="sm"
        />
        <DescriptionText>{content}</DescriptionText>
      </DescriptionBox>
      <ButtonContainer>
        <ProConButton
          type="button"
          buttonType="buttonLeft"
          buttonColor="mint"
          buttonSize="l"
          isVote={isVote}
          isActive={isPro}
          onClick={() => handleVote(true)}
        >
          찬성
        </ProConButton>
        <ProConButton
          type="button"
          buttonType="buttonRight"
          buttonColor="pink"
          buttonSize="l"
          isVote={isVote}
          isActive={!isPro}
          onClick={() => handleVote(false)}
        >
          반대
        </ProConButton>
      </ButtonContainer>
    </DescriptionContainer>
  );
}

const DescriptionContainer = styled.section`
  ${colFlex}
  gap: 24px;
  margin: 40px 20px;
`;

const DescriptionBox = styled.div`
  ${rowFlex}
  gap: 16px;
`;

const DescriptionText = styled.p`
  ${discussionContentCSS}
`;

const ButtonContainer = styled.div`
  ${rowFlexCenter}
`;

const ProConButton = styled(ButtonBox)<{ isVote: boolean; isActive: boolean }>`
  width: 80px;
  height: 40px;
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);

  ${({ isVote, isActive }) =>
    isVote && (isActive ? buttonActiveCSS : buttonDeactivateCSS)}
`;

export default TopicDescription;
