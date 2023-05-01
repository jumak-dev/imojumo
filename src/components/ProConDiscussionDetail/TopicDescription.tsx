import styled from 'styled-components';
import ButtonBox from '../UI/Button/Button';

function TopicDescription() {
  return (
    <DescriptionContainer>
      <DescriptionText>
        5억년 버튼을 누르면 아무것도 없는 광활하고 어두운 빈 공간에 5억년동안
        갇힌 채 1분 1초를 생생히 느끼며 지내야 합니다. 잠을 잘수도, 뭔가를
        먹을수도 없지만 그로 인한 정신적, 신체적 스트레스는 없습니다. 5억년간
        신체는 건강하게 유지됩니다. 5억년이 지나면 버튼을 누른 직후로 돌아옴과
        동시에 5억년간의 기억이 전부 사라지며 100억원을 받습니다. 실제로 5억년의
        시간을 지낸 후이지만 당신은 버튼을 누르고 바로 100억원이 당신의 손에
        쥐어지는 것처럼 느낍니다. 옆의 당신의 친구는 벌써 버튼을 눌러 즉시
        지급된 100억원을 얻고 기뻐합니다. 당신은 이 설명을 듣고도 5억년 버튼을
        누르시겠습니까?
      </DescriptionText>
      <ButtonContainer>
        <ProConButton
          type="button"
          buttonType="buttonLeft"
          buttonColor="mint"
          buttonSize="l"
        >
          찬성
        </ProConButton>
        <ProConButton
          type="button"
          buttonType="buttonRight"
          buttonColor="pink"
          buttonSize="l"
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

const ProConButton = styled(ButtonBox)`
  width: 80px;
  height: 40px;
`;

export default TopicDescription;
