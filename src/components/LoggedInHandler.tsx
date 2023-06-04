import React, { ReactElement, ReactNode, useEffect } from 'react';
import { useResetRecoilState } from 'recoil';
import { jwtAtom, userInfoAtom } from '../recoil/atoms';
import logout from '../utils/auth/logout';

interface LoggedInHandlerProps {
  children: ReactNode;
}

function LoggedInHandler({
  children,
}: LoggedInHandlerProps): ReactElement | null {
  const resetUserInfo = useResetRecoilState(userInfoAtom);
  const resetJwt = useResetRecoilState(jwtAtom);

  useEffect(() => {
    const isStayLoggedIn =
      localStorage.getItem('stayLoggedIn') === 'true' || false;

    if (!isStayLoggedIn) {
      logout();
      resetUserInfo();
      resetJwt();
    }
  }, []);

  return React.isValidElement(children) ? children : null;
}

export default LoggedInHandler;
