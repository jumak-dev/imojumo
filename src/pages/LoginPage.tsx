import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';

import { APIError } from '../types';
import MainContainer from '../styles/layout';
import { alignCenter } from '../styles/shared';
import FormBox from '../components/LoginSignupForm/Form';
import WelcomeMessage from '../components/Auth/WelcomeMessage';
import { userInfoAtom, jwtAtom } from '../recoil/atoms';
import isLoginSelector from '../recoil/seletors';
import { googleLogin } from '../apis/auth';
import useLogin from '../hooks/auth/useLogin';
import useSignup from '../hooks/auth/useSignup';
import validate from '../utils/auth/signupValidate';

interface LoginPageProps {
  authType: 'login' | 'signup';
}

function LoginPage({ authType }: LoginPageProps) {
  const navigate = useNavigate();
  const setUserInfo = useSetRecoilState(userInfoAtom);
  const setJwt = useSetRecoilState(jwtAtom);
  const isLogin = useRecoilValue(isLoginSelector);
  const [displayError, setDisplayError] = useState('');
  const isLoginPage = authType === 'login';

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

  const { mutate: signupMutate } = useSignup({
    onSuccess: () => {
      navigate('/login');
    },
    onError: (error) => {
      console.log(error);
      setDisplayError(String(error.message));
    },
  });

  const handleSignup = async (
    email: string,
    password: string,
    checkPassword: string,
  ) => {
    if (validate(email, password, checkPassword, setDisplayError)) {
      signupMutate({ email, password });
    }
  };

  const handleGoogleLogin = useGoogleLogin({
    flow: 'auth-code',
    onSuccess: async ({ code }) => {
      try {
        const { response, responseJson } = await googleLogin(code);
        console.log(response);
        const jwt = response.headers.get('authorization');

        setUserInfo(responseJson);
        setJwt(jwt);
        navigate('/');
      } catch (error) {
        console.log(error);

        if (typeof error === 'object' && error !== null && 'message' in error) {
          setDisplayError(String((error as APIError).message));
        } else {
          setDisplayError(String(error));
        }
      }
    },
    onError: (errorResponse) => {
      console.log(errorResponse.error);
      setDisplayError(String(errorResponse.error_description));
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
        isLoginPage={isLoginPage}
        onSubmit={isLoginPage ? handleLogin : handleSignup}
        onGoogleSubmit={handleGoogleLogin}
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
