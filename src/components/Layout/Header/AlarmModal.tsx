import { useRef } from 'react';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import { BsBell, BsBellFill } from 'react-icons/bs';
import { colFlex, rowFlex } from '../../../styles/shared';
import useModal from '../../../hooks/useModal';
import useOnClickOutside from '../../../hooks/useOnClickOutside';

function AlarmModal() {
  const modalRef = useRef<HTMLDivElement>(null);
  const [showModal, handleShowModal, handleCloseModal] = useModal();

  useOnClickOutside(modalRef, handleCloseModal);

  return (
    <AlarmModalContainer>
      <AlarmButton type="button" aria-label="알람" onClick={handleShowModal}>
        <AlarmCount>1</AlarmCount>
        {showModal ? <BsBellFill /> : <BsBell />}
      </AlarmButton>
      {showModal && (
        <AlarmModalCard ref={modalRef}>
          <AlarmItem>
            <AlarmContent href="/">
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
  ${rowFlex}
  position: relative;
  z-index: 1;
`;

const AlarmButton = styled.button`
  position: relative;
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
  width: 12px;
  height: 12px;
  line-height: 12px;
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
  background-color: white;
  border-radius: 16px;
  border: 1px solid var(--color-borderbottom-color);
`;

const AlarmItem = styled.div`
  ${rowFlex}
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid var(--color-borderbottom-color);

  &:hover {
    background-color: var(--color-inputbox-bg);
  }
`;

const AlarmContent = styled.a`
  ${colFlex}
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
