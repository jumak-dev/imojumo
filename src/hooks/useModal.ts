import { useState } from 'react';

type CloseCallback = () => void;

function useModal(
  closeCallBack?: CloseCallback,
): [boolean, () => void, () => void] {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    if (closeCallBack) closeCallBack();
  };

  return [showModal, handleShowModal, handleCloseModal];
}

export default useModal;
