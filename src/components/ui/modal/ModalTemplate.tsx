import ModalPortal from './ModalPortal';

interface Props {
  title: string;
  content: string;
  showModal: boolean;
  yesCallback?: () => void;
  noCallack?: () => void;
  handleCloseModal: () => void;
}

function ModalTemplate({
  title,
  content,
  showModal,
  yesCallback,
  noCallack,
  handleCloseModal,
}: Props) {
  function onClickYesButton() {
    if (yesCallback) {
      yesCallback();
    }
    handleCloseModal();
  }

  function onClickNoButton() {
    if (noCallack) {
      noCallack();
    }
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

export default ModalTemplate;
