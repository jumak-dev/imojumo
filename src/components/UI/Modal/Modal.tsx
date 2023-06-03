import { useCallback } from 'react';
import styled from 'styled-components';
import ModalPortal from './ModalPortal';
import Button from '../Button/Button';

interface Props {
  title: string;
  content: string;
  showModal: boolean;
  yesCallback?: () => void;
  handleCloseModal: () => void;
}

function Modal({
  title,
  content,
  showModal,
  yesCallback,
  handleCloseModal,
}: Props) {
  const onClickYesButton = useCallback(() => {
    if (yesCallback) {
      yesCallback();
    }
    handleCloseModal();
  }, [yesCallback, handleCloseModal]);

  const onClickNoButton = useCallback(() => {
    handleCloseModal();
  }, [handleCloseModal]);

  return (
    <div>
      {showModal && (
        <ModalPortal onClose={handleCloseModal}>
          <h3>{title}</h3>
          <p>{content}</p>
          <ButtonWrraper>
            <Button
              type="button"
              buttonType="button"
              buttonColor="mint"
              name="yes"
              buttonSize="sm"
              onClick={onClickYesButton}
            >
              확인
            </Button>
            <Button
              type="button"
              buttonType="button"
              name="no"
              buttonColor="pink"
              buttonSize="sm"
              onClick={onClickNoButton}
            >
              취소
            </Button>
          </ButtonWrraper>
        </ModalPortal>
      )}
    </div>
  );
}

const ButtonWrraper = styled.section`
  display: flex;
`;

export default Modal;
