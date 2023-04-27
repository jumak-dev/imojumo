import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { useState } from 'react';
import FormBox from '../components/LoginSignupForm/Form';
import MainContainer from '../styles/layout';
import userInfoAtom from '../recoil/recoil_state';

const { VITE_API_URL } = import.meta.env;

function LoginPage() {
  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();
  const setUserInfo = useSetRecoilState(userInfoAtom);
  const [displayError, setDisplayError] = useState('');

  const login = async (email: string, password: string) => {
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
        setDisplayError('아이디 또는 패스워드를 확인하세요.');
        console.error(
          `서버에 이상이 있습니다 status: ${statusCode} message: ${message}, error: ${error}`,
        );
      }

      const responseData = await response.json();
      setUserInfo(responseData);
      navigate('/');
    } catch (responseError) {
      if (responseError instanceof Error) {
        console.error(responseError.message);
      } else {
        console.error('An unexpected error occurred.');
      }
    }
  };

  const handleLogin = async (email: string, password: string) => {
    login(email, password);
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
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: space-evenly;
`;

const TextVectorContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
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
