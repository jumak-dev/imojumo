import { useEffect } from 'react';

import logout from '../utils/auth/logout';

function useLoggedIn() {
  useEffect(() => {
    const isStayLoggedIn =
      localStorage.getItem('stayLoggedIn') === 'true' || false;
    return () => {
      if (!isStayLoggedIn) {
        logout();
      }
    };
  }, []);
}

export default useLoggedIn;
