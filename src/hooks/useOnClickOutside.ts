import { RefObject, useEffect } from 'react';

function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: Event) => void,
) {
  useEffect(() => {
    const listener = (event: Event) => {
      if (!ref.current || ref.current.contains(event.target as HTMLElement)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('click', listener, true);

    return () => {
      document.removeEventListener('click', listener, true);
    };
  }, [ref, handler]);
}

export default useOnClickOutside;
