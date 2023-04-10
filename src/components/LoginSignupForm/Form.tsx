import React, { useId, useState } from 'react';
import styled from 'styled-components';
import { Form, useNavigate } from 'react-router-dom';
import Button from '../UI/Button/Button';

interface FormProps {
  pathname: string;
}

function FormBox({ pathname }: FormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const isLogin = pathname.includes('login');
  const navigate = useNavigate();

  const emailId = useId();
  const passwordId = useId();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'email') {
      setEmail(e.target.value);
      return;
    }
    if (e.target.name === 'password') {
      setPassword(e.target.value);
      return;
    }
    setCheckPassword(e.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const path = (e.target as HTMLButtonElement).value;
    if (path === pathname) {
      return;
    }
    navigate(path);
  };

  return (
    <FormContainer>
      <ButtonsWrapper>
        <PathChangeButton
          onClick={handleClick}
          isLogin={isLogin}
          value="/login"
          type="button"
        >
          로그인
        </PathChangeButton>
        <PathChangeButton
          onClick={handleClick}
          isLogin={isLogin}
          value="/signup"
          type="button"
        >
          회원가입
        </PathChangeButton>
      </ButtonsWrapper>
      <StyledForm>
        <InnerForm>
          <Lable htmlFor={emailId}>이메일</Lable>
          <Input
            id={emailId}
            type="email"
            name="email"
            value={email}
            placeholder="이메일을 입력하세요"
            onChange={onChange}
          />
          <Lable htmlFor={passwordId}>비밀번호</Lable>
          <Input
            id={passwordId}
            type="password"
            name="password"
            value={password}
            placeholder="비밀번호를 입력하세요"
            onChange={onChange}
          />
          {!isLogin && (
            <Input
              type="password"
              name="checkPassword"
              value={checkPassword}
              placeholder="비밀번호를 확인하세요"
              onChange={onChange}
            />
          )}

          <Button
            buttonType="button"
            type="submit"
            buttonSize="xl"
            buttonColor="mint"
            margin="0 0 24px 0"
          >
            {isLogin ? '로그인 하기' : '회원가입 하기'}
          </Button>
          <Button
            type="button"
            buttonType="button"
            buttonSize="xl"
            buttonColor="pink"
            margin="0 0 36px 0"
          >
            {isLogin ? '구글 로그인' : '구글 회원가입'}
          </Button>
        </InnerForm>
      </StyledForm>
    </FormContainer>
  );
}

const FormContainer = styled.article`
  display: flex;
  flex-direction: column;
  font-size: var(--font-size-l);
  border-radius: 20px;
`;

const ButtonsWrapper = styled.section`
  border: 1px solid var(--color-inputbox-line);
  border-bottom: none;
  width: 100%;
  background-color: #d0d0d0;
  border-radius: 20px 20px 0 0;
`;

interface PathChangeButtonProps {
  isLogin: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const PathChangeButton = styled.button<PathChangeButtonProps>`
  width: 50%;
  height: 72px;
  border-radius: 20px 20px 0 0;
  font-size: var(--font-size-l);

  &:nth-child(${(props) => (props.isLogin ? '1' : '2')}) {
    background-color: var(--white);
  }
`;

const StyledForm = styled(Form)`
  width: 460px;
  border: 1px solid var(--color-inputbox-line);
  border-top: none;
  border-radius: 0 0 20px 20px;
  padding-top: 24px;
`;

const InnerForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
`;

const Lable = styled.label`
  padding-left: 5px;
  margin-bottom: 12px;
`;

const Input = styled.input`
  font-size: var(--font-size-sm);
  border: 1px solid var(--color-inputbox-line);
  height: 40px;
  border-radius: 5px;
  padding-left: 10px;
  margin-bottom: 24px;
`;

export default FormBox;
