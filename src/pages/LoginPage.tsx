import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import FormBox from '../components/LoginSignupForm/Form';
import MainContainer from '../styles/layout';

function LoginPage() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <PageContainer>
      <TextVectorContainer>
        <p>이모저모에 오신 것을 환영합니다.</p>
        <p>자유롭게 토론해보세요.</p>
        <Img alt="bookImg" src="src/assets/bookVector.png" />
      </TextVectorContainer>
      <FormBox pathname={pathname} />
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
