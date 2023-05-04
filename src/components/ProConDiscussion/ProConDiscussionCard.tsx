import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Card } from '../UI/Card/Card';
import { ProConDiscussionInfo } from '../../types';
import UserProfile from '../UI/UserProfile/UserProfile';
import ProConLeaderTag from '../UI/Tag/ProConLeaderTag';
import ProgressBar from '../UI/ProgressBar/ProgressBar';
import {
  Flex,
  ColFlex,
  profileBoxCSS,
  truncateTextCSS,
} from '../../styles/shared';

interface ProConDiscussionCardProps {
  procondiscussionData: ProConDiscussionInfo;
}

const userImageUrl =
  'https://www.thechooeok.com/common/img/default_profile.png';

const noneImageUrl =
  'https://www.pngitem.com/pimgs/m/80-806189_red-x-circle-icon-hd-png-download.png';

function ProConDiscussionCard({
  procondiscussionData,
}: ProConDiscussionCardProps) {
  const proLeader = procondiscussionData.agreeUser;
  const conLeader = procondiscussionData.disagreeUser;
  const proCount = procondiscussionData.agreeCount;
  const proRate = String(
    (proCount / (proCount + procondiscussionData.disagreeCount)) * 100,
  );

  return (
    <CardContainer to={`/pro-con-discussion/${procondiscussionData.id}`}>
      <ProfileBox>
        <ProConLeaderTag isAgree tagSize="m">
          찬성측
        </ProConLeaderTag>
        <UserProfile
          avatar={userImageUrl || noneImageUrl}
          alt="찬성측 프로필 이미지"
          itemGap="24px"
          nickname={proLeader || ''}
          size="md"
        />
      </ProfileBox>
      <DiscussionInfoWrap>
        <Title>{procondiscussionData.title}</Title>
        <Content>{procondiscussionData.content}</Content>
        <ProgressBar
          isDisplayContent
          barWidth="70%"
          barHeight="20px"
          value={proRate}
          size="md"
        />
      </DiscussionInfoWrap>
      <ProfileBox>
        <ProConLeaderTag isAgree={false} tagSize="m">
          반대측
        </ProConLeaderTag>
        <UserProfile
          avatar={userImageUrl || noneImageUrl}
          alt="찬성측 프로필 이미지"
          itemGap="24px"
          nickname={conLeader || ''}
          size="md"
        />
      </ProfileBox>
    </CardContainer>
  );
}

const CardContainer = styled(Link)`
  ${Card};
  ${Flex}
  gap: 50px;
  width: 970px;
  height: 250px;
  padding: 30px;
  margin: 50px 0;
`;

const Title = styled.h3`
  ${truncateTextCSS};
  font-weight: 600;
  font-size: var(--font-size-xxl);
`;

const Content = styled.p`
  ${truncateTextCSS};
  -webkit-line-clamp: 5;
  font-size: var(--font-size-m);
`;

const ProfileBox = styled.div`
  ${profileBoxCSS}
  height: 100%;
  padding-top: 10px;
  justify-content: flex-start;
`;

const DiscussionInfoWrap = styled.div`
  ${ColFlex};
  gap: 20px;
  align-items: center;
`;

export default ProConDiscussionCard;
