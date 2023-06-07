import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import FormBox from '../components/LoginSignupForm/Form';
import MainContainer from '../styles/layout';
import validate from '../utils/auth/signupValidate';
import useSignup from '../hooks/auth/useSignup';
import WelcomeMessage from '../components/Auth/WelcomeMessage';

function SignupPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;
  const [displayError, setDisplayError] = useState('');

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

  return (
    <PageContainer>
      <WelcomeMessage />
      <FormBox
        pathname={pathname}
        displayError={displayError}
        onSubmit={handleSignup}
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

export default SignupPage;
