import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import dayjs from 'dayjs';
import styled from 'styled-components';
import { BsDot } from 'react-icons/bs';
import { Card } from '../UI/Card/Card';
import Modal from '../UI/Modal/Modal';
import UserProfile from '../UI/UserProfile/UserProfile';
import ProgressBar from '../UI/ProgressBar/ProgressBar';
import ProConLeaderTag from '../UI/Tag/ProConLeaderTag';
import {
  colFlex,
  colFlexCenter,
  alignCenter,
  rowFlexCenter,
  profileBoxCSS,
} from '../../styles/shared';
import useModal from '../../hooks/useModal';
import URL from '../../constants/URL';
import { ProConLeader } from '../../types';
import getRate from '../../utils/Rate';
import { jwtAtom, userInfoAtom } from '../../recoil/atoms';
import { deleteProConDiscussion } from '../../apis/proConDiscussion';

interface DiscussioninformationProps {
  id: number;
  author: string;
  title: string;
  createdAt: string;
  proCount: number;
  conCount: number;
  proLeader: ProConLeader | null;
  conLeader: ProConLeader | null;
}

function DiscussionInformation({
  id,
  author,
  title,
  createdAt,
  proCount,
  conCount,
  proLeader,
  conLeader,
}: DiscussioninformationProps) {
  const navigate = useNavigate();

  const token = useRecoilValue(jwtAtom) ?? '';
  const user = useRecoilValue(userInfoAtom);
  const { username } = user;

  const [showModal, handleShowModal, handleCloseModal] = useModal();

  const discussionDate = dayjs(createdAt).format('YYYY-MM-DD');

  const proConSum = proCount + conCount;
  const proConRate = String(getRate(proCount, proConSum));

  const proLeaderName = proLeader?.username;
  const proLeaderAvatar = proLeader?.avatarUrl;

  const conLeaderName = conLeader?.username;
  const conLeaderAvatar = proLeader?.avatarUrl;

  const handleEdit = () => {
    // 게시글 수정 추가 예정
    navigate('/posts/new/pro-con-discussion');
  };

  const handleDelete = () => {
    deleteProConDiscussion(id, token);
    navigate('/pro-con-discussion');
  };

  return (
    <DiscussionContainer>
      {username === author && (
        <ButtonContainer>
          <Button onClick={handleEdit}>수정</Button>
          <BsDot />
          <Button onClick={handleShowModal}>삭제</Button>
        </ButtonContainer>
      )}
      <DiscussionInfoContainer>
        <ProfileBox>
          <ProConLeaderTag isAgree tagSize="m">
            찬성측
          </ProConLeaderTag>
          <UserProfile
            avatar={proLeaderAvatar || URL.NONE_AVATA_URL}
            alt="찬성측 프로필 이미지"
            itemGap="24px"
            nickname={proLeaderName}
            size="md"
          />
        </ProfileBox>
        <DiscussionInfo>
          <DiscussionTitle>{title}</DiscussionTitle>
          <DiscussionDate>{discussionDate}</DiscussionDate>
          <ProgressBar
            barWidth="520px"
            barHeight="30px"
            value={proConRate}
            size="md"
            isDisplayContent
          />
        </DiscussionInfo>
        <ProfileBox>
          <ProConLeaderTag isAgree={false} tagSize="m">
            반대측
          </ProConLeaderTag>
          <UserProfile
            avatar={conLeaderAvatar || URL.NONE_AVATA_URL}
            alt="반대측 프로필 이미지"
            itemGap="24px"
            nickname={conLeaderName}
            size="md"
          />
        </ProfileBox>
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
  ${colFlex}
  padding: 32px;
  margin: 40px 20px;
  gap: 24px;
`;

const DiscussionInfoContainer = styled.div`
  ${rowFlexCenter}
  gap: 80px;
`;

const DiscussionInfo = styled.div`
  ${colFlexCenter}
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
  ${alignCenter}
  margin-left: auto;
`;

const Button = styled.button`
  padding: 2px;
  color: var(--color-content-text);
`;

const ProfileBox = styled.div`
  ${profileBoxCSS}
`;

export default DiscussionInformation;
