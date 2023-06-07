const validate = (
  email: string,
  password: string,
  checkPassword: string,
  setDisplayError: (message: string) => void,
): boolean => {
  let errorMessage = '';
  const emailRegex = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{8,20}$/;

  const isEmailValid = emailRegex.test(email);
  const isPasswordValid = passwordRegex.test(password);

  if (!isEmailValid) {
    errorMessage =
      '이메일이 올바르지 않습니다. 올바른 이메일 주소를 입력해주세요.';
  } else if (!isPasswordValid) {
    errorMessage =
      '비밀번호가 올바르지 않습니다. 최소 8자, 최소 하나의 문자, 숫자, 특수문자를 포함해주세요.';
  } else if (password !== checkPassword) {
    errorMessage = '비밀번호가 일치하지 않습니다.';
  }

  setDisplayError(errorMessage);
  return isEmailValid && isPasswordValid;
};

export default validate;
