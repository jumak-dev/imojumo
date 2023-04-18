import { useState } from 'react';

function useModal(): [boolean, () => void, () => void] {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return [showModal, handleShowModal, handleCloseModal];
}

export default useModal;
