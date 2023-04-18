import { useState } from 'react';

function useVisibles(initialVisible: boolean): [boolean, () => void] {
  const [visible, setVisible] = useState(initialVisible);

  const toggleVisibility = () => {
    setVisible((prev) => !prev);
  };

  return [visible, toggleVisibility];
}

export default useVisibles;
