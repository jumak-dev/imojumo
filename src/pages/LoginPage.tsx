import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import FormBox from '../components/LoginSignupForm/Form';
import MainContainer from '../styles/layout';
import { userInfoAtom, jwtAtom, isLoginSelector } from '../recoil/recoil_state';
import { AlignCenter, ColFlexCenter } from '../styles/shared';

const { VITE_API_URL } = import.meta.env;

function LoginPage() {
  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();
  const setUserInfo = useSetRecoilState(userInfoAtom);
  const setJwt = useSetRecoilState(jwtAtom);
  const isLogin = useRecoilValue(isLoginSelector);
  const [displayError, setDisplayError] = useState('');

  useEffect(() => {
    if (isLogin) {
      navigate(-1);
    }
  }, []);

  const login = async (email: string, password: string) => {
    let newError = '';
    try {
      const response = await fetch(`${VITE_API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const data = await response.json();
        const { statusCode, message, error } = data;
        if (
          message.includes('No user found for username') ||
          message.includes('Invalid password')
        ) {
          newError = '아이디 또는 패스워드를 확인하세요.';
        }

        setDisplayError(newError);
        throw new Error(
          `서버에 이상이 있습니다 status: ${statusCode} message: ${message}, error: ${error}`,
        );
      }

      const jwt = response.headers.get('authorization');

      setJwt(jwt);

      const responseData = await response.json();

      setUserInfo(responseData);
      navigate('/');
    } catch (responseError) {
      if (responseError instanceof Error) {
        throw new Error(responseError.message);
      } else {
        throw new Error('An unexpected errorjwt occurred.');
      }
    }
  };

  const handleLogin = async (email: string, password: string) => {
    try {
      await login(email, password);
    } catch (loginError) {
      console.error(loginError);
    }
  };

  return (
    <PageContainer>
      <TextVectorContainer>
        <p>이모저모에 오신 것을 환영합니다.</p>
        <p>자유롭게 토론해보세요.</p>
        <Img alt="bookLogo" src="src/assets/bookVector.png" />
      </TextVectorContainer>
      <FormBox
        pathname={pathname}
        onSubmit={handleLogin}
        displayError={displayError}
      />
    </PageContainer>
  );
}

const PageContainer = styled(MainContainer)`
  ${AlignCenter}
  height: 100vh;
  justify-content: space-evenly;
`;

const TextVectorContainer = styled.section`
  ${ColFlexCenter}
  font-size: var(--font-size-xxl);

  p {
    margin-bottom: 5px;
  }
`;

const Img = styled.img`
  width: 210px;
  height: 185px;
`;

export default LoginPage;
