import { useState } from 'react';
import ModalPortal from './ModalPortal';

// 콜백펑션을 받아서 연결시
function ModalExample() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button type="button" onClick={handleShowModal}>
        Show Modal
      </button>
      {showModal && (
        <ModalPortal onClose={handleCloseModal}>
          <h1>Modal Content</h1>
          <p>This is the content of the modal.</p>
        </ModalPortal>
      )}
    </div>
  );
}

export default ModalExample;
