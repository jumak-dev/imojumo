import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled, { css } from 'styled-components';
import { BsPersonCircle } from 'react-icons/bs';
import UserProfile from '../../UI/UserProfile/UserProfile';
import { alignCenter, colFlex, rowFlex } from '../../../styles/shared';
import useModal from '../../../hooks/useModal';
import useOnClickOutside from '../../../hooks/useOnClickOutside';
import { jwtAtom, userInfoAtom } from '../../../recoil/atoms';
import logout from '../../../utils/auth/logout';

function ProfileModal() {
  const navigate = useNavigate();
  const setJwt = useSetRecoilState(jwtAtom);
  const { username, avatarUrl } = useRecoilValue(userInfoAtom);

  const modalRef = useRef<HTMLDivElement>(null);
  const [showModal, handleShowModal, handleCloseModal] = useModal();

  useOnClickOutside(modalRef, handleCloseModal);

  const handleLogout = () => {
    logout();
    setJwt(null);
    handleCloseModal();
    navigate('/');
  };

  return (
    <ProfileModalContainer>
      <Profile onClick={handleShowModal}>
        <Nickname>{username}</Nickname>
        <UserIcon />
      </Profile>
      {showModal && (
        <ProfileModalCard ref={modalRef}>
          <ProfileBox>
            <ProfileItem>프로필</ProfileItem>
            <UserProfile
              avatar={avatarUrl}
              alt={`${username} 프로필 이미지`}
              itemGap="10px"
              nickname={username || ''}
              size="md"
            />
          </ProfileBox>
          <MyPage to="/mypage" onClick={handleCloseModal}>
            마이페이지
          </MyPage>
          <ProfileItem onClick={handleLogout}>로그아웃</ProfileItem>
        </ProfileModalCard>
      )}
    </ProfileModalContainer>
  );
}

const ProfileModalContainer = styled.div`
  ${rowFlex}
  position: relative;
  z-index: 1;
`;

const Profile = styled.div`
  ${alignCenter}
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
  ${colFlex}
  position: absolute;
  top: 40px;
  right: 0;
  width: 300px;
  padding: 0 8px;
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
  ${rowFlex}
  justify-content: space-between;
  padding: 16px;
  font-weight: 600;
  font-size: var(--font-size-l);

  &:last-child {
    cursor: pointer;
  }
`;

const MyPage = styled(Link)`
  ${rowFlex}
  justify-content: space-between;
  padding: 16px;
  border-top: 1px solid var(--color-borderbottom-color);
  border-bottom: 1px solid var(--color-borderbottom-color);
  font-weight: 600;
  font-size: var(--font-size-l);
`;

export default ProfileModal;
