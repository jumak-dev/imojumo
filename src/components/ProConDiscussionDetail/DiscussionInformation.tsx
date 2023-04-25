import styled, { css } from 'styled-components';
import { BsDot } from 'react-icons/bs';
import { Card } from '../UI/Card/Card';
import UserProfile from '../UI/UserProfile/UserProfile';
import ProgressBar from '../UI/ProgressBar/ProgressBar';
import { AlignCenter, ColFlex, Flex, RowFlexCenter } from '../../styles/shared';

function DiscussionInformation() {
  const userImageUrl =
    'https://www.thechooeok.com/common/img/default_profile.png';
  const noneImageUrl =
    'https://www.pngitem.com/pimgs/m/80-806189_red-x-circle-icon-hd-png-download.png';

  return (
    <DiscussionContainer>
      <ButtonContainer>
        <Button>수정</Button>
        <BsDot />
        <Button>삭제</Button>
      </ButtonContainer>
      <DiscussionInfoContainer>
        <ProfileBox>
          <ProLeader>찬성측</ProLeader>
          <UserProfile
            avatar={noneImageUrl}
            alt="찬성측 프로필 이미지"
            itemGap="24px"
            nickname=""
            size="md"
          />
        </ProfileBox>
        <DiscussionInfo>
          <DiscussionTitle>5억년 버튼을 누를 것인가?</DiscussionTitle>
          <DiscussionDate>2023.04.10</DiscussionDate>
          <ProgressBar
            barWidth="520px"
            barHeight="30px"
            value="53"
            size="md"
            isDisplayContent
          />
        </DiscussionInfo>
        <ProfileBox>
          <ConLeader>반대측</ConLeader>
          <UserProfile
            avatar={userImageUrl}
            alt="반대측 프로필 이미지"
            itemGap="24px"
            nickname="yua77"
            size="md"
          />
        </ProfileBox>
      </DiscussionInfoContainer>
    </DiscussionContainer>
  );
}

const DiscussionContainer = styled.section`
  ${Card}
  ${ColFlex}
  padding: 32px;
  margin: 40px 20px;
  gap: 24px;
`;

const DiscussionInfoContainer = styled.div`
  ${RowFlexCenter}
  gap: 80px;
`;

const DiscussionInfo = styled.div`
  ${ColFlex}
  align-items: center;
  gap: 12px;
`;

const DiscussionTitle = styled.h2`
  font-weight: bold;
  font-size: var(--font-size-xxl);
`;

const DiscussionDate = styled.span`
  margin-bottom: 8px;
  color: var(--color-content-text);
`;

const ButtonContainer = styled.div`
  ${AlignCenter}
  margin-left: auto;
`;

const Button = styled.button`
  padding: 2px;
  color: var(--color-content-text);
`;

const ProfileBox = styled.div`
  ${ColFlex}
  align-items: center;
  flex-shrink: 0;
  gap: 24px;
`;

const proConCSS = css`
  ${Flex}
  width: 60px;
  height: 30px;
  color: white;
  border-radius: 20px;
`;

const ProLeader = styled.span`
  ${proConCSS}
  background-color: var(--color-primary-mint);
`;

const ConLeader = styled.span`
  ${proConCSS}
  background-color: var(--color-primary-pink);
`;

export default DiscussionInformation;
