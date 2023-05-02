import { useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import { BsBell, BsBellFill } from 'react-icons/bs';
import { ColFlex, RowFlex } from '../../../styles/shared';
import useModal from '../../../hooks/useModal';
import useOnClickOutside from '../../../hooks/useOnClickOutside';

function AlarmModal() {
  const modalRef = useRef<HTMLDivElement>(null);
  const [showModal, handleShowModal, handleCloseModal] = useModal();

  useOnClickOutside(modalRef, handleCloseModal);

  return (
    <AlarmModalContainer>
      <AlarmButton type="button" aria-label="알람" onClick={handleShowModal}>
        {showModal ? <BsBellFill /> : <BsBell />}
      </AlarmButton>
      {showModal && (
        <AlarmModalCard ref={modalRef}>
          <AlarmItem>
            <AlarmContent to="/">
              <AlarmTitle>내 게시글에 댓글이 등록되었습니다.</AlarmTitle>
              <AlarmDate>2023.02.04</AlarmDate>
            </AlarmContent>
            <DeleteButton type="button" aria-label="삭제">
              <AiOutlineClose />
            </DeleteButton>
          </AlarmItem>
          <CloseButton type="button" onClick={handleCloseModal}>
            닫기
          </CloseButton>
        </AlarmModalCard>
      )}
    </AlarmModalContainer>
  );
}

const AlarmModalContainer = styled.div`
  ${RowFlex}
  position: relative;
  z-index: 1;
`;

const AlarmButton = styled.button`
  width: 40px;
  height: 40px;
  font-size: 22px;
  color: var(--color-primary-pink);
`;

const AlarmModalCard = styled.div`
  ${ColFlex}
  position: absolute;
  overflow: hidden;
  top: 40px;
  right: 0;
  width: 360px;
  background-color: white;
  border-radius: 16px;
  border: 1px solid var(--color-borderbottom-color);
`;

const AlarmItem = styled.div`
  ${RowFlex}
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid var(--color-borderbottom-color);

  &:hover {
    background-color: var(--color-inputbox-bg);
  }
`;

const AlarmContent = styled(Link)`
  ${ColFlex}
  flex: 1;
  gap: 8px;
`;

const AlarmTitle = styled.p``;

const AlarmDate = styled.span`
  font-size: var(--font-size-sm);
  color: var(--color-content-text);
`;

const DeleteButton = styled.button`
  font-size: 16px;

  &:hover {
    color: var(--color-heart);
  }
`;

const CloseButton = styled.button`
  padding: 8px;
`;

export default AlarmModal;
