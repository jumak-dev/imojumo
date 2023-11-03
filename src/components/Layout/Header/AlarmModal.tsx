import { useRef } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { BsBell, BsBellFill } from 'react-icons/bs';
import { colFlex, rowFlex } from '../../../styles/shared';
import useModal from '../../../hooks/useModal';
import useOnClickOutside from '../../../hooks/useOnClickOutside';
import useNotification from '../../../hooks/notification/useNotification';
import { jwtAtom } from '../../../recoil/atoms';
import AlarmItem from './AlarmItem';

function AlarmModal() {
  const token = useRecoilValue(jwtAtom) ?? '';

  const modalRef = useRef<HTMLDivElement>(null);
  const [showModal, handleShowModal, handleCloseModal] = useModal();

  useOnClickOutside(modalRef, handleCloseModal);

  const {
    data: notifications,
    handleUpdateNotification,
    handleDeleteNotification,
  } = useNotification({
    token,
  });

  return (
    <AlarmModalContainer>
      <AlarmButton type="button" aria-label="알림" onClick={handleShowModal}>
        {notifications && notifications.length !== 0 && (
          <AlarmCount>
            {notifications.length > 9 ? '9+' : notifications.length}
          </AlarmCount>
        )}
        {showModal ? <BsBellFill /> : <BsBell />}
      </AlarmButton>
      {showModal && notifications && (
        <AlarmModalCard ref={modalRef}>
          <AlarmList>
            {notifications.length === 0 ? (
              <InformationText>새로운 알림이 없습니다</InformationText>
            ) : (
              notifications.map((notification) => (
                <AlarmItem
                  key={notification.id}
                  notification={notification}
                  handleCloseModal={handleCloseModal}
                  handleUpdateNotification={handleUpdateNotification}
                  handleDeleteNotification={handleDeleteNotification}
                />
              ))
            )}
          </AlarmList>
          <CloseButton type="button" onClick={handleCloseModal}>
            닫기
          </CloseButton>
        </AlarmModalCard>
      )}
    </AlarmModalContainer>
  );
}

const AlarmModalContainer = styled.div`
  ${rowFlex}
  position: relative;
  z-index: 1;
`;

const AlarmButton = styled.button`
  width: 28px;
  height: 28px;
  font-size: 22px;
  color: var(--color-primary-pink);
`;

const AlarmCount = styled.span`
  display: inline-block;
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  width: 14px;
  height: 14px;
  line-height: 14px;
  text-align: center;
  border-radius: 50%;
  font-size: var(--font-size-xs);
  color: white;
  background-color: red;
`;

const AlarmModalCard = styled.div`
  ${colFlex}
  position: absolute;
  overflow: hidden;
  top: 40px;
  right: 0;
  width: 360px;
  max-height: 300px;
  background-color: white;
  border-radius: 16px;
  border: 1px solid var(--color-borderbottom-color);
`;

const AlarmList = styled.ul`
  overflow-y: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const InformationText = styled.div`
  text-align: center;
  padding: 40px;
`;

const CloseButton = styled.button`
  padding: 8px;
  border-top: 1px solid var(--color-borderbottom-color);
`;

export default AlarmModal;
