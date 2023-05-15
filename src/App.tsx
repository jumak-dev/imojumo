import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import logout from './utils/auth/logout';

import route from './Routes';

function App() {
  useEffect(() => {
    const isStayLoggedIn =
      localStorage.getItem('stayLoggedIn') === 'true' || false;
    return () => {
      if (!isStayLoggedIn) {
        logout();
      }
    };
  }, []);

  return (
    <RecoilRoot>
      <RouterProvider router={route} />
    </RecoilRoot>
  );
}

export default App;
