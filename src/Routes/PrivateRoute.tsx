import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import isLoginSelector from '../recoil/seletors';

function PrivateRoute() {
  const isLogin = useRecoilValue(isLoginSelector);
  const location = useLocation();

  if (!isLogin) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <Outlet />;
}

export default PrivateRoute;
