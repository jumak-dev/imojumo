import React, { useId, useState } from 'react';
import styled from 'styled-components';
import { Form, NavLink } from 'react-router-dom';
import Button from '../UI/Button/Button';
import { colFlex, flex, rowFlex } from '../../styles/shared';

interface FormProps {
  isLoginPage: boolean;
  displayError: string;
  onSubmit: (email: string, password: string, checkPassword: string) => void;
  onGoogleSubmit: () => void;
}

function FormBox({
  isLoginPage,
  displayError,
  onSubmit,
  onGoogleSubmit,
}: FormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [isStayLoggedIn, setIsStayLoggedIn] = useState(
    localStorage.getItem('stayLoggedIn') === 'true' || false,
  );

  const emailId = useId();
  const passwordId = useId();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    if (name === 'email') {
      setEmail(value);
      return;
    }
    if (name === 'password') {
      setPassword(value);
      return;
    }
    setCheckPassword(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(email, password, checkPassword);
  };

  const handleStayLoggedIn = () => {
    setIsStayLoggedIn((prev) => !prev);
    localStorage.setItem('stayLoggedIn', String(!isStayLoggedIn));
  };

  return (
    <FormContainer>
      <ButtonsWrapper>
        <PathChangeButton to="/login">로그인</PathChangeButton>
        <PathChangeButton to="/signup">회원가입</PathChangeButton>
      </ButtonsWrapper>
      <FormWrraper>
        <DisplayErrorWrraper>
          {!(displayError.length === 0) && <li>{displayError}</li>}
        </DisplayErrorWrraper>
        <InnerForm method="post" onSubmit={handleSubmit}>
          <Lable htmlFor={emailId}>이메일</Lable>
          <Input
            id={emailId}
            type="email"
            name="email"
            value={email}
            placeholder="이메일을 입력하세요"
            required
            onChange={onChange}
          />
          <Lable htmlFor={passwordId}>비밀번호</Lable>
          <Input
            id={passwordId}
            type="password"
            name="password"
            value={password}
            placeholder="비밀번호를 입력하세요"
            required
            onChange={onChange}
          />
          {!isLoginPage && (
            <Input
              type="password"
              name="checkPassword"
              placeholder="비밀번호를 확인하세요"
              onChange={onChange}
            />
          )}
          {isLoginPage && (
            <StayLoggedInContainer>
              <Input
                type="checkbox"
                name="stayLoggedIn"
                id="stayLoggedIn"
                onChange={handleStayLoggedIn}
                checked={isStayLoggedIn}
              />
              <label htmlFor="stayLoggedIn">로그인 상태 유지</label>
            </StayLoggedInContainer>
          )}
          <Button
            buttonType="button"
            type="submit"
            buttonSize="xl"
            buttonColor="mint"
            margin="0 0 24px 0"
          >
            {isLoginPage ? '로그인 하기' : '회원가입 하기'}
          </Button>
          <Button
            type="button"
            buttonType="button"
            buttonSize="xl"
            buttonColor="pink"
            margin="0 0 36px 0"
            onClick={onGoogleSubmit}
          >
            {isLoginPage ? '구글 로그인' : '구글 회원가입'}
          </Button>
        </InnerForm>
      </FormWrraper>
    </FormContainer>
  );
}

const StayLoggedInContainer = styled.section`
  ${rowFlex}
  align-items: center;

  input {
    margin-bottom: 3px;
    margin-right: 5px;
  }
`;

const DisplayErrorWrraper = styled.ul`
  ${colFlex}
  width: 80%;
  margin: 15px auto;
  color: var(--color-heart);
  font-size: var(--font-size-m);
  line-height: 20px;
`;

const FormContainer = styled.article`
  ${colFlex}
  font-size: var(--font-size-l);
  border-radius: 20px;
`;

const ButtonsWrapper = styled.section`
  ${flex};
  border: 1px solid var(--color-inputbox-line);
  border-bottom: none;
  width: 100%;
  background-color: #d0d0d0;
  border-radius: 20px 20px 0 0;
`;

const PathChangeButton = styled(NavLink)`
  ${flex}
  width: 50%;
  height: 72px;
  border-radius: 20px 20px 0 0;
  font-size: var(--font-size-l);

  &.active {
    background-color: var(--white);
  }
`;

const FormWrraper = styled.section`
  width: 460px;
  border: 1px solid var(--color-inputbox-line);
  border-top: none;
  border-radius: 0 0 20px 20px;
  padding-top: 24px;
`;

const InnerForm = styled(Form)`
  ${colFlex}
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
