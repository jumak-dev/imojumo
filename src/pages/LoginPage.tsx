import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import FormBox from '../components/LoginSignupForm/Form';
import MainContainer from '../styles/layout';
import { userInfoAtom, jwtAtom } from '../recoil/atoms';
import isLoginSelector from '../recoil/seletors';
import { alignCenter } from '../styles/shared';
import useLogin from '../hooks/auth/useLogin';
import WelcomeMessage from '../components/Auth/WelcomeMessage';

function LoginPage() {
  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();
  const setUserInfo = useSetRecoilState(userInfoAtom);
  const setJwt = useSetRecoilState(jwtAtom);
  const isLogin = useRecoilValue(isLoginSelector);
  const [displayError, setDisplayError] = useState('');
  const { mutate: loginMutate } = useLogin({
    onSuccess: ({ response, responseJson }) => {
      const jwt = response.headers.get('authorization');
      setUserInfo(responseJson);
      setJwt(jwt);
      navigate('/');
    },
    onError: (error) => {
      console.log(error);
      setDisplayError(String(error.message));
    },
  });

  useEffect(() => {
    if (isLogin) {
      navigate(-1);
    }
  }, []);

  const handleLogin = async (email: string, password: string) => {
    loginMutate({ email, password });
  };

  return (
    <PageContainer>
      <WelcomeMessage />
      <FormBox
        pathname={pathname}
        onSubmit={handleLogin}
        displayError={displayError}
      />
    </PageContainer>
  );
}

const PageContainer = styled(MainContainer)`
  ${alignCenter}
  height: 100vh;
  justify-content: space-evenly;
`;

export default LoginPage;
