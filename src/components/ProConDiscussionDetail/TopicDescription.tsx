import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled, { css } from 'styled-components';
import ButtonBox from '../UI/Button/Button';
import isLoginSelector from '../../recoil/seletors';

interface TopicDescriptionProps {
  content: string;
  isPro: boolean;
  isVote: boolean;
  onVote: (voteValue: boolean) => void;
  onRevote: (voteValue: boolean) => void;
}

function TopicDescription({
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
      <DescriptionText>{content}</DescriptionText>
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
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 40px 20px;
`;

const DescriptionText = styled.p`
  line-height: 20px;
  color: var(--color-content-text);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const buttonActiveCSS = css`
  pointer-events: none;
`;

const buttonDeactivateCSS = css`
  filter: brightness(75%);
`;

const ProConButton = styled(ButtonBox)<{ isVote: boolean; isActive: boolean }>`
  width: 80px;
  height: 40px;
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);

  ${({ isVote, isActive }) =>
    isVote && (isActive ? buttonActiveCSS : buttonDeactivateCSS)}
`;

export default TopicDescription;
