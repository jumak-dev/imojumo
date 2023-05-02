import { useRef } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { BsPersonCircle } from 'react-icons/bs';
import UserProfile from '../../UI/UserProfile/UserProfile';
import { AlignCenter, ColFlex, RowFlex } from '../../../styles/shared';
import useModal from '../../../hooks/useModal';
import useOnClickOutside from '../../../hooks/useOnClickOutside';

function ProfileModal() {
  const imageUrl =
    'https://blog.kakaocdn.net/dn/MBm88/btquzG0dVpE/GODaepUxVikHoWEkClaPV1/img.png';

  const modalRef = useRef<HTMLDivElement>(null);
  const [showModal, handleShowModal, handleCloseModal] = useModal();

  useOnClickOutside(modalRef, handleCloseModal);

  return (
    <ProfileModalContainer>
      <Profile onClick={handleShowModal}>
        <Nickname>유아유아짱</Nickname>
        <UserIcon />
      </Profile>
      {showModal && (
        <ProfileModalCard ref={modalRef}>
          <ProfileBox>
            <ProfileItem>프로필</ProfileItem>
            <UserProfile
              avatar={imageUrl}
              alt="프로필 이미지"
              itemGap="10px"
              nickname="yua77"
              size="md"
            />
          </ProfileBox>
          <MyPageLink to="/mypage">마이페이지</MyPageLink>
          <ProfileItem onClick={handleCloseModal}>로그아웃</ProfileItem>
        </ProfileModalCard>
      )}
    </ProfileModalContainer>
  );
}

const ProfileModalContainer = styled.div`
  ${RowFlex}
  position: relative;
  z-index: 1;
`;

const Profile = styled.div`
  ${AlignCenter}
  gap: 8px;
`;

const Nickname = styled.span`
  font-weight: 700;
  font-size: var(--font-size-l);
`;

const UserIcon = styled(BsPersonCircle)`
  font-size: 24px;
`;

const modalCSS = css`
  content: '';
  position: absolute;
  right: 12px;
  border-style: solid;
  border-width: 0 16px 20px 17.5px;
`;

const ProfileModalCard = styled.div`
  ${ColFlex}
  position: absolute;
  top: 40px;
  right: 0;
  width: 300px;
  background-color: var(--white);
  border-radius: 16px;
  border: 1px solid var(--color-borderbottom-color);

  &:after {
    ${modalCSS}
    top: -18.5px;
    border-color: #ffffff transparent;
  }

  &:before {
    ${modalCSS}
    top: -20px;
    border-color: var(--color-borderbottom-color) transparent;
  }
`;

const ProfileBox = styled.div`
  padding-bottom: 16px;
`;

const ProfileItem = styled.div`
  ${RowFlex}
  justify-content: space-between;
  padding: 16px;
  font-weight: 600;
  font-size: var(--font-size-l);
`;

const MyPageLink = styled(Link)`
  ${RowFlex}
  justify-content: space-between;
  padding: 16px;
  border-top: 1px solid var(--color-borderbottom-color);
  border-bottom: 1px solid var(--color-borderbottom-color);
  font-weight: 600;
  font-size: var(--font-size-l);
`;

export default ProfileModal;
