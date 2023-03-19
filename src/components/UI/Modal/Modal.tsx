import ModalPortal from './ModalPortal';

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
  function onClickYesButton() {
    if (yesCallback) {
      yesCallback();
    }
    handleCloseModal();
  }

  function onClickNoButton() {
    handleCloseModal();
  }

  return (
    <div>
      {showModal && (
        <ModalPortal onClose={handleCloseModal}>
          <h3>{title}</h3>
          <p>{content}</p>
          <div>
            <button type="button" name="yes" onClick={onClickYesButton}>
              확인
            </button>
            <button type="button" name="no" onClick={onClickNoButton}>
              취소
            </button>
          </div>
        </ModalPortal>
      )}
    </div>
  );
}

export default Modal;
