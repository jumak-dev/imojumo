import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Card } from '../UI/Card/Card';
import URL from '../../constants/URL';
import getRate from '../../utils/Rate';
import { ProConDiscussionInfo } from '../../types';
import UserProfile from '../UI/UserProfile/UserProfile';
import ProConLeaderTag from '../UI/Tag/ProConLeaderTag';
import ProgressBar from '../UI/ProgressBar/ProgressBar';
import {
  flex,
  colFlex,
  profileBoxCSS,
  truncateTextCSS,
} from '../../styles/shared';

interface ProConDiscussionCardProps {
  procondiscussionData: ProConDiscussionInfo;
}

function ProConDiscussionCard({
  procondiscussionData,
}: ProConDiscussionCardProps) {
  const proLeader = procondiscussionData.proLeader?.username;
  const conLeader = procondiscussionData.conLeader?.username;
  const { proCount, conCount } = procondiscussionData;

  return (
    <CardContainer to={`/pro-con-discussion/${procondiscussionData.id}`}>
      <ProfileBox>
        <ProConLeaderTag isAgree tagSize="m">
          찬성측
        </ProConLeaderTag>
        <UserProfile
          avatar={
            procondiscussionData.proLeader?.avatarUrl || URL.NONE_AVATA_URL
          }
          alt="찬성측 프로필 이미지"
          itemGap="20px"
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
          value={String(getRate(proCount, proCount + conCount))}
          size="md"
        />
      </DiscussionInfoWrap>
      <ProfileBox>
        <ProConLeaderTag isAgree={false} tagSize="m">
          반대측
        </ProConLeaderTag>
        <UserProfile
          avatar={
            procondiscussionData.conLeader?.avatarUrl || URL.NONE_AVATA_URL
          }
          alt="찬성측 프로필 이미지"
          itemGap="20px"
          nickname={conLeader || ''}
          size="md"
        />
      </ProfileBox>
    </CardContainer>
  );
}

const CardContainer = styled(Link)`
  ${Card};
  ${flex}
  width: 970px;
  height: 250px;
  padding: 30px;
  margin: 40px 0;
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
  flex: 1;
  height: 100%;
  padding-top: 10px;
  justify-content: flex-start;
`;

const DiscussionInfoWrap = styled.div`
  ${colFlex};
  gap: 20px;
  align-items: center;
  width: 580px;
`;

export default ProConDiscussionCard;
