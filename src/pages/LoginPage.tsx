import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import FormBox from '../components/LoginSignupForm/Form';
import MainContainer from '../styles/layout';
import { userInfoAtom, jwtAtom } from '../recoil/atoms';
import isLoginSelector from '../recoil/seletors';
import { alignCenter, colFlexCenter } from '../styles/shared';
import useLogin from '../hooks/auth/useLogin';

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
  ${alignCenter}
  height: 100vh;
  justify-content: space-evenly;
`;

const TextVectorContainer = styled.section`
  ${colFlexCenter}
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
